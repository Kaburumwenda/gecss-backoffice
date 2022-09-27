<template>
  <!-- Header -->
  <header id="page-header" style="background:#272E38">
    <slot>
      <!-- Header Content -->
      <div class="content-header">
        <!-- Left Section -->
        <div class="d-flex align-items-center">
          <!-- Toggle Sidebar -->
          <base-layout-modifier action="sidebarToggle" size="sm" variant="dual" class="mr-2 d-lg-none">
            <i class="fa fa-fw fa-bars"></i>
          </base-layout-modifier>
          <!-- END Toggle Sidebar -->

          <!-- Toggle Mini Sidebar -->
          <base-layout-modifier action="sidebarMiniToggle" size="sm" variant="dark" class="mr-2 d-none d-lg-inline-block">
            <i class="fa fa-fw fa-bars"></i>
          </base-layout-modifier>
          <!-- END Toggle Mini Sidebar -->
  
        </div>
        <!-- END Left Section -->

        <!-- Right Section -->
        <div class="d-flex align-items-center">
         
         <!-- services mobile screen -->
         <b-dropdown size="sm" variant="dark" class="d-inline-block ml-2 d-lg-none" menu-class="dropdown-menu-sm p-0 border-0 font-size-sm" right no-caret>
            <template #button-content>
              <i class="fa fa-sitemap"></i>
              <span v-if="mobile_nav.length" class="text-primary">•</span>
            </template>
            <li>
              <div class="p-2 bg-primary-dark text-center rounded-top">
                  <h5 class="dropdown-header text-uppercase text-white">Services</h5>
              </div>
              <ul class="nav-items mb-0">
                <li v-for="rs in mobile_nav" :key="rs">
                  <nuxt-link class="text-dark media py-2" :to="`${rs.to}`">
                    <div class="mr-2 ml-3">
                      <i :class="`${rs.icon}`"></i>
                    </div>
                    <div class="media-body pr-2">
                      <div class="font-w600">{{ rs.name }}</div>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </b-dropdown>
         <!-- services mobile screen -->

          <!-- Services Large screen -->
          <div  id="horizontal-navigation-hover-normal-dark" variant="dark" class="d-none d-lg-block mt-2 mt-lg-0" >
             <TopNavigation :nodes="navigation" dark horizontal horizontal-hover />
          </div>
           <!-- <div id="horizontal-navigation-hover-normal-dark" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" dark horizontal horizontal-hover></base-navigation>
        </div> -->
         <!-- Services Large screen -->

          <!-- Notifications Dropdown -->
          <b-dropdown size="sm" variant="dark" class="d-inline-block ml-2" menu-class="dropdown-menu-lg p-0 border-0 font-size-sm" right no-caret>
            <template #button-content>
              <i class="fa fa-fw fa-bell"></i>
              <span v-if="notifications.length" class="text-primary">•</span>
            </template>
            <li>
              <div class="p-2 bg-primary-dark text-center rounded-top">
                  <h5 class="dropdown-header text-uppercase text-white">Notifications</h5>
              </div>
              <ul class="nav-items mb-0">
                <li v-for="(notification, index) in notifications" :key="`notification-${index}`">
                  <a class="text-dark media py-2" :href="`${notification.href}`">
                    <div class="mr-2 ml-3">
                      <i :class="`${notification.icon}`"></i>
                    </div>
                    <div class="media-body pr-2">
                      <div class="font-w600">{{ notification.title }}</div>
                      <span class="font-w500 text-muted">{{ notification.time }}</span>
                    </div>
                  </a>
                </li>
                <li v-if="!notifications.length" class="p-2">
                  <b-alert variant="warning" class="text-center m-0" show>
                    <p class="mb-0">
                      No new notifications!
                    </p>
                  </b-alert>
                </li>
              </ul>
            </li>
          </b-dropdown>
          <!-- END Notifications Dropdown -->


          <!-- Messages Dropdown -->
          <b-dropdown size="sm" variant="dark" class="d-inline-block ml-2" menu-class="dropdown-menu-lg p-0 border-0 font-size-sm" right no-caret>
            <template #button-content>
              <i class="fa fa-comment-alt"></i>
              <span v-if="notifications.length" class="text-primary">•</span>
            </template>
            <li>
              <div class="p-2 bg-primary-dark text-center rounded-top">
                  <h5 class="dropdown-header text-uppercase text-white">Notifications</h5>
              </div>
              <ul class="nav-items mb-0">
                <li v-for="(notification, index) in notifications" :key="`notification-${index}`">
                  <a class="text-dark media py-2" :href="`${notification.href}`">
                    <div class="mr-2 ml-3">
                      <i :class="`${notification.icon}`"></i>
                    </div>
                    <div class="media-body pr-2">
                      <div class="font-w600">{{ notification.title }}</div>
                      <span class="font-w500 text-muted">{{ notification.time }}</span>
                    </div>
                  </a>
                </li>
                <li v-if="!notifications.length" class="p-2">
                  <b-alert variant="warning" class="text-center m-0" show>
                    <p class="mb-0">
                      No new notifications!
                    </p>
                  </b-alert>
                </li>
              </ul>
            </li>
          </b-dropdown>
          <!-- END messages Dropdown -->

          <!-- User Dropdown -->
          <b-dropdown size="sm" variant="dark" class="d-inline-block ml-2" menu-class="p-0 border-0 dropdown-menu-md" right no-caret ref="oneDropdownDefaultUser">
            <template #button-content>
              <div class="d-flex align-items-center">
                 <i class="fa fa-user"></i>
                <span class="d-none d-sm-inline-block ml-2">Adam</span>
                <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block ml-1 mt-1"></i>
              </div>
            </template>
            <li @click="$refs.oneDropdownDefaultUser.hide(true)">
              <div class="p-3 text-center bg-primary-dark rounded-top">
                <img class="img-avatar img-avatar48 img-avatar-thumb" src="img/avatars/avatar10.jpg" alt="Avatar">
                <p class="mt-2 mb-0 text-white font-w500">Adam Smith</p>
                <p class="mb-0 text-white-50 font-size-sm">Web Developer</p>
              </div>
              <div class="p-2">
                <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                  <span class="font-size-sm font-w500">Inbox</span>
                  <span class="badge badge-pill badge-primary ml-2">3</span>
                </a>
                <nuxt-link class="dropdown-item d-flex align-items-center justify-content-between" to="/backend/pages/generic/profile">
                  <span class="font-size-sm font-w500">Profile</span>
                  <span class="badge badge-pill badge-primary ml-2">1</span>
                </nuxt-link>
                <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                  <span class="font-size-sm font-w500">Settings</span>
                </a>
                <div role="separator" class="dropdown-divider"></div>
                <nuxt-link class="dropdown-item d-flex align-items-center justify-content-between" to="/auth/lock">
                  <span class="font-size-sm font-w500">Lock Account</span>
                </nuxt-link>
                <nuxt-link class="dropdown-item d-flex align-items-center justify-content-between" to="">
                  <span @click="logout()" class="font-size-sm font-w500">Log Out</span>
                </nuxt-link>
              </div>
            </li>
          </b-dropdown>
          <!-- END User Dropdown -->

        </div>
        <!-- END Right Section -->
      </div>
      <!-- END Header Content -->

   

      <!-- Header Loader -->
      <div id="page-header-loader" class="overlay-header bg-white" :class="{ 'show': $store.state.settings.headerLoader }">
        <div class="content-header">
          <div class="w-100 text-center">
            <i class="fa fa-fw fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
      <!-- END Header Loader -->
    </slot>
  </header>
  <!-- END Header -->
