<template>
  <div>

    <!-- Page Content -->
    <div class="content">
      <base-block rounded title="Batteries" ref="blockLoadingRefresh" class="block-mode-loading-refresh"  header-bg btn-option-fullscreen >
		<template #options>
			<button type="button" data-uk-tooltip="Refresh" class="btn-block-option" @click="resetRecords('blockLoadingRefresh')">
			<i class="si si-refresh"></i>
			</button>
			<button type="button" data-uk-tooltip="Add new record" class="btn-block-option" @click="addRecord">
			<i class="si si-plus"></i>
			</button>
			<button type="button" data-uk-tooltip="Filter records" class="btn-block-option">
			<i class="fa fa-filter"></i>
			</button>
			
		</template>
	
	  <!-- search and filter ------- ************************ -->
		<div class="dmk-search-td-con">
		<RowsFilter :rowsPerPage="rowsPerPage">
			<select v-on:change="rowsPerPage()" v-model="pagination.rowperPage" id="rowsperPage" style="text-align:center;">									
				<option value="10">10</option>
				<option value="25">25</option>
				<option value="50">50</option>
				<option value="100">100</option>
			</select>
		</RowsFilter>

			<div style="display:flex">
				<form @submit.prevent="searchRecords()" method="get">
					<div class="dmk-search-con">
						<input type="text" v-model="search.queary" placeholder="search " class="form-control dmk-search-input">
						<button type="submit" class="dmk-search-btn"> <i class="fa fa-search" aria-hidden="true"></i> </button>
					</div>
				</form>
				
			</div>
		</div>
		<!-- search and filter ------- ************************ -->

    <!-- TABLE **************************-->
        <RecordTable :records="records">
			<tr v-for="(rs, index) in records" :key="rs.id" id="dmk-td-items">
			<td style="" class="td-1st-nth"> {{ index + 1 }} </td>
			<td>{{ rs.code }}</td>
			<td class="text-center">{{ rs.location }}</td>
			<td class="text-center">{{ rs.condition }}</td>
			<td class="text-center">
				<button v-if="rs.status == 'Charging'" class=" btn status-btn btn-success " type="button" aria-expanded="false">
					{{ rs.status }}
				</button>
				<button v-else-if="rs.status == 'Issued'" class=" btn status-btn btn-primary " type="button" aria-expanded="false">
					{{ rs.status }}
				</button>
				<button v-else class=" btn status-btn btn-secondary " type="button" aria-expanded="false">
					{{ rs.status }}
				</button>
			</td>
            <td>
            <EDropdown 
                :statusCode="rs.status" 
                :Id="rs.id" 
                :deleteRecord="deleteRecord"
                :restoreRecord="restoreRecord"
                :getRecordById="viewRecord"
				:qrgenerate = "qrgenerate"
                :getRecordUpdateById="getRecordById"
                :perms_view = "perms.perms_view"
				:perms_barcode = "perms.perms_barcode"
                :perms_update = "perms.perms_update"
                :perms_delete = "perms.perms_delete"
                :perms_restore = "perms.perms_restore"
                >						
            </EDropdown>
            </td>
			</tr>
		</RecordTable>
        <!-- TABLE ************************ -->
		<!-- table bottom start-->
		 <div style=" display:flex; justify-content:space-between">
		<div style=""></div>
        <!-- Pagination start -->
		<DcPagination 
			:countOnPage="this.pagination.countOnPage"
			:rows="this.pagination.rows"
			:fromCount="this.pagination.fromCount"
			:toCount="this.pagination.toCount"
			:rowperPage="this.pagination.rowperPage"
			:currentPage="this.pagination.currentPage"
			:totalPages="this.pagination.totalPages"
			:previousPage="previousPage"
			:nextPage = "nextPage"
			:searchPageNo = "searchPageNo"
			><input type="number" v-model="pagination.currentPage"  class="dmk-searpage-input" style="text-align:center;">
		</DcPagination>
		<!-- pagination end -->

		 </div>

		<!-- table bottom end -->
      </base-block>
	  <!-- modal -->
	  <OuModal mdId="add-record" size="md" title="Add Battery">
		  <CreateRecord :getRecords="getRecords"/>
	  </OuModal>

	  <OuModal mdId="dmk-view-record" size="md" title="Battery Details" :modalSpinner="record_spinner">
		  <RecordView :recordbyId="recordbyId" />
	  </OuModal>

	  <OuModal mdId="dmk-barcode" size="md" title="Battery Barcode" :modalSpinner="record_spinner">
		  <Barcode :recordbyId="recordbyId" />
	  </OuModal>

	  <OuModal mdId="dmk-update-record" size="md" title="Update Battery Details" :modalSpinner="record_spinner">
			<RecordUpdate :recordbyId="recordbyId" :getRecords="getRecords"/>
        </OuModal>
	  <!-- modal -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
