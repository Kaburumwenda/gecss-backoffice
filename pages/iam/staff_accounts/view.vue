<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Staff</label>
                <b-form-input v-model="recordbyId.staff"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Username</label>
                <b-form-input v-model="recordbyId.username"></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
         <div class="uk-width-expand@m">
            <label style="color:#1a1a1a;">Branch</label>
            <b-form-input v-model="recordbyId.operation_area" ></b-form-input>
          </div>
         <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Designation</label>
              <b-form-input v-model="recordbyId.designation" ></b-form-input>
          </div>
          <div class="uk-width-expand@m">
            <label style="color:#1a1a1a;">Department</label>
            <b-form-input v-model="recordbyId.department" ></b-form-input>
          </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">ID number</label>
              <b-form-input v-model="recordbyId.idNo" ></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Phone</label>
              <b-form-input v-model="recordbyId.phone" ></b-form-input>
            </div>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Alt Phone</label>
                <b-form-input v-model="recordbyId.alt_phone"></b-form-input>
            </div>
        </div>  
        <br>
      
       <div uk-grid>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Sex</label>
              <b-form-input v-model="recordbyId.sex" ></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Age</label>
              <b-form-input v-model="recordbyId.age" ></b-form-input>
            </div>
        </div>  
        <br>

    <div uk-grid>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Date Created</label>
              <b-form-input v-model="recordbyId.createdAt" ></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Last Updated</label>
              <b-form-input v-model="recordbyId.updatedAt" ></b-form-input>
            </div>
        </div>  
        <br>

    </div>
</template>

<script>
export default {
    name:'RecordView',
    props:{
        recordbyId:{
            type:Object,
            default:null
        }
    }
}
</script>