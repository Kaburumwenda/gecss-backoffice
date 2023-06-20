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
              <div class="font-size-h3">
                 <span v-if="statistics.batteries > 0"> {{ statistics.batteries.toLocaleString() }}</span> <span v-else>0</span>
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
                Issued
              </div>
              <div class="font-size-h3">
                 <span v-if="statistics.issued > 0"> {{ statistics.issued.toLocaleString() }}</span> <span v-else>0</span>
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
                Depleted
              </div>
              <div class="font-size-h3">
                 <span v-if="statistics.depleted > 0"> {{ statistics.depleted.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <!-- <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Charging
              </div>
              <div class="font-size-h3">
                {{ statistics.charging.toLocaleString() }}
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col> -->
         <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Charged
              </div>
              <div class="font-size-h3">
                <span v-if="statistics.charged > 0"> {{ statistics.charged.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Charging
              </div>
              <div class="font-size-h3">
                <span v-if="statistics.charging > 0"> {{ statistics.charging.toLocaleString() }}</span> <span v-else>0</span>
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
           await this.$axios.$get("v1/battery/statistics")
           .then((resp) =>{
               this.statistics = resp;
           })
        }
    }
}
</script>