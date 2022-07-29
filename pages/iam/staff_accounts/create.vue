<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Staff Username</label>
                <b-form-select v-model="create_record.username" required :options="staff" ></b-form-select>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">ID No.</label>
                <b-form-input v-model="create_record.idNo" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Branch</label>
                <b-form-select v-model="create_record.operation_area" required :options="branches"></b-form-select>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Department</label>
                <b-form-input v-model="create_record.department" required></b-form-input>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Designation</label>
                <b-form-input v-model="create_record.designation" required></b-form-input>
              </div>
            </div>  
            <br>

            <div uk-grid>
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
                <label style="color:#1a1a1a;">Sex</label>
                <b-form-select v-model="create_record.sex" :options="gender" required ></b-form-select>
              </div>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Age</label>
                <b-form-input v-model="create_record.age" required ></b-form-input>
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
                 username:"", idNo:'', department:'', designation:'', phone:'' , alt_phone:'', operation_area:'', age:'', sex:''
                 },
            gender:['Male', 'Female', 'Custom'],
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'username':this.create_record.username,
                'idNo':this.create_record.idNo,
                'department':this.create_record.department,
                'designation':this.create_record.designation,
                'operation_area':this.create_record.operation_area,
                'phone':this.create_record.phone,
                'alt_phone':this.create_record.alt_phone,
                'age':this.create_record.age,
                'sex':this.create_record.sex
            }
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/staff/account/create', formData)
                .then((resp) =>{
                  console.warn(resp.error)
                if(resp.error == false){
                    this.$bvModal.hide('add-record')
                    let set_msg = 'Staff Account Created successfully';
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
        },
        branches:{
          type:Array,
          default:[]
        },
        staff:{
          type:Array,
          default:[]
        },
    }
}
</script>