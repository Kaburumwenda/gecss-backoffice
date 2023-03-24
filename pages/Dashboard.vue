<template>
  <div>
    <!-- HERO START -->
     <Hero/>
     <!-- HERO END -->
    <!-- Page Content -->
    <div class="content">
      <!-- Statistics start -->
      <Statistics/>
       <!-- Statistics end -->
       <!-- chart js -->
       <DashGraph/>
       <!-- chart js -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
<script>
import Hero from './home/hero.vue'
import Statistics from './home/statistics.vue'
import DashGraph from './home/dash_graph.vue'
export default {
  layout:'default_common',
  components:{ Hero, Statistics, DashGraph },

  data(){
    return{
      value:'Gecss'
    }
  },

  mounted(){
  },

  methods:{

  }
  
}
</script>
