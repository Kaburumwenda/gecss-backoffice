<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Bike No.</label>
                <b-form-input v-model="create_record.bike_no" required></b-form-input>
                <div v-if="bike_err" style="color:red">
                  {{ bike_err }}
                </div>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery Code</label>
                <b-form-input v-model="create_record.battery_code1" required ></b-form-input>
              </div>
            </div>  
            <br>

            <SbButton :sbloading="sb_loading"/>
            <br>

        </b-form>
    </div>
</template>
<script>
export default {
    name:'CreateRecord',
    data(){
        return{
            create_record:{bike_no:'', battery_code1:'' },
            bike_err:'',
            sb_loading: false
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'bike_no':this.create_record.bike_no,
                'battery_code1':this.create_record.battery_code1,
            }
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            this.sb_loading = true;
            await this.$axios.$post('v1/battery/swap/create', formData, {headers: {'Authorization': `Token ${token}`}})
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Battery Issued successfully';
                    let set_theme = 'success'
                    Swal.fire({
                        icon: set_theme,
                        title: set_msg,
                        })
                    this.getRecords();
                    this.create_record={}
                  }
                if(resp.error == true){
                  this.bike_err = 'Motorbike number plate not recognized. Please try again later'
                }
                });
                this.sb_loading = false;
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