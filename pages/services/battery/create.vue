<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery Code</label>
                <b-form-input v-model="create_record.code" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Location</label>
                <b-form-input v-model="create_record.location" required></b-form-input>
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
            create_record:{condition:'', status:'', code:'', location:'' },
            status:['Charging', 'Issued'],
            condition:['Stable', 'Medium', 'Unstable', 'Depleted']
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'condition':this.create_record.condition,
                'status':this.create_record.status,
                'location':this.create_record.location,
                'code':this.create_record.code,
            }
            await this.$axios.$post('v1/battery/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Battery added successfully';
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