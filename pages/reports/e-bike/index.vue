<template>
  <div>

    <!-- Page Content -->
    <div class="content">
		<!-- Statistics start -->
		<div>
			<Statistics/>
		</div>
		<!-- Statistics end -->

      <base-block rounded title="GECSS E-bike Report" ref="blockLoadingRefresh" class="block-mode-loading-refresh"  header-bg btn-option-fullscreen >
		<template #options>
			<button type="button" data-uk-tooltip="Download" class="btn-block-option" @click="getpdf_form">
			<i class="fa fa-cloud-download-alt"></i>
			</button>
			<button type="button" data-uk-tooltip="Refresh" class="btn-block-option" @click="resetRecords('blockLoadingRefresh')">
			<i class="si si-refresh"></i>
			</button>
			<button type="button" @click.prevent="filterRecord()" data-uk-tooltip="Filter records" class="btn-block-option">
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
			<td>{{ rs.bike_no }}</td>
			<td> <span v-if="rs.swap > 0"> {{ rs.swap.toLocaleString() }} </span> <span v-else>0</span> </td>
			<td> <span v-if="rs.units > 0"> {{ rs.units.toLocaleString() }} </span> <span v-else>0</span> </td>
			<td><span v-if="rs.mileage > 0"> {{ rs.mileage.toLocaleString() }} </span> <span v-else>0</span></td>
			<td><span v-if="rs.ghg > 0"> {{ rs.ghg.toLocaleString() }} </span> <span v-else>0</span></td> 
			<td class="text-center">
				<button  class=" btn status-btn btn-success " aria-expanded="false">
					Active
				</button>
			</td>

			</tr>
		</RecordTable>
        <!-- TABLE ************************ -->
		<!-- table bottom start-->
		 <div style=" display:flex; justify-content:space-between">
		<div style=""></div>

		 </div>

		<!-- table bottom end -->
      </base-block>
	  <!-- modal -->

	  <OuModal mdId="pdf-record" size="md" title="Gecss E-bike Reports">
		  <PdfRecord :getRecords="getRecords"/>
	  </OuModal>

	  <!-- filter modal start-->
	  <OuModal mdId="filter-record" size="md" title="Filter E-bike report">
        <div>
			<div class="pdf-filter-btn" >
				<div>
					<b-button v-if="filter_today" variant="outline-primary" disabled squared >
					<b-spinner small type="grow"></b-spinner> Loading... </b-button>
					<b-button v-else @click="getMpesaStatToday()" variant="outline-primary" squared >Today</b-button>
				</div>
				<div>
					<b-button v-if="filter_week" variant="outline-primary" disabled squared >
					<b-spinner small type="grow"></b-spinner> Loading... </b-button>
					<b-button v-else @click="getMpesaStatWeek()" variant="outline-primary" squared >This Week</b-button>
				</div>
				<div>
					<b-button v-if="filter_month" variant="outline-primary" disabled squared >
					<b-spinner small type="grow"></b-spinner> Loading... </b-button>
					<b-button v-else @click="getMpesaStatMonth()" variant="outline-primary" squared >This month</b-button></div>
				<div>
					<b-button v-if="filter_month" variant="outline-primary" disabled squared >
					<b-spinner small type="grow"></b-spinner> Loading... </b-button>
					<b-button v-else @click="getMpesaStatYear()" variant="outline-primary" squared >This year</b-button></div>
			</div>
			<hr>
			<b-form @submit.prevent="getMpesaStatRange">
				<div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">Start Date.</label>
					<b-form-input v-model="mpesa_filter.fromdate" type="date" required></b-form-input>
				</div>
				</div>  
				<br>

				<div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">End date.</label>
					<b-form-input type="date" v-model="mpesa_filter.todate" required ></b-form-input>
				</div>
				</div>  
				<br>

				<SbButton title="Pull records" />
				<br>

			</b-form>
		</div>
	  </OuModal>
	  <!-- filter modal end -->
	  <!-- modal -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
