<template>
  <base-layout></base-layout>
</template>

<script>
import BaseLayout from '../default'

export default {
  name: 'LayoutSimple',
  components: {
    BaseLayout
  },
  created () {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: false,
      sidebar: false,
      footer: false
    })

    // Set various template options
    this.$store.commit('mainContent', { mode: 'full'})
  }
}
</script>
