<template>
    <div>
        <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
        <form @submit.prevent="generateBarcode(recordbyId)">
            <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery Code</label>
                <b-form-input v-model="recordbyId.code"></b-form-input>
            </div>
        </div>  
        <br>
         <SbButton title="Generate Barcode"/>
        </form>
        <br>
        <div>
             <svg id="barcode"></svg>
        </div>
    </div>

</template>

<script>
export default {
    name:'Barcode',
    data(){
        return{
            recordbyId:{
            type:Object,
            default:null
        }
        }
    },
    mounted(){
       
    },
    methods:{
        generateBarcode(data){
            let code = data.code;
            console.log(code)
              JsBarcode("#barcode", code, {
                height: 50,
                fontSize:10,
                displayValue: true
                });
        }
    },
    props:{
        recordbyId:{
            type:Object,
            default:null
        }
    }
}
</script>