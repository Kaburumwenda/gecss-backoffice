<template>
  <!-- Footer -->
  <footer id="page-footer">
    <slot>
      <div class="bg-white">
        <div class="content py-3">
          <b-row class="font-size-sm text-muted font-w500">
            <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
              Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600" href="#" target=""> GECSS IT Team </a>
            </b-col>
            <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
              <a class="font-w600" href="#" target="">{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{ $store.getters.appCopyright }}
            </b-col>
          </b-row>
        </div>
      </div>
    </slot>
  </footer>
  <!-- END Footer -->
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    classes: String
  }
}
</script>
