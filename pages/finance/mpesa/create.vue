<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Member No.</label>
                <b-form-input v-model="create_record.memNo" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Amount</label>
                <b-form-input v-model="create_record.amount" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Purpose</label>
                <b-form-select v-model="create_record.purpose" :options='purpose' required ></b-form-select>
              </div>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                <b-form-select v-model="create_record.status" :options='status' required ></b-form-select>
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
            create_record:{memNo:'', amount:'', purpose:'Daily Deposit', status:'Paid' },
            purpose:['Daily Deposit','Swap Battery'],
            status:['Paid', 'Unpaid', 'Processing', 'Rejected']
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'memNo':this.create_record.memNo,
                'amount':this.create_record.amount,
                'purpose':this.create_record.purpose,
                'status': this.create_record.status,
            }
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/transaction/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Transaction saved successfully';
                    let set_theme = 'success'
                    Swal.fire({
                        icon: set_theme,
                        title: set_msg,
                        })
                    this.getRecords();
                    this.create_record={}
                  }
                if(resp.username){
                  this.username_err = 'A user with that member number already exists'
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