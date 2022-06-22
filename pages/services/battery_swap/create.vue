<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Member No.</label>
                <b-form-input v-model="create_record.mem_no" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Bike No.</label>
                <b-form-input v-model="create_record.bike_no" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery</label>
                <b-form-input v-model="create_record.battery_code1" required ></b-form-input>
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
            create_record:{mem_no:'', bike_no:'', battery_code1:'' },
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'mem_no':this.create_record.mem_no,
                'bike_no':this.create_record.bike_no,
                'battery_code1':this.create_record.battery_code1,
            }
            await this.$axios.$post('v1/battery/swap/create', formData)
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