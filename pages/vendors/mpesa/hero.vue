<template>
    <div>
         <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h2 class="h3 font-w700 mb-2" >
              MPESA
            </h2>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">UnTapped</a>, everything looks great.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button variant="alt-primary" @click="mpesa_stat_excel_report()" data-uk-tooltip="Mpesa Excel report">
              <i class="fa fa-file-excel"></i> Excel 
            </b-button>
            <b-button variant="alt-primary" @click="getpdf_mpesa_daily_modal()" data-uk-tooltip="Mpesa daily totals">
              <i class="fa fa-file-pdf"></i> Pdf
            </b-button>
            <b-button variant="alt-primary" @click.prevent="mpesa_stat_total_modal()" data-uk-tooltip="Mpesa payment comparision">
              <i class="fa fa-exchange-alt"></i> Compare
            </b-button>
            <!-- <b-button to="/finance/mpesa" variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="far fa-meh-rolling-eyes mr-1"></i> Mpesa transactions
            </b-button> -->
            <!-- <b-button to="/vendors/swaps" variant="alt-primary">
              <i class="nav-main-link-icon si si-action-undo"></i> Go to battery Portal
            </b-button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
    <!-- modal MPESA DAILY TOTALS-->
    <OuModal mdId="mpesa-daily-record" size="md" title="Mpesa daily totals">
		  <MpesaDailyPdf/>
	  </OuModal>
    <!-- modal MPESA DAILY TOTALS -->

    <!-- modal MPESA DAILY TOTALS-->
    <OuModal mdId="mpesa-daily-excel-reports" size="md" title="Mpesa Excel reports">
		  <MpesaDailyExcel/>
	  </OuModal>
    <!-- modal MPESA DAILY TOTALS -->

    	  <!-- MPESA STAT TOTAL START MODAL -->
	  <OuModal mdId="mpesa-stat-total" size="lg" title="Mpesa Payments Comparision">
        <div>
			<b-form @submit.prevent="getMpesa_total_stat_range()">
				<div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">Start Date.</label>
					<b-form-input v-model="mpesa_filter.fromdate" type="date" required></b-form-input>
				</div>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">End date.</label>
					<b-form-input type="date" v-model="mpesa_filter.todate" required ></b-form-input>
				</div>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">.</label>
					<div>
						<div v-if="stat_total_spinner"><center>  <i class="fa fa-2x fa-sun fa-spin"></i> <br><br> </center> </div>
						<div v-else><SbButton title="Pull records" /></div>
					</div>
				</div>
				</div>  
				<hr>


				<div>
					<div uk-grid>
						<div class="uk-width-expand@m">
							<div class="mpesa_pay_header">Swap Payments</div>
							<div class="mpesa_pay_items_con">
								<div><i class="fa fa-chart-pie fa-ico-size"></i></div>
								<div class="mpesa_price"><span v-if="stat_total.swap > 0" style="color:green; font-size:16px">KES {{ stat_total.swap.toLocaleString() }}</span> <span v-else>KES 0.0</span></div>
							 </div>
						</div>
						<div class="uk-width-expand@m">
							<div class="mpesa_pay_header">Other Payments</div>
							<div class="mpesa_pay_items_con">
								<div><i class="fa fa-chart-bar fa-ico-size"></i></div>
								<div class="mpesa_price"><span v-if="stat_total.others > 0" style="color:green; font-size:16px">KES {{ stat_total.others.toLocaleString() }}</span> <span v-else>KES 0.0</span></div>
							 </div>
						</div>
						<div class="uk-width-expand@m">
							<div class="mpesa_pay_header"> Total Payments</div>
							<div class="mpesa_pay_items_con">
								<div><i class="fa fa-cash-register fa-ico-size"></i></div>
								<div class="mpesa_price"><span v-if="stat_total.total > 0" style="color:green; font-size:16px">KES {{ stat_total.total.toLocaleString() }}</span> <span v-else>KES 0.0</span></div>
							 </div>
						</div>
					</div>
				</div>
				<br><br><br>

			</b-form>
		</div>
	  </OuModal>
	  <!-- MPESA STAT TOTAL END MODAL -->

    </div>
</template>

<script>
import MpesaDailyPdf from './mpesa_daily_pdf.vue'
import MpesaDailyExcel from './mpesa_daily_excel.vue'
export default {
    name:'Hero',
    components:{ MpesaDailyPdf, MpesaDailyExcel },

    data(){
      return{
        mpesa_filter:{fromdate:'', todate:''},
        filter_account:{acc:'', fromdate:'', todate:''},
        stat_total:0,
        stat_total_spinner:false,
      }
    },

    methods:{
      async getMpesa_total_stat_range(){
        this.stat_total_spinner = true
        let token = localStorage.getItem('token')
        this.$axios.defaults.headers.common["Authorization"] = "Token " + token
        const formData = {
          'fromdate': this.mpesa_filter.fromdate,
          'todate':this.mpesa_filter.todate,
        }
        await this.$axios.$post("v1/mpesa/office/range/total_stat", formData)
        .then((resp) =>{
          this.stat_total = resp;        
        })
        this.stat_total_spinner=false
      },

      getpdf_mpesa_daily_modal(){
        this.$bvModal.show('mpesa-daily-record');	
      },
      mpesa_stat_total_modal(){
        this.$bvModal.show('mpesa-stat-total');	
     },
     mpesa_stat_excel_report(){
        this.$bvModal.show('mpesa-daily-excel-reports');	
     },
    }
} // mpesa-daily-reports
</script>

<style scoped>
.mpesa_pay_header{
	background: #f2f2f2;
	margin-bottom: 20px;
	font-weight: bold;
	padding: 10px 10px 10px 10px;
}
.mpesa_pay_items_con{
	display: flex;
	align-items: center;
}
.fa-ico-size{
	font-size: 40px;
	/* color: #006666; */
	color: #595959;
}
.mpesa_price{
	font-size: 18px;
	margin-left: 20px;
	color: green;
	font-weight: bold;
}
</style>