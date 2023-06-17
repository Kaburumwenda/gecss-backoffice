<template>
    <div>
         <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h2 class="h3 font-w700 mb-2" >
              Battery Swaps
            </h2>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">Gecss</a>, everything looks great.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button variant="alt-primary" data-uk-tooltip="Total Swaps daily">
              <i class="fa fa-file-excel"></i> Excel 
            </b-button>
            <b-button variant="alt-primary" @click="pdf_daily_swaps()" data-uk-tooltip="Total Swaps daily">
              <i class="fa fa-file-pdf"></i> Pdf
            </b-button>
            <b-button variant="alt-primary" data-uk-tooltip="Total Swaps per battery"  @click="getpdf_form" >
              <i class="si si-bar-chart"></i> B.Swaps
            </b-button>
            <b-button to="/services/battery_swap" variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="far fa-meh-rolling-eyes mr-1"></i> Swaps Records
            </b-button>
            <b-button variant="alt-primary" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
    <!-- modal Battery No. swaps-->
    <OuModal mdId="pdf-record" size="md" title="Total Swaps per battery">
		  <BatterySwapsPdf/>
	  </OuModal>
    <!-- modal Battery No. swaps -->

     <!-- modal Battery No. swaps-->
    <OuModal mdId="pdf-daily-swaps-record" size="md" title="Total daily swaps">
		  <SwapDailyPdf/>
	  </OuModal>
    <!-- modal Battery No. swaps -->

    </div>
</template>

<script>
import BatterySwapsPdf from './batteries_swaps_pdf.vue'
import SwapDailyPdf from './swap_daily_pdf.vue'
export default {
    name:'Hero',
    components:{BatterySwapsPdf, SwapDailyPdf},
    methods:{

      getpdf_form(){
        this.$bvModal.show('pdf-record');	
      },
      pdf_daily_swaps(){
        this.$bvModal.show('pdf-daily-swaps-record');	
      },
    }
}
</script>