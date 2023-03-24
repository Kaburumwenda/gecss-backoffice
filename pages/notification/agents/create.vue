<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">From.</label>
                <b-form-input v-model="create_record.source" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Subject</label>
                <b-form-input v-model="create_record.title" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Message Body</label>
                <b-form-textarea v-model="create_record.message" required></b-form-textarea>
              </div>
            </div>  
            <br>
  
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
            create_record:{title:'', source:'', message:''  }
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'title':this.create_record.title,
                'source':this.create_record.source,
                'message':this.create_record.message,
            }
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/home/agent_notifications/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Notification sent successfully';
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