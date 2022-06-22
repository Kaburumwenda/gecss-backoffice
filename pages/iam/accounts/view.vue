<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Member Number</label>
                <b-form-input v-model="recordbyId.memNo"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Name</label>
                <b-form-input v-model="recordbyId.client"></b-form-input>
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
              <label style="color:#1a1a1a;">Number of bikes</label>
              <b-form-input v-model="recordbyId.bikes" ></b-form-input>
          </div>
          <div class="uk-width-expand@m">
            <label style="color:#1a1a1a;">Total to be Paid</label>
            <b-form-input v-model="recordbyId.amount" ></b-form-input>
          </div>
          <div class="uk-width-expand@m">
            <label style="color:#1a1a1a;">Balance</label>
            <b-form-input v-model="recordbyId.balance" ></b-form-input>
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
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Occupation</label>
              <b-form-input v-model="recordbyId.occupation" ></b-form-input>
            </div>
        </div>  
        <br>
      <div uk-grid>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Residential</label>
              <b-form-input v-model="recordbyId.residential" ></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Operation area</label>
              <b-form-input v-model="recordbyId.operation_area" ></b-form-input>
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
	<!-- 'client', 'memNo', 'idNo','phone','alt_phone','sex','age','occupation',
            'residential','operation_area','amount','balance','createdAt','updatedAt' -->
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