<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery Code</label>
                <b-form-input v-model="create_record.code" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Branch</label>
                 <b-form-select v-if="branches.length > 0" v-model="create_record.location" :options='branches' required></b-form-select>
                 <b-form-select v-else disabled required></b-form-select>
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

            <SbButton :sb_loading="sb_loading"/>
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
            status:['Charging', 'Charged', 'Issued', 'Depleted'],
            condition:['Stable', 'Medium', 'Unstable', 'Depleted'],
            sb_loading:false,
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
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            this.sb_loading = true;
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
                });
                this.sb_loading = false;
        },
    },

    props:{
        getRecords:{
            type:Function,
            default:null
        },
        branches:{
          type:Array,
          default:[]
        }
    }
}
</script>