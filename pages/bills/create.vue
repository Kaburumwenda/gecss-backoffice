<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Item</label>
                <b-form-textarea v-model="create_record.item" required></b-form-textarea>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Quantity</label>
                <b-form-input v-model="create_record.quantity" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Units of conversion</label>
                <b-form-input v-model="create_record.units_conversion" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Price</label>
                <b-form-input v-model="create_record.price" required></b-form-input>
              </div>
            </div>  
            <br>


            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Department</label>
                <b-form-select v-model="create_record.department" :options='depart' required ></b-form-select>
              </div>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                <b-form-select v-model="create_record.status" :options='status' required ></b-form-select>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Approved by</label>
                <b-form-input v-model="create_record.approvedby" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Date</label>
                <b-form-input type="date" v-model="create_record.date" required></b-form-input>
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
            create_record:{ quantity:'', item:'', units_conversion:'', price:'', department:'', status:'', approvedby:'', date:'' },
            depart:['HR', 'Finance','Assemblying', 'Retrofitting', 'Kitchen', 'Transportation' ],
            status:['Paid', 'unPaid', 'Cancelled']
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'item':this.create_record.item,
                'quantity':this.create_record.quantity,
                'units_conversion':this.create_record.units_conversion,
                'price': this.create_record.price,
                'department':this.create_record.department,
                'approvedby':this.create_record.approvedby,
                'date': this.create_record.date,
                'status': this.create_record.status,
            }
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/account/expense/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Bill or Expense saved successfully';
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