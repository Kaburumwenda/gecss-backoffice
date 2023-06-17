<template>
  <div>
    <!-- HERO START -->
     <Hero/>
     <!-- HERO END -->
    <!-- Page Content -->
    <div class="content">
       <!-- chart js -->
    <!-- Start Charts section one -->
      <b-row>
        <b-col lg="6">
          <!-- Today Chart -->
          <base-block rounded title="Today" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <div>
                  <TodayChart/>
                </div>
                </div>
              </div>
            </template>
          </base-block>
          <!-- END Today Chart -->
        </b-col>
        <b-col lg="6">
          <!-- week Chart -->
          <base-block rounded title="This Week" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                 <WeekChart/>
                </div>
              </div>
              
            </template>
          </base-block>
          <!-- END week Chart -->
        </b-col>
      </b-row>
      <!-- END  Charts section one-->

      <!-- Start Charts section two -->
      <b-row>
        <b-col lg="6">
          <!-- MONTH Chart -->
          <base-block rounded title="This month" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <div>
                  <MonthChart/>
                </div>
                </div>
              </div>
            </template>
          </base-block>
          <!-- END MONTH Chart -->
        </b-col>
        <b-col lg="6">
          <!-- week Chart -->
          <base-block rounded title="This year" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                 <YearChart/>
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
import TodayChart from './today_graph.vue'
import WeekChart from './week_chart.vue'
import MonthChart from './month_chart.vue'
import YearChart from './year_chart.vue'

export default {
  layout:'default_common',
  components:{ Hero, TodayChart, WeekChart, MonthChart, YearChart },

  data(){
    return{
      value:'Gecss'
    }
  },

  mounted(){
  },

  methods:{

  }
  
}
</script>
