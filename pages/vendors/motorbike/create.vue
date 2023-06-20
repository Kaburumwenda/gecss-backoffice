<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Member number</label>
                <b-form-input v-model="create_record.memNo" required></b-form-input>
                <div v-if="record_err.length > 1" style="color:red">
                  {{ record_err }}
                </div>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Bike numberplate</label>
                <b-form-input v-model="create_record.numberplate" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                <b-form-select v-model="create_record.status" :options='status' required ></b-form-select>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Condition</label>
                 <b-form-select v-model="create_record.condition" :options='condition' required></b-form-select>
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
            create_record:{condition:'', status:'', numberplate:'', username:'' },
            status:['Gecss', 'Sold', 'Leased'],
            condition:['New', 'Retrofitted'],
            record_err:''
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'condition':this.create_record.condition,
                'status':this.create_record.status,
                'numberplate':this.create_record.numberplate,
                'memNo':this.create_record.memNo,
            }
            let token = localStorage.getItem('token')
		       	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/motorbike/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Motorbike added successfully';
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