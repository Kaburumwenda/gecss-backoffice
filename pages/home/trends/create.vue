<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Branch Code</label>
                <b-form-input v-model="create_record.code" required></b-form-input>
                <div v-if="record_err.length > 1" style="color:red">
                  {{ record_err }}
                </div>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Branch</label>
                <b-form-input v-model="create_record.title" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
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
            create_record:{code:'', status:'', title:'' },
            status:['Active', 'Agent', 'Dormant', 'Ongoing', 'Construction'],
            record_err:''
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'code':this.create_record.code,
                'status':this.create_record.status,
                'title':this.create_record.title,
            }
            await this.$axios.$post('v1/branch/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Company branch created successfully';
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