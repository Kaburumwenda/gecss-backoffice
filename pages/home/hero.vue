<template>
    <div>
         <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h2 class="h3 font-w700 mb-2" >
              Dashboard
            </h2>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome <a class="font-w600" href="javascript:void(0)">Gecss</a>, everything looks great.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button to="/iam/staff" variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-plus-square mr-1"></i> New Agent
            </b-button>
            <b-button variant="alt-primary" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->
    </div>
</template>

<script>
export default {
    name:'Hero'
}
</script>