<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Branch Code</label>
                    <b-form-input v-model="recordbyId.code" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Branch</label>
                <b-form-input v-model="recordbyId.title" :options='status_m' ></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                <b-form-input v-model="recordbyId.status" :options='status' required ></b-form-input>
              </div>
            </div>  
            <br>

            <SbButton title="Update record"/>
            <br>
        </form>
    </div>
</template>

<script>
export default {
    name:'RecordUpdate',
    methods:{
        
        async updateRecord(data){
            const Id = data.id;
            const formData = {
                "code": data.code,
                "title": data.title,
                "status": data.status
                }
            await this.$axios.$post(`v1/branch/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Company branch updated successfully';
                let set_theme = 'success'
                Swal.fire({
                    icon: set_theme,
                    title: set_msg,
                    })
                this.getRecords();
              }
            })
        },
    },
    props:{
        recordbyId:{
            type:Object,
            default:null
        },
         getRecords:{
            type:Function,
            default:null
        }
    }
}
</script>