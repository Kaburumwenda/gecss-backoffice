<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">TransactionType</label>
                <b-form-input v-model="recordbyId.transactionType"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">TransID</label>
              <b-form-input v-model="recordbyId.transID" ></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">FirstName</label>
              <b-form-input v-model="recordbyId.firstName" ></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">BillRefNumber</label>
                <b-form-input v-model="recordbyId.billRefNumber"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">TransAmount</label>
                <b-form-input v-model="recordbyId.transAmount"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">MSISDN</label>
              <b-form-input v-model="recordbyId.MSISDN" ></b-form-input>
            </div>
        </div>  
        <br>

    </div>

</template>

<script>
export default {
    name:'RecordView',
    props:{
        recordbyId:{
            type:Object,
            default:null
        }
    }
}
</script>