import Button from '~/components/common/Button.vue';
import RecordTable from './table.vue';
import Statistics from './statistics.vue'
import PdfRecord from './pdf.vue'
import dayjs from 'dayjs';
export default {
	layout:'default_common',
    components:{ RecordTable, Button, Statistics, PdfRecord },
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
			perms:{ perms_add:'', perms_view:'', perms_update:'', perms_delete:'', perms_restore:'', perms_status:'' },
			filter_today:false,
			filter_week:false,
			filter_month:false,
			filter_year:false,
			mpesa_filter:{fromdate:'', todate:''}
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
		},

        async getRecordOnMount(){
			this.setLoadingTrue();
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get("v1/reports/mileage_reports")
            .then((resp) =>{
                this.records = resp;
            })
			this.setLoadingFalse(); 
        },

		async getRecords(){
			this.setLoadingTrue();
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get("v1/reports/mileage_reports")
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
           await this.$axios.$get(`v1/mpesa/${id}`)	
            .then((resp) =>{
                this.recordbyId = resp;
            })
            this.record_spinner = false;
        },

       



	async searchRecords(){
	  this.setLoadingTrue();
	  if(this.search.queary == ''){
		  this.getRecordOnMount();
	  }
	  let token = localStorage.getItem('token')
	  this.$axios.defaults.headers.common["Authorization"] = "Token " + token
       await this.$axios.$get(`v1/mpesa/search/${this.search.queary}`)
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


	async getMpesaStatToday(){
		this.filter_today=true;
		let token = localStorage.getItem('token')
		this.$axios.defaults.headers.common["Authorization"] = "Token " + token
		await this.$axios.$get("v1/reports/bike_reports_filter_today")
		.then((resp) =>{
			this.records = resp;        
		})
		this.filter_today=false;
		this.$bvModal.hide('filter-record');
	},

	async getMpesaStatWeek(){
		this.filter_week=true;
		let token = localStorage.getItem('token')
		this.$axios.defaults.headers.common["Authorization"] = "Token " + token
		await this.$axios.$get("v1/reports/bike_reports_filter_week")
		.then((resp) =>{
			this.records = resp;        
		})
		this.filter_week=false;
		this.$bvModal.hide('filter-record');
	},

	async getMpesaStatMonth(){
		this.filter_month=true;
		let token = localStorage.getItem('token')
		this.$axios.defaults.headers.common["Authorization"] = "Token " + token
		await this.$axios.$get("v1/reports/bike_reports_filter_month")
		.then((resp) =>{
			this.records = resp;        
		})
		this.filter_month=false;
		this.$bvModal.hide('filter-record');
	},

	async getMpesaStatYear(){
		this.filter_year=true;
		let token = localStorage.getItem('token')
		this.$axios.defaults.headers.common["Authorization"] = "Token " + token
		await this.$axios.$get("v1/reports/bike_reports_filter_year")
		.then((resp) =>{
			this.records = resp;        
		})
		this.filter_year=false;
		this.$bvModal.hide('filter-record');
	},

	async getMpesaStatRange(){
		this.setLoadingTrue();
		let token = localStorage.getItem('token')
		this.$axios.defaults.headers.common["Authorization"] = "Token " + token
		const formData = {
			'fromdate': this.mpesa_filter.fromdate,
			'todate':this.mpesa_filter.todate,
		}
		await this.$axios.$post("v1/reports/bike_reports_filter_range", formData)
		.then((resp) =>{
			this.records = resp;        
		})
		this.setLoadingFalse();
		this.$bvModal.hide('filter-record');
	},



	filterRecord(){
        this.$bvModal.show('filter-record');	
    },
	getpdf_form(){
        this.$bvModal.show('pdf-record');	
    },
	
	},

 head(){
		return{
			title:"Gecss | E-Bike report"
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
.pdf-filter-btn{
    display: flex;
    justify-content: space-around;
}
</style>
