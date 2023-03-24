<template>
    <div>
         <center>
             <b-button v-if="sbloading" variant="outline-primary" disabled squared >
                <b-spinner small type="grow"></b-spinner> Processing... </b-button>

             <b-button v-else type="submit" variant="dark" class="btn-square"> {{ title }} </b-button>
             </center>
    </div>
</template>

<script>
export default {
    name:'SbButton',
    data(){
        return{
            theme:'',
            color:''
        }
    },
    mounted(){
        this.theme = localStorage.getItem('default_theme');
        this.color = localStorage.getItem('default_color');
    },
    props:{
        title:{
            type:String,
            default:'Save record'
        },
        sbloading:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style scoped>
.dmk-btn{
    background: #00838F !important;
}
</style>