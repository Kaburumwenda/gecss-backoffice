<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery Code</label>
                <b-form-input v-model="recordbyId.code"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Location</label>
              <b-form-input v-model="recordbyId.location" ></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Condition</label>
                <b-form-input v-model="recordbyId.condition"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Status</label>
              <b-form-input v-model="recordbyId.status" ></b-form-input>
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