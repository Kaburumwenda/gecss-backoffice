<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Branch Code</label>
                <b-form-input v-model="recordbyId.code"></b-form-input>
            </div>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Branch</label>
              <b-form-input v-model="recordbyId.title" ></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Status</label>
                <b-form-input v-model="recordbyId.status"></b-form-input>
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