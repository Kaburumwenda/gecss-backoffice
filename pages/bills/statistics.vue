<template>
    <div>
             <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Paid
              </div>
              <div class="font-size-h3">
                 <span v-if="statistics.paid > 0">Ksh {{ statistics.paid.toLocaleString() }}</span> <span v-else>Ksh 0</span>
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
                unPaid
              </div>
              <div class="font-size-h3">
                 <span v-if="statistics.unpaid > 0">Ksh {{ statistics.unpaid.toLocaleString() }}</span> <span v-else>Ksh 0</span>
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
                Cancelled
              </div>
              <div class="font-size-h3">
                 <span v-if="statistics.cancelled > 0">Ksh {{ statistics.cancelled.toLocaleString() }}</span> <span v-else>Ksh 0</span>
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
                Total
              </div>
              <div class="font-size-h3">
                <span v-if="statistics.total > 0">Ksh {{ statistics.total.toLocaleString() }}</span> <span v-else>Ksh 0</span>
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
           await this.$axios.$get("v1/account/expense/statistics")
           .then((resp) =>{
               this.statistics = resp;
           })
        }
    }
}
</script>