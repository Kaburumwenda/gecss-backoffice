<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">E-Bike number plate</label>
                <b-form-input v-model="create_record.bike_no" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Firstname</label>
                <b-form-input v-model="create_record.first_name" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Middlename</label>
                <b-form-input v-model="create_record.middle_name" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Lastname</label>
                <b-form-input v-model="create_record.last_name" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Mobile number</label>
                <b-form-input type="number" v-model="create_record.mobile" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Alternative mobile number</label>
                <b-form-input type="number" v-model="create_record.alt_mobile" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Document type</label>
                <b-form-select v-model="create_record.id_type" :options='idType' required ></b-form-select>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Document number</label>
                 <b-form-input v-model="create_record.id_no" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Sex</label>
                <b-form-select v-model="create_record.gender" :options='sex' required ></b-form-select>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Age</label>
                <b-form-input type="number" v-model="create_record.age" required ></b-form-input>
              </div>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                <b-form-select v-model="create_record.status" :options='status' required ></b-form-select>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Date of registration</label>
                 <b-form-input type="date" v-model="create_record.date_registered" required></b-form-input>
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
            create_record:{bike_no:'', first_name:'', last_name:'', id_type:'', status:'',
                           middle_name:'', gender:'', age:'', id_no:'', mobile:'', alt_mobile:'',
                           },
            status:['Active', 'Inactive'],
            sex:['Male', 'Female'],
            idType:['National Identity', 'Passport', 'Military', 'Alien'],
            record_err:''
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'bike_no':this.create_record.bike_no,
                'status':this.create_record.status,
                'first_name':this.create_record.first_name,
                'last_name':this.create_record.last_name,
                'middle_name': this.create_record.middle_name,
                'gender': this.create_record.gender,
                'age': this.create_record.age,
                'id_no': this.create_record.id_no,
                'id_type':this.create_record.id_type,
                'date_registered': this.create_record.date_registered,
                'mobile': this.create_record.mobile,
                'alt_mobile': this.create_record.alt_mobile,
                
            }
            let token = localStorage.getItem('token')
		       	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('.inc/v1/riders/create', formData)
                .then((resp) =>{
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Rider added successfully';
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