import Button from '~/components/common/Button.vue';
import RecordTable from './table.vue';
import CreateRecord from './create.vue'
import RecordView from './view.vue'
import RecordUpdate from './update.vue'
import Barcode from './barcode.vue'
export default {
    components:{ RecordTable, Button, CreateRecord, RecordView, RecordUpdate, Barcode },
    data(){
        return{
            records:[],
            recordbyId:{},
            status:'9',
            record_spinner:false,
            search:{ queary: '', pageSearch:null, pageError:false, },
            pagination:{ rows:null,   perPage: null,  rowperPage:null, currentPage: null,   countOnPage:null,  totalPages:null,  fromCount:null,  toCount:null, },
			paginationLinks:{self:'', last:'', first:'', prev:'', },
			global_pagination:{},
			perms:{ perms_add:'', perms_view:'', perms_update:'', 
			perms_delete:'', perms_restore:'', perms_status:'' ,
			barcode:''
			}
        }
    },
    mounted(){
        this.getRecordOnMount();
        this.getPerms();
		// document.querySelector('body').style.backgroundColor='#ffffff' 
    },
   	methods:{

	setLoadingTrue(){
		var ref = "blockLoadingRefresh";
		this.$refs[ref].stateLoading()
	},
	setLoadingFalse(){
		var ref = "blockLoadingRefresh";
		this.$refs[ref].stateNormal();
	},
		getPerms(){
		  this.perms.perms_add = '1'
		  this.perms.perms_view = '1'
		  this.perms.perms_update = '1'
		  this.perms.perms_delete = '1'
		  this.perms.perms_restore = '1'
		  this.perms.perms_status = '1'
		  this.perms.perms_barcode = '1'
		},

        async getRecordOnMount(){
			this.setLoadingTrue();
            await this.$axios.$get("v1/batteries")
            .then((resp) =>{
                this.records = resp;
				console.warn(this.records)  
            })
			this.setLoadingFalse(); 
        },

		async getRecords(){
			this.setLoadingTrue();
            await this.$axios.$get("v1/batteries")
            .then((resp) =>{
                this.records = resp;        
            })
			this.setLoadingFalse();
        },

       async getRecordById(id){
           this.$bvModal.show('dmk-update-record');	
           this.record_spinner = true;	
           await this.$axios.$get(`v1/battery/${id}`)	
            .then((resp) =>{
                this.recordbyId = resp;
				console.warn(resp);
            })
            this.record_spinner = false;
        },

        async viewRecord(id){
           this.$bvModal.show('dmk-view-record');	
           this.record_spinner = true;	
           await this.$axios.$get(`v1/battery/${id}`)	
            .then((resp) =>{
                this.recordbyId = resp;
            })
            this.record_spinner = false;
        },

		 async qrgenerate(id){
           this.$bvModal.show('dmk-barcode');	
           this.record_spinner = true;	
           await this.$axios.$get(`v1/battery/${id}`)	
            .then((resp) =>{
                this.recordbyId = resp;
            })
            this.record_spinner = false;
        },


    deleteRecord(id){
	Swal.fire({
			icon: 'warning',
			title: 'Do you want to delete selected record?',
			showCancelButton: true,
			confirmButtonText: `Delete`,
			}).then((result) => {
			if (result.isConfirmed) {
				 this.$axios.$delete(`v1/battery/delete/${id}`)
					.then((resp) =>{
						if(resp.error == 'false'){
							let swa_msg = 'Battery record deleted successfully';
							let del_theme = 'success'
							Swal.fire(swa_msg, '', del_theme)
							this.getRecords();
						 }
					})
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info')
			}
		})
	  },


	async searchRecords(){
	  this.setLoadingTrue();
	  if(this.search.queary == ''){
		  this.getRecordOnMount();
	  }
       await this.$axios.$get(`v1/battery/search/${this.search.queary}`)
           .then((resp) =>{
			   this.records = resp; 
           })
		   this.setLoadingFalse();
    },


	resetRecords(ref){
		this.$refs[ref].stateLoading()
		this.search = {}
		this.getRecordOnMount();
		setTimeout(() => {
        // Set the block back to normal state
        this.$refs[ref].stateNormal()
      }, 2000)
	},


    addRecord(){
        this.$bvModal.show('add-record');	
    },
	},

 head(){
		return{
			title:"Gecss | Batteries"
		}
	}


}
</script>

<style scoped>
.status-btn{
	border-radius: 0px !important;
	padding: 0px 2px 0px 2px !important;
	font-size: 12px !important;
	width: 80px !important;
}
</style>
