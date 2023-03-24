<template>
    <div>
             <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Batteries
              </div>
              <div class="font-size-h6" style="color:green">
                <span v-if="statistics.batteries > 0"> {{ statistics.batteries.toLocaleString() }} </span> <span v-else>0</span>
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
                E-bikes
              </div>
              <div class="font-size-h6" style="color:green">
                <span v-if="statistics.bikes > 0"> {{ statistics.bikes.toLocaleString() }} </span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Agents
              </div>
              <div class="font-size-h6" style="color:green">
                <span v-if="statistics.staff > 0"> {{ statistics.staff.toLocaleString() }} </span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Earnings
              </div>
              <div class="font-size-h6" style="color:green">
                <span v-if="statistics.earnings > 0"> {{ statistics.earnings.toLocaleString() }} </span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
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
           await this.$axios.$get("v1/statistics/totals")
           .then((resp) =>{
               this.statistics = resp;
           })
        }
    }
}
</script>