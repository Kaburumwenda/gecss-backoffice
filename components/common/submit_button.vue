<template>
    <div>
         <center><b-button type="submit" variant="dark" class="btn-square"> {{ title }} </b-button></center>
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
        }
    }
}
</script>
<style scoped>
.dmk-btn{
    background: #00838F !important;
}
</style>