</template>

<script>
import TopNavigation from '~/components/TopNavigation.vue'
export default {
  name: 'BaseHeader',
  components:{ TopNavigation },
  props: {
    classes: String
  },
  data () {
    return {
      navigation:[
        {
      name: 'Services',
      icon: 'fa fa-sitemap',
      sub: [
        {
          name: 'HR Console',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Payroll Processer',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Employee Manager',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Logistics Console',
          icon: 'si si-arrow-right',
          to: '#'
        },
      ]
    },
     ],

     mobile_nav: [
       {
          name: 'HR Console',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Payroll Processer',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Employee Manager',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Logistics Console',
          icon: 'si si-arrow-right',
          to: '#'
        },
     ],

      baseSearchTerm: '',
      notifications: [
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-check-circle text-success',
          title: 'You have a new follower',
          time: '15 min ago'
        },
       
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-check-circle text-success',
          title: 'You have a new follower',
          time: '42 min ago'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/backend/pages/generic/search?' + this.baseSearchTerm)
    },
    eventHeaderSearch (event) {
      // When ESCAPE key is hit close the header search section
      if (event.which === 27) {
        event.preventDefault()
        this.$store.commit('headerSearch', { mode: 'off' })
      }
    },
    async logout() { 
            await this.$auth.logout() 
            this.$router.push('/auth/login');
       }

  },
  mounted () {
    document.addEventListener('keydown', this.eventHeaderSearch)
  },
  destroyed () {
    document.removeEventListener('keydown', this.eventHeaderSearch)
  }
}
</script>
