<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Member Number</label>
                <b-form-input v-model="create_record.username" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">ID Number</label>
                <b-form-input v-model="create_record.idNo" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Phone</label>
                <b-form-input v-model="create_record.phone" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Alt Phone</label>
                <b-form-input v-model="create_record.alt_phone" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Number of Bikes</label>
                <b-form-input v-model="create_record.bikes" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Amount to be Paid</label>
                <b-form-input v-model="create_record.amount" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Balance</label>
                <b-form-input v-model="create_record.balance" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Sex</label>
                <b-form-select v-model="create_record.sex" :options="gender" required ></b-form-select>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Age</label>
                <b-form-input v-model="create_record.age" required ></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Occupation</label>
                <b-form-input v-model="create_record.occupation" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Residential</label>
                <b-form-input v-model="create_record.residential" required ></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Operation Area</label>
                <b-form-input v-model="create_record.operation_area" required ></b-form-input>
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
            create_record:{
                 username:"", idNo:'', phone:'' , alt_phone:'', 
                 bikes:'', amount:'', balance:'', sex:'', age:'',
                 occupation:'', residential:'', operation_area:''
                 },
            gender:['Male', 'Female', 'Custom'],
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'username':this.create_record.username,
                'idNo':this.create_record.idNo,
                'phone':this.create_record.phone,
                'alt_phone':this.create_record.alt_phone,
                'bikes':this.create_record.bikes,
                'amount':this.create_record.amount,
                'balance':this.create_record.balance,
                'sex':this.create_record.sex,
                'age':this.create_record.age,
                'occupation':this.create_record.occupation,
                'residential':this.create_record.residential,
                'operation_area':this.create_record.operation_area ,
            }
            await this.$axios.$post('v1/account/create', formData)
                .then((resp) =>{
                  console.warn(resp.error)
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Customer Account Created successfully';
                    let set_theme = 'success'
                    Swal.fire({
                        icon: set_theme,
                        title: set_msg,
                        })
                    this.getRecords();
                    this.create_record={}
                  }
                if(resp.error == true){
                  this.username_err = 'Something went wrong... Please try again later'
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