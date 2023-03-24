<template>
    <div>
        <form @submit.prevent="updateRecord(recordbyId)">
            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Item</label>
                    <b-form-input v-model="recordbyId.item" required></b-form-input>
                </div>
            </div>  
            <br>

             <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Quantity</label>
                    <b-form-input v-model="recordbyId.quantity" required></b-form-input>
                </div>
                 <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Units of Conversion</label>
                    <b-form-input v-model="recordbyId.units_conversion" required></b-form-input>
                </div>
                 <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Total</label>
                    <b-form-input v-model="recordbyId.price" required></b-form-input>
                </div>
            </div>  
            <br>

            <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Department </label>
                    <b-form-select v-model="recordbyId.department" :options='depart' required></b-form-select>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;"> Status </label>
                    <b-form-select v-model="recordbyId.status" :options='status' required></b-form-select>
                </div>
            </div>  
            <br>

             <div uk-grid>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Approved by</label>
                    <b-form-input v-model="recordbyId.approvedby" required></b-form-input>
                </div>
                <div class="uk-width-expand@m">
                    <label style="color:#1a1a1a;">Date</label>
                    <b-form-input type="date" v-model="recordbyId.date" required></b-form-input>
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
    data(){
        return{
            depart:['HR', 'Finance','Assemblying', 'Retrofitting', 'Kitchen', 'Transportation' ],
            status:['Paid', 'unPaid', 'Cancelled']
        }
    },
    methods:{
        async updateRecord(data){
            const Id = data.id;
            const formData = {
                "item":data.item,
                "quantity": data.quantity,
                "department":data.department,
                "units_conversion":data.units_conversion,
                "price":data.price,
                "department":data.department,
                "approvedby":data.approvedby,
                "date":data.date,
                "status":data.status
                }
                let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post(`v1/account/expense/update/${Id}`, formData)
            .then((resp) => {
                if(resp.error == 'false'){
                this.$bvModal.hide('dmk-update-record')
                let set_msg = 'Bills & Expense updated successfully';
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