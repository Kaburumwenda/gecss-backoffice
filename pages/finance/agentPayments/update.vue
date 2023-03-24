<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Agent Acc</label>
                    <b-form-input v-model="recordbyId.agentNo" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Amount</label>
                <b-form-input v-model="recordbyId.amount" ></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">From Date</label>
                <b-form-input type="date" v-model="recordbyId.fromDate" required ></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">To Date</label>
                <b-form-input type="date" v-model="recordbyId.toDate" required ></b-form-input>
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
                "agentNo": data.agentNo,
                "amount": data.amount,
                "fromDate": data.fromDate,
                "toDate": data.toDate
                }
            await this.$axios.$post(`v1/hrms/agent_payment/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Agent Payment updated successfully';
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