<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <h4>Dashboard</h4>
      <!-- JS-BARCODE-->
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>

    <hr>
    <h1>BARCODE</h1>

     <br>
        <br>
       <div id="">
         <svg id="barcode"></svg>
       </div>

    <!-- <OuButton btnTheme="alt-primary" variant="alt-primary" class="push" :trigerModal="addRecord" /> -->

    <!-- <OuButton mpdaId="add-record" modalSize="md" modalTitle="Add Record" class="push" /> -->
    
    <!-- <DcModal id="modal-block-normal" /> -->

    </div>
    <!-- END Page Content -->
  </div>
</template>
<script>
export default {
  components:{  },

  data(){
    return{
      value:'Gecss'
    }
  },

  mounted(){
    // this.generateBarcode(this.value)
    // JsBarcode("#barcode", "Hi world!");
    let nam = 'B10023ERT'
    JsBarcode("#barcode", nam, {
  height: 50,
  fontSize:14,
  displayValue: true
});
  },

  methods:{
    generateBarcode(value){
      JsBarcode('barcode', value, {
        format:'code128',
        displayValue:true
      })
    },

    addRecord(){
        this.$bvModal.show('add-record');	
    },
    loadData (ref) {
      // Set the block to loading state
      this.$refs[ref].stateLoading()

      // .. here you could load your data

      // Set a timeout for demo purposes
      setTimeout(() => {
        // Set the block back to normal state
        this.$refs[ref].stateNormal()
      }, 2000)
    }
  }
  
}
</script>