<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Agent Acc No.</label>
                <b-form-input v-model="create_record.agentNo" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Amount</label>
                <b-form-input v-model="create_record.amount" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Payment date from.</label>
                <b-form-input type="date" v-model="create_record.fromDate" required ></b-form-input>
              </div>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Payment date to.</label>
                <b-form-input type="date" v-model="create_record.toDate" required ></b-form-input>
              </div>
            </div>  
            <br>

            <SbButton/>
            <br>

        </b-form>
    </div>
</template>
<script>
export default {
    name:'CreateRecord',
    data(){
        return{
            create_record:{agentNo:'', amount:'', fromDate:'', toDate:'' },
            record_err:''
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'agentNo':this.create_record.agentNo,
                'amount':this.create_record.amount,
                'fromDate':this.create_record.fromDate,
                'toDate':this.create_record.toDate
            }
            await this.$axios.$post('v1/hrms/agent_payment/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Agent payment created successfully';
                    let set_theme = 'success'
                    Swal.fire({
                        icon: set_theme,
                        title: set_msg,
                        })
                    this.getRecords();
                    this.create_record={}
                  }
                if(resp.error == true ){
                  this.record_err = 'Member number not found. please recheck'
                }
                })
        },
    },

    props:{
        getRecords:{
            type:Function,
            default:null
        }
    }
}
</script>