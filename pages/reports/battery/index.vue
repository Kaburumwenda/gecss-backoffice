<template>
  <div>
    <!-- HERO START -->
     <Hero/>
     <!-- HERO END -->
    <!-- Page Content -->
    <div class="content">
      <!-- Statistics start -->
      <SwapCounts/>
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

       <!-- chart js -->
       <!-- table and filter section  start -->
      <base-block rounded title="Batteries" ref="blockLoadingRefresh" class="block-mode-loading-refresh"  header-bg btn-option-fullscreen >
		<template #options>
			<button type="button" data-uk-tooltip="Refresh" class="btn-block-option" @click="resetRecords('blockLoadingRefresh')">
			<i class="si si-refresh"></i>
			</button>
			
		</template>
	
	  <!-- search and filter ------- ************************ -->
		<div class="dmk-search-td-con">
		<RowsFilter>
			<select id="rowsperPage" style="text-align:center;">	
				<option value="25">25</option>
				<option value="50">50</option>
				<option value="100">100</option>
			</select>
		</RowsFilter>

			<div style="display:flex">
				<form @submit.prevent="searchRecords()" method="get">
					<div class="dmk-search-con">
						<input type="text" v-model="search.queary" placeholder="Enter battery code " class="form-control dmk-search-input">
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
          <td>{{ rs.battery_code1 }}</td>
          <td> <span v-if="rs.swap > 0"> {{ rs.swap.toLocaleString() }} </span> <span v-else>0</span> </td>
          <td> <span v-if="rs.units > 0"> {{ rs.units.toLocaleString() }} </span> <span v-else>0</span> </td>
          <td><span v-if="rs.amount > 0"> {{ rs.amount.toLocaleString() }} </span> <span v-else>0</span></td>
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
       <!-- table and filter section  end -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
<script>
import Hero from './hero.vue'
import SwapCounts from './swap_counts.vue'
import WeekChart from './week_chart.vue'
import MonthChart from './month_chart.vue'
import YearChart from './year_chart.vue'
import YearlyChart from './yearly_chart.vue'
import RecordTable from './table.vue';

export default {
  layout:'default_common',
  components:{ Hero, SwapCounts, WeekChart, MonthChart, YearChart, YearlyChart, RecordTable },

  data(){
    return{
      value:'Gecss',
      records:[],
      search:{ queary: ''},
    }
  },

  mounted(){
    this.getRecordOnMount();
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

   async getRecordOnMount(){
			this.setLoadingTrue();
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get("v1/reports/battery_statistics/min")
            .then((resp) =>{
                this.records = resp;
            })
			this.setLoadingFalse(); 
    },

    async searchRecords(){
      this.setLoadingTrue();
      let token = localStorage.getItem('token')
      this.$axios.defaults.headers.common["Authorization"] = "Token " + token
      const formData = {
        'queary': this.search.queary
      }
      await this.$axios.$post("v1/reports/battery_statistics/search", formData)
      .then((resp) =>{
        this.records = resp;        
      })
      this.setLoadingFalse(); 
	},


    resetRecords(){
      this.getRecordOnMount()
    }

  },

  head(){
		return{
			title:"Gecss | Battery Swaps reports"
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
