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

  created () {
    // close sidebar
    this.$store.commit('sidebar', { mode: 'close' })
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
