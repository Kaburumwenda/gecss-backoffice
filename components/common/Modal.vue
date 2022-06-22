<template>
    <div>
        <!-- create context two -->
        <div>
            <b-modal :id="mdId"  body-class="p-0" no-close-on-esc no-close-on-backdrop hide-footer hide-header :size="size">
                <div class="block block-rounded block-themed block-transparent mb-0" >
                    <div class="block-header bg-smooth-darker">
                        <h3 class="block-title"> {{ title }} </h3>
                        <div class="block-options">
                        <button type="button" class="btn-block-option" @click="$bvModal.hide(`${mdId}`)">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                        </div>
                    </div>
                    <div class="block-content font-size-sm">
                      <div v-if="modalSpinner"> 
                          <center>  <i class="fa fa-3x fa-sun fa-spin"></i> <br><br> </center> 
                          </div>
                      <div v-else ><slot>Modal body</slot></div>
                    </div>
                </div>
            </b-modal>
        </div>
<!-- create context two -->
    </div>
</template>

<script>
// import DcSpinner from '~/components/common/spinner.vue'
export default {
    name:'OuModal',
    components: { },
    props:{
        mdId:{
            type:String,
            default:null
        },
        size:{
            type:String,
            default:'md'
        },
        title:{
            type:String,
            default: 'Modal title'
        },
        modalSpinner:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>

</style>