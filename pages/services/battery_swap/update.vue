<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Member No.</label>
                    <b-form-input v-model="recordbyId.mem_no" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Bike No.</label>
                    <b-form-input v-model="recordbyId.bike_no" required></b-form-input>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Battery </label>
                    <b-form-input v-model="recordbyId.battery_code1" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Amount </label>
                    <b-form-input v-model="recordbyId.amount" required></b-form-input>
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
                "mem_no": data.mem_no,
                "bike_no": data.bike_no,
                "amount":data.amount,
                "battery_code1": data.battery_code1,
                }
            let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post(`v1/battery/swap/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Battery record updated successfully';
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