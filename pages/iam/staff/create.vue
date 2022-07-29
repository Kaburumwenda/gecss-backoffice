<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Username</label>
                <b-form-input v-model="create_record.username" required></b-form-input>
                <div v-if="username_err">
                  <span style="color:red">{{ username_err }}</span>
                </div>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Firstname</label>
                <b-form-input v-model="create_record.first_name" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Lastname</label>
                <b-form-input v-model="create_record.last_name" required></b-form-input>
              </div>
            </div>  
            <br>


            <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Password</label>
                <b-form-input type='password' v-model="create_record.password" required></b-form-input>
              </div>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Confirm Password</label>
                <b-form-input type="password" v-model="create_record.conf_password" required></b-form-input>
                 <div v-if="password_err">
                  <span style="color:red">{{ password_err }}</span>
                </div>
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
            create_record:{username:"", first_name:'', last_name:'',  password:'', conf_password:'' },
            username_err:'',
            password_err:'',
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'username':this.create_record.username,
                'first_name':this.create_record.first_name,
                'last_name':this.create_record.last_name,
                'password':this.create_record.password,
            }
            if(this.create_record.password != this.create_record.conf_password ){
              this.password_err = 'Incorrect confirmation password'
            } else{
              let token = localStorage.getItem('token')
		        	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
               await this.$axios.$post('v1/auth/register', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Customer added successfully';
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
            }
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