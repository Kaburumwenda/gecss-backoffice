<template>
    <div>
             <!-- Stats -->
      <b-row>
        <b-col cols="6" md="2" lg="2" xl="2">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Today
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.today > 0"> {{ statistics.today.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>

        <b-col cols="6" md="2" lg="2" xl="2">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                This Week
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.week > 0"> {{ statistics.week.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-warning-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>

        <b-col cols="6" md="2" lg="2" xl="2">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                This Month
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.month > 0"> {{ statistics.month.toLocaleString() }}</span> <span v-else>0</span>
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
                This Year
              </div>
              <div class="font-size-h5" style="color:green">
                 <span v-if="statistics.year > 0"> {{ statistics.year.toLocaleString() }}</span> <span v-else>0</span>
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
      
         <b-col class="font-size-h5" style="color:green">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4" href="javascript:void(0)">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                All
              </div>
              <div class="font-size-h5" style="color:green">
                <span v-if="statistics.total > 0"> {{ statistics.total.toLocaleString() }}</span> <span v-else>0</span>
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
           await this.$axios.$get("v1/mpesa/office/stat")
           .then((resp) =>{
               this.statistics = resp;
           })
        }
    }
}
</script>