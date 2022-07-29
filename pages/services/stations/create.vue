<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery Station</label>
                <b-form-input v-model="create_record.title" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Station Head</label>
                <b-form-input v-model="create_record.head" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Phone</label>
                <b-form-input v-model="create_record.phone" required ></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                 <b-form-select v-model="create_record.status" :options='status' required></b-form-select>
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
            create_record:{title:'', status:'', phone:'', head:'' },
            status:['Active', 'Construction', 'Closed',],
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'title':this.create_record.title,
                'status':this.create_record.status,
                'head':this.create_record.head,
                'phone':this.create_record.phone,
            }
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/battery/station/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Battery Station added successfully';
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