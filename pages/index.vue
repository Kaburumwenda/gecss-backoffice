<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <h4>Dashboard</h4>
      <OuButton btnSize="sm" icon="fa fa-sitemap" btnType="reset" btnTheme="warning" />
      <br>
      <OuButton btnSize="md" btnTitle="btn" btnType="reset" btnTheme="success" />
      <br>
      <OuButton btnSize="lg" icon="fa fa-plus" btnTitle="btn" btnType="reset" btnTheme="info" />
      <br>
      <OuButton btnSize="lg"  btnTitle="link" url="https://google.com" btnTheme="info" />

      <hr>
    <br>
    <OuButton btnTitle="modal" btnTheme="alt-primary" variant="alt-primary" class="push" :trigerModal="addRecord" />


    <OuModal mdId="add-record" size="md" title="Add Record"/>


    <hr>

    <!-- <OuButton btnTheme="alt-primary" variant="alt-primary" class="push" :trigerModal="addRecord" /> -->

    <!-- <OuButton mpdaId="add-record" modalSize="md" modalTitle="Add Record" class="push" /> -->
    
    <!-- <DcModal id="modal-block-normal" /> -->

    </div>
    <!-- END Page Content -->
  </div>
</template>
<script>
import menuList from '@/data/menu'
export default {
  data(){
    return{
      nav_data:menuList.main,
    }
  },
  // mounted(){
  //   localStorage.setItem('Sidebar_menu', JSON.stringify(this.nav_data) )
  // },
  methods:{
    addRecord(){
        this.$bvModal.show('add-record');	
    },
  }
  
}
</script>