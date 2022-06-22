<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Block Forms" subtitle="Easily integrated in your blocks.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
          <b-breadcrumb-item active>Forms</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
   
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: '',
        rememberMe: false
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      // Alert with form input values
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()

      // Reset our form values
      this.form.username = ''
      this.form.password = ''
      this.form.rememberMe = false
    }
  }
}
</script>
