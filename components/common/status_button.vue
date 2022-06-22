<template>
 <div>
     <div v-if="perms_status == '0'">
         <button class="btn btn-warning " id="status-btn" type="button"  aria-expanded="false">
            {{ statusCode }}
        </button>
     </div>
     <div v-else>
     <div v-if="statusCode == 'Out of Stock' ">
         <button class=" btn status-btn btn-danger " type="button"  aria-expanded="false">
             {{ statusCode }}
        </button>
     </div>
     <div v-else>
        <button class=" btn status-btn btn-success " :id="Id" type="button" aria-expanded="false">
            {{ statusCode }}
        </button>
    </div>
 </div>
 </div>
</template>

<script>
export default {
    name:'Sbutton',
    props:{
        label:{
            type:String,
            default:'status'
        },
        theme:{
            type:String,
            default:'success'
        },
        statusCode:{
            type:String,
            default:null
        },
        btntype:{
            type:String,
            default:'dropdown'
        },
        change: {
			type: Function,
			default: null
		},
        updateRecordStatus:{
            type:Function,
            default:null
        },
        Id:{
            type:String,
            default:'1a'
        },
        perms_status:{
            type:String,
            default:'1',
        }

    }
}
</script>

<style scoped>
.status-btn{
	border-radius: 0px !important;
	padding: 0px 2px 0px 2px !important;
	font-size: 12px !important;
	width: 80px !important;
}
</style>