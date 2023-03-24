<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <!-- <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Member No.</label>
                    <b-form-input v-model="recordbyId.memNo" required></b-form-input>
                </div> -->
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Amount.</label>
                    <b-form-input v-model="recordbyId.amount" required disabled></b-form-input>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Mobile number </label>
                    <b-form-input v-model="recordbyId.mobile" required disabled></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Status </label>
                    <b-form-select v-model="recordbyId.status" :options='status' required></b-form-select>
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
    data(){
        return{
            purpose:['Daily Deposit','Swap Battery'],
            status:['Paid', 'Unpaid', 'Processing', 'Rejected']
        }
    },
    methods:{
        async updateRecord(data){
            const Id = data.id;
            const formData = {
                "memNo": data.memNo,
                "amount": data.amount,
                "purpose": data.purpose,
                "status":data.status
                }
                let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post(`v1/mpesa/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Mpesa transaction updated successfully';
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