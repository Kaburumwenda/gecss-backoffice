<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Member No.</label>
                <b-form-input v-model="recordbyId.memNo"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Name</label>
              <b-form-input v-model="recordbyId.client" ></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Amount</label>
                <b-form-input v-model="recordbyId.amount"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Purpose</label>
                <b-form-input v-model="recordbyId.purpose"></b-form-input>
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