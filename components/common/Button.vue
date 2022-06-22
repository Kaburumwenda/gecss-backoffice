<template>
    <div>
        <!-- BTN START -->
        <div v-if="type == 'button' ">
            <b-button 
            :href="url"
            :size="btnSize"
            :variant="btnTheme"
            :type="btnType"
            :pill="btnPill"
            :squared="btnSquared"
            :disabled="btnDisabled"
            @click="trigerModal"
            >
            <i :class="icon"></i>
             {{ btnTitle }} </b-button>
        </div>
        <!-- BTN END -->
         <!-- MODAL START -->
        <div v-else>
            <b-modal :id="modalId" body-class="p-0" no-close-on-esc no-close-on-backdrop hide-footer hide-header :size="modalSize">
                <div>
                    <div></div>
                    <div class="d-block">
                        <slot>Modal body</slot>
                    </div>
                </div>
            </b-modal>
        </div>
<!-- MODAL END -->
    </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
            default:'button'
        },
        btnTitle:{
            type:String,
            default:null
        },
        url:{
            type:String,
            default:null
        },
        btnSize:{
            type:String,
            default:'md'
        },
        btnTheme:{
            type:String,
            default:null
        },
         btnType:{
            type:String,
            default:'button'
        },
        btnPill:{
            type:Boolean,
            default:false
        },
        btnSquared:{
            type:Boolean,
            default:false
        },
        btnDisabled:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:null
        },

        modalId:{
            type:String,
            default:null
        },
        modalSize:{
            type:String,
            default:'md'
        },
        modalTitle:{
            type:String,
            default: 'Modal title'
        },
        modalSpinner:{
            type:Boolean,
            default:false
        },
        trigerModal:{
            type:Function,
            default:null
        },

    }
}
</script>