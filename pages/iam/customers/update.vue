<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Member number</label>
                    <b-form-input v-model="recordbyId.username" required ></b-form-input>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Firstname</label>
                <b-form-input v-model="recordbyId.first_name" required></b-form-input>
                </div>

                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Lastname</label>
                   <b-form-input v-model="recordbyId.last_name" required ></b-form-input>
                </div>
            </div>  
            <br>
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Password</label>
                    <b-form-input v-model="recordbyId.password" required ></b-form-input>
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
                "username": data.username,
                "first_name": data.first_name,
                "last_name": data.last_name,
                "password": data.password
                }
                let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post(`v1/user/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Customer details updated successfully';
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