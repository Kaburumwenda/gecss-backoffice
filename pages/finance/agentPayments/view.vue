<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Agent Acc</label>
                <b-form-input v-model="recordbyId.agentNo"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Amount</label>
              <b-form-input v-model="recordbyId.amount" ></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">From</label>
                <b-form-input v-model="recordbyId.fromDate"></b-form-input>
            </div>
             <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">To</label>
                <b-form-input v-model="recordbyId.toDate"></b-form-input>
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