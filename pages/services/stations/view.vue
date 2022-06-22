<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Battery Station</label>
                <b-form-input v-model="recordbyId.title"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Head</label>
              <b-form-input v-model="recordbyId.head" ></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Phone</label>
                <b-form-input v-model="recordbyId.phone"></b-form-input>
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