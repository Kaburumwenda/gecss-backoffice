<template>
    <div>
        <button class="dmk-reset-btn" @click.prevent="resetRecord()"> 
            <i class="fa fa-retweet" aria-hidden="true"></i>
            </button>
    </div>
</template>

<script>
export default {
    name:'ResetBtn',
    props:{
        title:{
            type:String,
            default:'Reset'
        },
        resetRecord:{
            type:Function,
            default:null
        }
    }
}
</script>

<style lang="scss" scoped>
.dmk-reset-btn{
	height: 30px;
    background: #F6F7F8;
	border: none;
	color: grey;
}
</style>