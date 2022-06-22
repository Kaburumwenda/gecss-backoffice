<template>
    <div>
     <div v-if="display_style == '1'" class="text-center">
         <b-button v-if="statusCode != 8" @click.prevent="getRecordById(Id)" data-uk-tooltip="View record " variant="alt-success" size="sm" squared class="mr-1 btn-style">
            <i class="fa fa-fw fa-eye mr-1"></i>
          </b-button>
          <b-button v-if="statusCode!= 8" @click.prevent="getRecordUpdateById( Id )" data-uk-tooltip="Update record " variant="alt-primary" size="sm" squared class="mr-1 btn-style">
            <i class="fa fa-fw fa-edit mr-1"></i>
          </b-button>
          <b-button v-if="statusCode != 8" @click.prevent="deleteRecord(Id)" data-uk-tooltip="Delete record " variant="alt-danger" size="sm" squared class="mr-1 btn-style">
            <i class="fa fa-fw fa-times mr-1"></i>
          </b-button>
          <b-button v-if="perms_barcode == '1'" @click.prevent="qrgenerate(Id)" data-uk-tooltip="Generate QR-CODE" variant="alt-danger" size="sm" squared class="mr-1 btn-style">
            <i class="fa fa-fw fa-qrcode mr-1"></i>
          </b-button>
          <b-button v-if="statusCode == 8" @click.prevent="restoreRecord(Id)" data-uk-tooltip="Restore record " variant="alt-warning" size="sm" squared class="mr-1 btn-style">
            <i class="fa fa-fw fa-history mr-1"></i>
          </b-button>
    </div>
    <div v-else>
        <button class="btn dropdown-toggle" id="dropdownMenuButton1"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-ellipsis-v dmk-dropdown-fa"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
            <ul v-if="statusCode == 8" style="padding:0px !important;">
                <li v-if="perms_restore == '1'" class="dropdown-item" @click.prevent="restoreRecord(Id)"> 
                    <i class="fa fa-history" aria-hidden="true"  style="color:orange"></i>
                    <!-- <i class="fa fa-database" style="color:orange"></i>  -->
                    Restore record </li>
            </ul>
            <ul v-else style="padding:0px !important;">
                <li v-if="perms_view == '1' " class="dropdown-item"  @click.prevent="getRecordById(Id)"> <i class="fa fa-eye" style="color:green"></i> View record </li>
                <li v-if="perms_update == '1' " class="dropdown-item" @click.prevent="getRecordUpdateById( Id )" > <i class="fa fa-edit" style="color:blue"></i> Edit record </li>
                <li v-if="perms_delete == '1' " class="dropdown-item" @click.prevent="deleteRecord(Id)" > <i class="fa fa-trash" style="color:red"></i> Delete record </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'EDropdown',
    props:{
        statusCode:{
            type:String,
            default:null,
        },
        Id:{
            type:String,
            default:null,
        },
        restoreRecord:{
            type:Function,
            default:null,
        },
        getRecordById:{
            type:Function,
            default:null,
        },
        qrgenerate:{
            type:Function,
            default:null
        },
        getRecordUpdateById:{
            type:Function,
            default:null,
        },
        deleteRecord:{
            type:Function,
            default:null,
        },

        perms_view:{
            type:String,
            default:'0'
        },
        perms_barcode:{
            type:String,
            default:'0'
        },
        perms_update:{
            type:String,
            default:'0'
        },
        perms_delete:{
            type:String,
            default:'0'
        },
        perms_restore:{
            type:String,
            default:'0'
        },
        display_style:{
            type:String,
            default:'1'
        }
    }
}
</script>

<style scoped>
.dropdown-toggle{
    padding: 0px 0px 0px 0px !important;
	height: 20px !important;
}
.dropdown-toggle::after {
    display: none;
}
.dropdown-menu li{
    cursor: pointer;
}
.btn-style{
    padding: 0px 1px 1px 5px !important;
    height: 20px !important;
}
</style>
