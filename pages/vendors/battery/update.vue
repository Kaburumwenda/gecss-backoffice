<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Battery Code</label>
                    <b-form-input v-model="recordbyId.code" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Location</label>
                    <b-form-input v-model="recordbyId.location" required></b-form-input>
                </div>
                 <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Location</label>
                    <b-form-select v-model="recordbyId.location" :options="branches" required></b-form-select>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Condition</label>
                    <b-form-input v-model="recordbyId.condition" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Status</label>
                    <b-form-select v-model="recordbyId.status" :options="bet_status" required></b-form-select>
                </div>
            </div>  
            <br>

            <SbButton title="Update record" :sb_loading="sb_loading"/>
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
                status:['Charging', 'Issued', 'Depleted'],
                condition:['Stable', 'Medium', 'Unstable'],
                sb_loading:false,  
            }
        },
        async updateRecord(data){
            const Id = data.id;
            const formData = {
                "code": data.code,
                "location": data.location,
                "condition": data.condition,
                "status": data.status
                }
                let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            this.sb_loading = true;
            await this.$axios.$post(`v1/battery/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Battery details updated successfully';
                let set_theme = 'success'
                Swal.fire({
                    icon: set_theme,
                    title: set_msg,
                    })
                this.getRecords();
              }
            });
            this.sb_loading = false;
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
        bet_status:{
          type:Array,
          default:[]
        }

    }
}
</script>