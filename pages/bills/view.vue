<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Item</label>
                <b-form-textarea v-model="recordbyId.item"></b-form-textarea>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Quantity</label>
                <b-form-input v-model="recordbyId.quantity"></b-form-input>
            </div>
             <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Units of Conversion</label>
                <b-form-input v-model="recordbyId.units_conversion"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Total</label>
                <b-form-input v-model="recordbyId.price"></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Department</label>
                <b-form-input v-model="recordbyId.department"></b-form-input>
            </div>
             <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                <b-form-input v-model="recordbyId.status"></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Approved by</label>
                <b-form-input v-model="recordbyId.approvedby"></b-form-input>
            </div>
             <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Date</label>
                <b-form-input v-model="recordbyId.date"></b-form-input>
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