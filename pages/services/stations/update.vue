<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Battery Station</label>
                    <b-form-input v-model="recordbyId.title" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Head</label>
                    <b-form-input v-model="recordbyId.head" required></b-form-input>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Phone </label>
                    <b-form-input v-model="recordbyId.phone" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Status</label>
                    <b-form-input v-model="recordbyId.status" required></b-form-input>
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
        data(){
            return{
                status:['Charging', 'Issued'],
                condition:['Stable', 'Medium', 'Unstable']   
            }
        },
        async updateRecord(data){
            const Id = data.id;
            const formData = {
                "title": data.title,
                "head": data.head,
                "phone": data.phone,
                "status": data.status
                }
            await this.$axios.$post(`v1/battery/station/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Battery Station updated successfully';
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