<template>
    <div>
        <h1>BARCODES </h1>
        <br>
        <br>
        <barcode value="value-to-render" format="barcode-format" >
            Show this if the rendering fails.
            </barcode>
    </div>
</template>

<script>
import VueBarcode from 'vue-barcode';
export default {
    components: {
    'barcode': VueBarcode
  }
}
</script>