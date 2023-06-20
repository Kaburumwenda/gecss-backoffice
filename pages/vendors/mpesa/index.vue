<template>
  <div>
    <!-- HERO START -->
     <Hero/>
     <!-- HERO END -->
    <!-- Page Content -->
    <div class="content">
      <!-- Statistics start -->
      <Statistics/>
       <!-- Statistics end -->
              <!-- chart js -->
    <!-- Start Charts section one -->
      <b-row>
        <b-col lg="4">
          <!-- Today Chart -->
          <base-block rounded title="This Week" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <div>
                  <WeekChart/>
                </div>
                </div>
              </div>
            </template>
          </base-block>
          <!-- END Today Chart -->
        </b-col>
        <b-col lg="8">
          <!-- week Chart -->
          <base-block rounded title="This Month" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                 <MonthChart/>
                </div>
              </div>
              
            </template>
          </base-block>
          <!-- END week Chart -->
        </b-col>
      </b-row>
      <!-- END  Charts section one-->

      <!-- Start Charts section Two -->
      <b-row>
        <b-col lg="6">
          <!-- Today Chart -->
          <base-block rounded title="This Year" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <div>
                  <YearChart/>
                </div>
                </div>
              </div>
            </template>
          </base-block>
          <!-- END Today Chart -->
        </b-col>
        <b-col lg="6">
          <!-- week Chart -->
          <base-block rounded title="Yearly" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                 <YearlyChart/>
                </div>
              </div>
              
            </template>
          </base-block>
          <!-- END week Chart -->
        </b-col>
      </b-row>
      <!-- END  Charts section two-->
       <base-block rounded title="MPESA Transactions" ref="blockLoadingRefresh" class="block-mode-loading-refresh"  header-bg btn-option-fullscreen >
        <template #options>
          <button type="button" data-uk-tooltip="Refresh" class="btn-block-option" @click="resetRecords('blockLoadingRefresh')">
          <i class="si si-refresh"></i>
          </button>
			
	     	</template>
	
	  <!-- search and filter ------- ************************ -->
		<div class="dmk-search-td-con">
		<RowsFilter :rowsPerPage="rowsPerPage">
			<select v-on:change="get_mpesa_record()" v-model="pagination.rowperPage" id="rowsperPage" style="text-align:center;">									
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
          <td>{{ rs.transactionType }}</td>
          <td>{{ rs.transID }}</td>
          <td>{{ rs.billRefNumber }}</td>
          <td>{{ rs.firstName }}</td>
          <td><span v-if="rs.transAmount > 0"> {{ rs.transAmount.toLocaleString() }} </span> <span v-else>0</span></td> 
          <td><span v-if="rs.orgAccountBalance > 0"> {{ rs.orgAccountBalance.toLocaleString() }} </span> <span v-else>0</span></td>
          <td>{{ rs.transTime | diffForHumans }}</td>
          <td class="text-center">
            <button  class=" btn status-btn btn-success " aria-expanded="false">
              Paid
            </button>
          </td>
          </tr>
        </RecordTable>
        <!-- TABLE ************************ -->
		<!-- table bottom start-->

		<!-- table bottom end -->
      </base-block>

    </div>
    <!-- END Page Content -->
  </div>
</template>
<script>
import Hero from './hero.vue'
import Statistics from '../../finance/mpesa/statistics.vue'
import WeekChart from './week_chart.vue'
import MonthChart from './month_chart.vue'
import YearChart from './year_chart.vue'
import YearlyChart from './yearly_chart.vue'
import RecordTable from './table.vue'
import dayjs from 'dayjs';

const { encrypt, decrypt } = require('../../../plugins/encryption.js');

export default {
  layout:'default_common',
  components:{ Hero, Statistics, WeekChart, MonthChart, YearChart, YearlyChart, RecordTable },

  data(){
    return{
      value:'Gecss',
      pagination:{rowperPage:10},
      records:[],
      search:{ queary: ''},
    }
  },

  created () {
    // close sidebar
    this.$store.commit('sidebar', { mode: 'close' })
  },

  mounted(){
    this.get_mpesa_record();
  },

  filters: {
		diffForHumans: (date) => {
			if (!date){
				return null;
			}
			
			return dayjs(date).format('MMM, ddd D. YYYY h:mm A');
			// return dayjs(date).fromNow();
		}
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


    async get_mpesa_record(){
			this.setLoadingTrue();
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get(`v1/reports/mpesa/list/${this.pagination.rowperPage}`)
            .then((resp) =>{
              // const encryptedData = encrypt(JSON.stringify(resp), 'encryptionKey');
                this.records = resp;
              // const decryptedData = decrypt(encryptedData, 'encryptionKey');

              // this.records = decryptedData;
                
            })
			this.setLoadingFalse(); 
        },

    async searchRecords(){
      this.setLoadingTrue();
      if(this.search.queary == ''){
        this.get_mpesa_record();
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
      this.search = {}
      this.get_mpesa_record();
      setTimeout(() => {
          // Set the block back to normal state
          this.$refs[ref].stateNormal()
        }, 2000)
    },

  },

  head(){
		return{
			title:"Gecss | Mpesa reports"
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
