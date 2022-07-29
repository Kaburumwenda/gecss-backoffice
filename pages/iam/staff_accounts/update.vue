<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">ID number</label>
                    <b-form-input v-model="recordbyId.idNo" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Phone</label>
                    <b-form-input v-model="recordbyId.phone" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Alt Phone</label>
                    <b-form-input v-model="recordbyId.alt_phone" required></b-form-input>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Branch</label>
                <b-form-select v-model="recordbyId.operation_area" :options="branches" required></b-form-select>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Department</label>
                   <b-form-input v-model="recordbyId.department" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Designation</label>
                    <b-form-input v-model="recordbyId.designation" required></b-form-input>
                </div>
            </div>  
            <br>
            <div uk-grid>
                <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">SEX</label>
                <b-form-input v-model="recordbyId.sex" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Age</label>
                   <b-form-input v-model="recordbyId.age" required></b-form-input>
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
                "idNo": data.idNo,
                "phone": data.phone,
                "alt_phone": data.alt_phone,
                "department":data.department,
                "designation":data.designation,
                'age':data.age,
                'sex':data.sex,
                'operation_area':data.operation_area
                }
                let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post(`v1/staff/account/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Staff account details updated successfully';
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
        },

        branches:{
          type:Array,
          default:[]
        },
    }
}
</script>