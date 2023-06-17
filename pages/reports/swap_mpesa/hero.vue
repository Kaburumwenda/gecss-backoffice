<template>
    <div>
         <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h4 class="h5 font-w600 mb-2" >
              Mpesa & Swap reports
            </h4>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">Gecss</a>, everything looks great.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button @click.prevent="filterRecord()" variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-filter mr-1"></i> Filters
            </b-button>
            <b-button variant="alt-primary" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
     <!-- filter modal start-->
	  <OuModal mdId="filter-record" size="lg" title="Filter Mpesa & Swap records">
        <div>
			<b-form @submit.prevent="formSubmit()">
				<div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">Start Date.</label>
					<b-form-input v-model="filter.fromdate" type="date" required></b-form-input>
				</div>
        <div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">End date.</label>
					<b-form-input type="date" v-model="filter.todate" required ></b-form-input>
				</div>
        <div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">Branch</label>
					<b-form-select type="date" v-model="filter.branch" :options="branches" required ></b-form-select>
				</div>
        <div class="uk-width-expand@m">
          <label style="color:#1a1a1a;">.</label>
          <div>
            <div v-if="chart_loading">
              <b-button>
                <i class="fa fa-2x fa-sun fa-spin"></i>
              </b-button>
            </div>
            <div v-else><b-button type="submit" variant="primary" block squared >Filter records</b-button></div>
          </div>
				</div>
				</div>  
			</b-form>
      <hr>
      <!-- CHART AND DATA START -->
      <div>
         <!-- Start Charts section two -->
      <b-row>
        <b-col lg="6">
          <!-- MONTH Chart -->
          <base-block rounded title="Pie-chart analysis" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <div>
                    <div> <canvas id="chartCanvas"></canvas> </div>
                </div>
                </div>
              </div>
            </template>
          </base-block>
          <!-- END MONTH Chart -->
        </b-col>
        <b-col lg="6">
          <!-- week Chart -->
          <base-block rounded title="Period range" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                 <div v-if="filter.fromdate != '' ">
                  <div class="from_to_con">
                   <div><strong>From:</strong> <span style="color:blue">{{ filter.fromdate}}</span></div>
                   <div><strong>To:</strong> <span style="color:blue">{{ filter.todate}}</span></div>
                 </div>
                 <div class="swap_mpesa_con">
                  <hr>
                   <center>
                     <div>Mpesa: <span style="color:green; font-size:16px">ksh {{ mpesa.toLocaleString() }}</span> </div>
                     <div>Swap: <span style="color:green; font-size:16px">ksh {{ swap.toLocaleString() }}</span> </div>
                   </center>
                 </div>
                 </div>
                 <div v-else>
                   <center>No data to display</center>
                 </div>
                </div>
              </div>
              
            </template>
          </base-block>
          <!-- END week Chart -->
        </b-col>
      </b-row>
      <!-- END  Charts section two-->
      </div>
      <!-- CHART AND DATA END -->
		</div>
	  </OuModal>
	  <!-- filter modal end -->

    </div>
</template>

<script>
import Chart from 'chart.js';
export default {
    name:'Hero',
    data(){
      return{
        filter:{
          fromdate:'',
          todate:'',
          branch:''
        },
        branches:[],
        chart_loading:false,
        chart_info:{},
        mpesa:0,
        swap:0,
      }
    },

    mounted(){
      this.getBranches();
    },

    methods:{
       async formSubmit(){	
        const formData={
            'fromdate': this.filter.fromdate,
            'todate': this.filter.todate,
            'branch': this.filter.branch,
        }
        let token = localStorage.getItem('token')
        this.chart_loading = true
        this.$axios.defaults.headers.common["Authorization"] = "Token " + token
        await this.$axios.$post('v1/reports/swap_mpesa_pie/range', formData)
            .then((resp) =>{
              this.chart_info = resp;
              this.mpesa = resp.mpesa
              this.swap = resp.swap
              let array_data = [this.mpesa, this.swap]

              const chartCanvas = document.getElementById('chartCanvas');
              const ctx = chartCanvas.getContext('2d');
              // Chart data
              const data = {
                labels: [ 'Mpesa', 'Swaps'],
                datasets: [
                  {
                    data: array_data,
                    backgroundColor: [ '#36A2EB', '#FFCE56'],
                  },
                ],
              };

               // Chart options
              const options = {
                responsive: true,
                maintainAspectRatio: false,
              };

              // Create the pie chart
              new Chart(ctx, {
                type: 'pie',
                data: data,
                options: options,
              });

           
            })
            this.chart_loading = false
        },

      async getBranches(){
			let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$get("v1/branch/list")
            .then((resp) =>{
                this.branches = resp;      
            })
        },


      filterRecord(){
        this.$bvModal.show('filter-record');
    },
    }
}
</script>

<style scoped>
.from_to_con{
  display: flex;
  justify-content: space-around;
}

</style>