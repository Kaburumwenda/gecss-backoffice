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

export default {
  layout:'default_common',
  components:{ Hero, Statistics, WeekChart, MonthChart, YearChart, YearlyChart },

  data(){
    return{
      value:'Gecss'
    }
  },

  mounted(){
  },

  methods:{

  },

  head(){
		return{
			title:"Gecss | Mpesa reports"
		}
	}
  
}
</script>
