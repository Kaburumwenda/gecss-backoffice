<template>
    <div>
             <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Total swaps
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.swaps > 0"> {{ statistics.swaps.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>

        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Total units (Kw)
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.units > 0"> {{ statistics.units.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-warning-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>

        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Total mileage (Km)
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.mileage > 0"> {{ statistics.mileage.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-primary-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>

        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Total GHG Avoided
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.ghg > 0"> {{ statistics.ghg.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>

      </b-row>
      <!-- END Stats -->

    </div>
</template>

<script>
export default {
    name:'Statistics',
    data(){
        return{
            statistics:{}
        }
    },

    mounted(){
        this.getTotals();
    },

    methods:{
       async  getTotals(){
           await this.$axios.$get("v1/reports/bike_reports")
           .then((resp) =>{
            console.warn(resp)
               this.statistics = resp;
           })
        }
    }
}
</script>