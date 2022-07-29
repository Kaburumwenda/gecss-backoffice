<template>
    <div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Username</label>
                <b-form-input v-model="recordbyId.username"></b-form-input>
            </div>
        </div>  
        <br>

        <div uk-grid>
            <div class="uk-width-expand@m">
              <label style="color:#1a1a1a;">Firstname</label>
              <b-form-input v-model="recordbyId.first_name" ></b-form-input>
            </div>

            <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Lastname</label>
                <b-form-input v-model="recordbyId.last_name"></b-form-input>
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