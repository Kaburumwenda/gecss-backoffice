<template>
  <!-- Sidebar -->
  <!--
    Sidebar Mini Mode - Display Helper classes

    Adding 'smini-hide' class to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
    Adding 'smini-show' class to an element will make it visible (opacity: 1) when the sidebar is in mini mode
    If you would like to disable the transition animation, make sure to also add the 'no-transition' class to your element

    Adding 'smini-hidden' to an element will hide it when the sidebar is in mini mode
    Adding 'smini-visible' to an element will show it (display: inline-block) only when the sidebar is in mini mode
    Adding 'smini-visible-block' to an element will show it (display: block) only when the sidebar is in mini mode
    -->
  <nav id="sidebar" aria-label="Main Navigation">
    <slot>
      <!-- Side Header -->
      <div class="content-header bg-white-5">
        <!-- Logo -->
        <nuxt-link to="/" class="font-w600 text-dual">

           <span class="smini-visible">
            <div class="logoavatar-con-mini">
               <img src="~/assets/img/logo.png" alt="logo" class="logoavatar-mini">
         </div>
          </span>

         <span style="display:flex; align-items:center" class="smini-hide">
           <div class="logoavatar-con">
            <img src="~/assets/img/logo.png" alt="logo" class="logoavatar">
         </div>
         <span style="margin-left:10px">GECSS</span>
         </span>

        </nuxt-link>
        <!-- END Logo -->

        <!-- Extra -->
        <div>
         

          <!-- Close Sidebar, Visible only on mobile screens -->
          <base-layout-modifier size="sm" variant="dual" action="sidebarClose" class="d-lg-none ml-1">
            <i class="fa fa-fw fa-times"></i>
          </base-layout-modifier>
          <!-- END Close Sidebar -->
        </div>
        <!-- END Extra -->
      </div>
      <!-- END Side Header -->

      <!-- Sidebar Scrolling -->
      <simplebar class="js-sidebar-scroll">
        <!-- Side Navigation -->
        <div class="content-side">
          <base-navigation :nodes="navigation"></base-navigation>
        </div>
        <!-- END Side Navigation -->
      </simplebar>
      <!-- END Sidebar Scrolling -->
    </slot>
  </nav>
  <!-- END Sidebar -->
</template>

<script>
// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from 'simplebar-vue'

// Get navigation data
import menuList from '@/data/menu'

export default {
  name: 'BaseSidebar',
  props: {
    classes: String
  },
  components: {
    simplebar
  },
  data () {
    return {
      // Get main navigation
      navigation: menuList.main
      // navigation:[]
    }
  },

  mounted(){
    // this.navigation = JSON.parse(localStorage.getItem('Sidebar_menu') );
  }
}
</script>

<style scoped>
.logoavatar-con {
  background: white;
  /* padding: 10px 10px 10px 10px; */
  vertical-align: middle;
  /* width: 50px; */
  height: 45px;
  border-radius: 50%;
}
.logoavatar {
  height: 45px;
  vertical-align: middle;
  border-radius: 50%;
}

.logoavatar-con-mini {
  background: white;
  margin-top: 50px;
  margin-left: -10px;
  vertical-align: middle;
  /* width: 50px; */
  height: 30px;
  border-radius: 50%;
}

.logoavatar-mini {
  height: 30px;
  vertical-align: middle;
  border-radius: 50%;
  /* padding: 5px 5px 5px 5px; */
}
</style>
