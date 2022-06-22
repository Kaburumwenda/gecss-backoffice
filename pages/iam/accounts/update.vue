<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Member number</label>
                    <b-form-input v-model="recordbyId.memNo" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">ID Number</label>
                    <b-form-input v-model="recordbyId.idNo" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Phone</label>
                    <b-form-input v-model="recordbyId.phone" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Alt Phone</label>
                    <b-form-input v-model="recordbyId.alt_phone" required></b-form-input>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Number of Bikes</label>
                <b-form-input v-model="recordbyId.bikes" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Amount to be Paid</label>
                   <b-form-input v-model="recordbyId.amount" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Balance</label>
                    <b-form-input v-model="recordbyId.balance" required></b-form-input>
                </div>
            </div>  
            <br>
            <div uk-grid>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">SEX</label>
                <b-form-input v-model="recordbyId.sex" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Age</label>
                   <b-form-input v-model="recordbyId.age" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Occupation</label>
                    <b-form-input v-model="recordbyId.occupation" required></b-form-input>
                </div>
            </div>  
            <br>

        <div uk-grid>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Residential</label>
                <b-form-input v-model="recordbyId.residential" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Operation Area</label>
                   <b-form-input v-model="recordbyId.operation_area" required></b-form-input>
                </div>
            </div>  
            <br>

            <SbButton title="Update record"/>
            <br>
        </form>
    </div>
</template>

<script>
export default {
    name:'RecordUpdate',
    methods:{
        async updateRecord(data){
            const Id = data.id;
            const formData = {
                "memNo": data.memNo,
                "idNo": data.idNo,
                "phone": data.phone,
                "alt_phone": data.alt_phone,
                "bikes":data.bikes,
                'amount':data.amount,
                'balance':data.balance,
                'occupation':data.occupation,
                'age':data.age,
                'sex':data.sex,
                'residential':data.residential,
                'operation_area':data.operation_area
                }
            await this.$axios.$post(`v1/account/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Customer account details updated successfully';
                let set_theme = 'success'
                Swal.fire({
                    icon: set_theme,
                    title: set_msg,
                    })
                this.getRecords();
              }
            })
        },
    },
    props:{
        recordbyId:{
            type:Object,
            default:null
        },
         getRecords:{
            type:Function,
            default:null
        }
    }
}
</script>