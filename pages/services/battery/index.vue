<template>
  <div>

    <!-- Page Content -->
    <div class="content">
		<!-- Statistics start -->
		<div>
			<Statistics/>
		</div>
		<!-- Statistics end -->
      <base-block rounded title="Batteries" ref="blockLoadingRefresh" class="block-mode-loading-refresh"  header-bg btn-option-fullscreen >
		<template #options>
			<button type="button" data-uk-tooltip="Refresh" class="btn-block-option" @click="resetRecords('blockLoadingRefresh')">
			<i class="si si-refresh"></i>
			</button>
			<button type="button" data-uk-tooltip="Add new record" class="btn-block-option" @click="addRecord">
			<i class="si si-plus"></i>
			</button>
			<button @click="filterRecord" type="button" data-uk-tooltip="Filter records" class="btn-block-option">
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
				<button v-else-if="rs.status == 'Depleted'" class=" btn status-btn btn-warning " type="button" aria-expanded="false">
					{{ rs.status }}
				</button>
				<button v-else-if="rs.status == 'Charged'" class=" btn status-btn btn-info " type="button" aria-expanded="false">
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
		  <CreateRecord :getRecords="getRecords" :branches="branches"/>
	  </OuModal>

	  <OuModal mdId="dmk-view-record" size="md" title="Battery Details" :modalSpinner="record_spinner">
		  <RecordView :recordbyId="recordbyId" />
	  </OuModal>

	  <OuModal mdId="dmk-barcode" size="md" title="Battery Barcode" :modalSpinner="record_spinner">
		  <Barcode :recordbyId="recordbyId" />
	  </OuModal>

	  <OuModal mdId="dmk-update-record" size="md" title="Update Battery Details" :modalSpinner="record_spinner">
			<RecordUpdate :recordbyId="recordbyId" :getRecords="getRecords" :branches="branches" :bet_status="bet_status"/>
        </OuModal>
	<!-- FILTER MODAL START -->
	<OuModal mdId="filter-record" size="md" title="Filter Batteries">
		  <div>
			  <b-form @submit.prevent="filterRecords">
				<div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;"> Swap Center</label>
					<b-form-select v-model="fsearch.swap" :options="branches" required></b-form-select>
				</div>
				</div>  
				<br>

				<div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">Battery Status</label>
					<b-form-select v-model="fsearch.status" :options="filterstatus" required  ></b-form-select>
				</div>
				</div>  
				<br>

				<div>
					<center>
						<b-button v-if="setLoadingfilter" variant="outline-primary" disabled squared >
                         <b-spinner small type="grow"></b-spinner> Loading... </b-button>
						<b-button v-else type="submit" squared variant="primary">Pull Results</b-button>
					</center>
				</div>
				<br>

        </b-form>
		  </div>
	  </OuModal>
	<!-- FILTER MODAL END -->
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
import Statistics from './statistics.vue'
import Barcode from './barcode.vue'
import dayjs from 'dayjs';
export default {
	layout:'default_common',
    components:{ RecordTable, Button, CreateRecord, RecordView, RecordUpdate, Barcode, Statistics },
    data(){
        return{
            records:[],
            recordbyId:{},
            status:'9',
			branches:[],
            record_spinner:false,
			setLoadingfilter:false,
            search:{ queary: '', pageSearch:null, pageError:false, },
			fsearch:{ status: '', swap:'' },
			filterstatus:['Issued', 'Depleted', 'Charging', 'Charged'],
            pagination:{ rows:null,   perPage: null,  rowperPage:null, currentPage: null,   countOnPage:null,  totalPages:null,  fromCount:null,  toCount:null, },
			paginationLinks:{self:'', last:'', first:'', prev:'', },
			global_pagination:{},
			perms:{ perms_add:'', perms_view:'', perms_update:'', 
			perms_delete:'', perms_restore:'', perms_status:'' ,
			barcode:'',
			betstatus:[],
			}
        }
    },

	// created() {
	// 	dayjs.extend(LocalizedFormat)
    // },

	filters: {
		diffForHumans: (date) => {
			if (!date){
				return null;
			}
			
			return dayjs(date).format('MMM, ddd D. YYYY h:mm A');
			// return dayjs(date).fromNow();
		}
	},

    mounted(){
        this.getRecordOnMount();
        this.getPerms();
		this.getBranchesOnMount();
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

		 async getBranchesOnMount(){
			 let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get("v1/branch/list")
            .then((resp) =>{
                this.branches = resp; 
				this.bet_status = ['Charged', 'Charging', 'Issued', 'Depleted']
            })
        },

		async filterRecords(){
			const formData = {
				'status':this.fsearch.status,
				'loc': this.fsearch.swap
			}
			this.setLoadingfilter = true;
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post("v1/battery/filters", formData)
            .then((resp) =>{
				this.$bvModal.hide('filter-record')
                this.records = resp;
            })
			this.setLoadingfilter = false;
        },

        async getRecordOnMount(){
			this.setLoadingTrue();
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get("v1/batteries")
            .then((resp) =>{
                this.records = resp;
            })
			this.setLoadingFalse(); 
        },

		async getRecords(){
			this.setLoadingTrue();
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get("v1/batteries")
            .then((resp) =>{
                this.records = resp;        
            })
			this.setLoadingFalse();
        },

       async getRecordById(id){
           this.$bvModal.show('dmk-update-record');	
           this.record_spinner = true;	
		   let token = localStorage.getItem('token')
		   this.$axios.defaults.headers.common["Authorization"] = "Token " + token
           await this.$axios.$get(`v1/battery/${id}`)	
            .then((resp) =>{
                this.recordbyId = resp;
            })
            this.record_spinner = false;
        },

        async viewRecord(id){
           this.$bvModal.show('dmk-view-record');	
           this.record_spinner = true;	
		   let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
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
		let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
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
	  let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
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

	filterRecord(){
		this.$bvModal.show('filter-record');	
	}

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
