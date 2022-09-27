import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ec5ea7a = () => interopDefault(import('../pages/bakcode.vue' /* webpackChunkName: "pages/bakcode" */))
const _1545b73e = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "pages/Dashboard" */))
const _bc46217a = () => interopDefault(import('../pages/http_common.js' /* webpackChunkName: "pages/http_common" */))
const _2c21d7ba = () => interopDefault(import('../pages/motorbike/index.vue' /* webpackChunkName: "pages/motorbike/index" */))
const _56d9031c = () => interopDefault(import('../pages/auth/Lock.vue' /* webpackChunkName: "pages/auth/Lock" */))
const _3f2cb030 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _8d47eb2e = () => interopDefault(import('../pages/auth/SignUp.vue' /* webpackChunkName: "pages/auth/SignUp" */))
const _faa174f0 = () => interopDefault(import('../pages/finance/mpesa/index.vue' /* webpackChunkName: "pages/finance/mpesa/index" */))
const _33c87e13 = () => interopDefault(import('../pages/finance/transactions/index.vue' /* webpackChunkName: "pages/finance/transactions/index" */))
const _797aecee = () => interopDefault(import('../pages/iam/accounts/index.vue' /* webpackChunkName: "pages/iam/accounts/index" */))
const _da271fb0 = () => interopDefault(import('../pages/iam/customers/index.vue' /* webpackChunkName: "pages/iam/customers/index" */))
const _e012fe1a = () => interopDefault(import('../pages/iam/staff/index.vue' /* webpackChunkName: "pages/iam/staff/index" */))
const _3e71bb48 = () => interopDefault(import('../pages/iam/staff_accounts/index.vue' /* webpackChunkName: "pages/iam/staff_accounts/index" */))
const _7ba7bafb = () => interopDefault(import('../pages/motorbike/create.vue' /* webpackChunkName: "pages/motorbike/create" */))
const _b8eb6dc2 = () => interopDefault(import('../pages/motorbike/table.vue' /* webpackChunkName: "pages/motorbike/table" */))
const _1867a448 = () => interopDefault(import('../pages/motorbike/update.vue' /* webpackChunkName: "pages/motorbike/update" */))
const _cabaf438 = () => interopDefault(import('../pages/motorbike/view.vue' /* webpackChunkName: "pages/motorbike/view" */))
const _40652e85 = () => interopDefault(import('../pages/services/battery/index.vue' /* webpackChunkName: "pages/services/battery/index" */))
const _8612d43a = () => interopDefault(import('../pages/services/battery_swap/index.vue' /* webpackChunkName: "pages/services/battery_swap/index" */))
const _e7944fc6 = () => interopDefault(import('../pages/services/stations/index.vue' /* webpackChunkName: "pages/services/stations/index" */))
const _5211d24b = () => interopDefault(import('../pages/setup/branches/index.vue' /* webpackChunkName: "pages/setup/branches/index" */))
const _1a695f39 = () => interopDefault(import('../pages/ui/table.vue' /* webpackChunkName: "pages/ui/table" */))
const _0a249394 = () => interopDefault(import('../pages/finance/mpesa/create.vue' /* webpackChunkName: "pages/finance/mpesa/create" */))
const _3c4a7a84 = () => interopDefault(import('../pages/finance/mpesa/table.vue' /* webpackChunkName: "pages/finance/mpesa/table" */))
const _d0a4c0fa = () => interopDefault(import('../pages/finance/mpesa/update.vue' /* webpackChunkName: "pages/finance/mpesa/update" */))
const _9fd7d842 = () => interopDefault(import('../pages/finance/mpesa/view.vue' /* webpackChunkName: "pages/finance/mpesa/view" */))
const _6cfb8f0b = () => interopDefault(import('../pages/finance/transactions/create.vue' /* webpackChunkName: "pages/finance/transactions/create" */))
const _253899e2 = () => interopDefault(import('../pages/finance/transactions/table.vue' /* webpackChunkName: "pages/finance/transactions/table" */))
const _09bb7858 = () => interopDefault(import('../pages/finance/transactions/update.vue' /* webpackChunkName: "pages/finance/transactions/update" */))
const _7bfc1df4 = () => interopDefault(import('../pages/finance/transactions/view.vue' /* webpackChunkName: "pages/finance/transactions/view" */))
const _667a1b56 = () => interopDefault(import('../pages/iam/accounts/create.vue' /* webpackChunkName: "pages/iam/accounts/create" */))
const _7cddbe85 = () => interopDefault(import('../pages/iam/accounts/table.vue' /* webpackChunkName: "pages/iam/accounts/table" */))
const _6982dba2 = () => interopDefault(import('../pages/iam/accounts/update.vue' /* webpackChunkName: "pages/iam/accounts/update" */))
const _28106884 = () => interopDefault(import('../pages/iam/accounts/view.vue' /* webpackChunkName: "pages/iam/accounts/view" */))
const _1b5440d4 = () => interopDefault(import('../pages/iam/customers/create.vue' /* webpackChunkName: "pages/iam/customers/create" */))
const _4c87a524 = () => interopDefault(import('../pages/iam/customers/table.vue' /* webpackChunkName: "pages/iam/customers/table" */))
const _e1d46e3a = () => interopDefault(import('../pages/iam/customers/update.vue' /* webpackChunkName: "pages/iam/customers/update" */))
const _2437153f = () => interopDefault(import('../pages/iam/customers/view.vue' /* webpackChunkName: "pages/iam/customers/view" */))
const _910c0f14 = () => interopDefault(import('../pages/iam/staff_accounts/create.vue' /* webpackChunkName: "pages/iam/staff_accounts/create" */))
const _0fe61f78 = () => interopDefault(import('../pages/iam/staff_accounts/table.vue' /* webpackChunkName: "pages/iam/staff_accounts/table" */))
const _5439e1c3 = () => interopDefault(import('../pages/iam/staff_accounts/update.vue' /* webpackChunkName: "pages/iam/staff_accounts/update" */))
const _5b4be61f = () => interopDefault(import('../pages/iam/staff_accounts/view.vue' /* webpackChunkName: "pages/iam/staff_accounts/view" */))
const _d2e42faa = () => interopDefault(import('../pages/iam/staff/create.vue' /* webpackChunkName: "pages/iam/staff/create" */))
const _4991b5ef = () => interopDefault(import('../pages/iam/staff/table.vue' /* webpackChunkName: "pages/iam/staff/table" */))
const _334dd178 = () => interopDefault(import('../pages/iam/staff/update.vue' /* webpackChunkName: "pages/iam/staff/update" */))
const _1adb81d8 = () => interopDefault(import('../pages/iam/staff/view.vue' /* webpackChunkName: "pages/iam/staff/view" */))
const _400e6f32 = () => interopDefault(import('../pages/iam/users/profile.vue' /* webpackChunkName: "pages/iam/users/profile" */))
const _0990713b = () => interopDefault(import('../pages/services/battery_swap/create.vue' /* webpackChunkName: "pages/services/battery_swap/create" */))
const _7691cadf = () => interopDefault(import('../pages/services/battery_swap/table.vue' /* webpackChunkName: "pages/services/battery_swap/table" */))
const _b35f4af0 = () => interopDefault(import('../pages/services/battery_swap/update.vue' /* webpackChunkName: "pages/services/battery_swap/update" */))
const _287867b8 = () => interopDefault(import('../pages/services/battery_swap/view.vue' /* webpackChunkName: "pages/services/battery_swap/view" */))
const _0cd1cc73 = () => interopDefault(import('../pages/services/battery/barcode.vue' /* webpackChunkName: "pages/services/battery/barcode" */))
const _1816264e = () => interopDefault(import('../pages/services/battery/create.vue' /* webpackChunkName: "pages/services/battery/create" */))
const _0bff38fe = () => interopDefault(import('../pages/services/battery/table.vue' /* webpackChunkName: "pages/services/battery/table" */))
const _de9653b4 = () => interopDefault(import('../pages/services/battery/update.vue' /* webpackChunkName: "pages/services/battery/update" */))
const _b4a2d17c = () => interopDefault(import('../pages/services/battery/view.vue' /* webpackChunkName: "pages/services/battery/view" */))
const _22397641 = () => interopDefault(import('../pages/services/stations/create.vue' /* webpackChunkName: "pages/services/stations/create" */))
const _45d10d19 = () => interopDefault(import('../pages/services/stations/table.vue' /* webpackChunkName: "pages/services/stations/table" */))
const _820d40e4 = () => interopDefault(import('../pages/services/stations/update.vue' /* webpackChunkName: "pages/services/stations/update" */))
const _7ed65aaa = () => interopDefault(import('../pages/services/stations/view.vue' /* webpackChunkName: "pages/services/stations/view" */))
const _17dcc1d3 = () => interopDefault(import('../pages/setup/branches/create.vue' /* webpackChunkName: "pages/setup/branches/create" */))
const _0bad0747 = () => interopDefault(import('../pages/setup/branches/table.vue' /* webpackChunkName: "pages/setup/branches/table" */))
const _96c6a9c0 = () => interopDefault(import('../pages/setup/branches/update.vue' /* webpackChunkName: "pages/setup/branches/update" */))
const _119b62bc = () => interopDefault(import('../pages/setup/branches/view.vue' /* webpackChunkName: "pages/setup/branches/view" */))
const _220c97fd = () => interopDefault(import('../pages/ui/blocks/Buttons.vue' /* webpackChunkName: "pages/ui/blocks/Buttons" */))
const _ee9cb2aa = () => interopDefault(import('../pages/ui/blocks/Forms.vue' /* webpackChunkName: "pages/ui/blocks/Forms" */))
const _ffa51422 = () => interopDefault(import('../pages/ui/blocks/Themed.vue' /* webpackChunkName: "pages/ui/blocks/Themed" */))
const _d45140c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bakcode",
    component: _7ec5ea7a,
    name: "bakcode"
  }, {
    path: "/Dashboard",
    component: _1545b73e,
    name: "Dashboard"
  }, {
    path: "/http_common",
    component: _bc46217a,
    name: "http_common"
  }, {
    path: "/motorbike",
    component: _2c21d7ba,
    name: "motorbike"
  }, {
    path: "/auth/Lock",
    component: _56d9031c,
    name: "auth-Lock"
  }, {
    path: "/auth/login",
    component: _3f2cb030,
    name: "auth-login"
  }, {
    path: "/auth/SignUp",
    component: _8d47eb2e,
    name: "auth-SignUp"
  }, {
    path: "/finance/mpesa",
    component: _faa174f0,
    name: "finance-mpesa"
  }, {
    path: "/finance/transactions",
    component: _33c87e13,
    name: "finance-transactions"
  }, {
    path: "/iam/accounts",
    component: _797aecee,
    name: "iam-accounts"
  }, {
    path: "/iam/customers",
    component: _da271fb0,
    name: "iam-customers"
  }, {
    path: "/iam/staff",
    component: _e012fe1a,
    name: "iam-staff"
  }, {
    path: "/iam/staff_accounts",
    component: _3e71bb48,
    name: "iam-staff_accounts"
  }, {
    path: "/motorbike/create",
    component: _7ba7bafb,
    name: "motorbike-create"
  }, {
    path: "/motorbike/table",
    component: _b8eb6dc2,
    name: "motorbike-table"
  }, {
    path: "/motorbike/update",
    component: _1867a448,
    name: "motorbike-update"
  }, {
    path: "/motorbike/view",
    component: _cabaf438,
    name: "motorbike-view"
  }, {
    path: "/services/battery",
    component: _40652e85,
    name: "services-battery"
  }, {
    path: "/services/battery_swap",
    component: _8612d43a,
    name: "services-battery_swap"
  }, {
    path: "/services/stations",
    component: _e7944fc6,
    name: "services-stations"
  }, {
    path: "/setup/branches",
    component: _5211d24b,
    name: "setup-branches"
  }, {
    path: "/ui/table",
    component: _1a695f39,
    name: "ui-table"
  }, {
    path: "/finance/mpesa/create",
    component: _0a249394,
    name: "finance-mpesa-create"
  }, {
    path: "/finance/mpesa/table",
    component: _3c4a7a84,
    name: "finance-mpesa-table"
  }, {
    path: "/finance/mpesa/update",
    component: _d0a4c0fa,
    name: "finance-mpesa-update"
  }, {
    path: "/finance/mpesa/view",
    component: _9fd7d842,
    name: "finance-mpesa-view"
  }, {
    path: "/finance/transactions/create",
    component: _6cfb8f0b,
    name: "finance-transactions-create"
  }, {
    path: "/finance/transactions/table",
    component: _253899e2,
    name: "finance-transactions-table"
  }, {
    path: "/finance/transactions/update",
    component: _09bb7858,
    name: "finance-transactions-update"
  }, {
    path: "/finance/transactions/view",
    component: _7bfc1df4,
    name: "finance-transactions-view"
  }, {
    path: "/iam/accounts/create",
    component: _667a1b56,
    name: "iam-accounts-create"
  }, {
    path: "/iam/accounts/table",
    component: _7cddbe85,
    name: "iam-accounts-table"
  }, {
    path: "/iam/accounts/update",
    component: _6982dba2,
    name: "iam-accounts-update"
  }, {
    path: "/iam/accounts/view",
    component: _28106884,
    name: "iam-accounts-view"
  }, {
    path: "/iam/customers/create",
    component: _1b5440d4,
    name: "iam-customers-create"
  }, {
    path: "/iam/customers/table",
    component: _4c87a524,
    name: "iam-customers-table"
  }, {
    path: "/iam/customers/update",
    component: _e1d46e3a,
    name: "iam-customers-update"
  }, {
    path: "/iam/customers/view",
    component: _2437153f,
    name: "iam-customers-view"
  }, {
    path: "/iam/staff_accounts/create",
    component: _910c0f14,
    name: "iam-staff_accounts-create"
  }, {
    path: "/iam/staff_accounts/table",
    component: _0fe61f78,
    name: "iam-staff_accounts-table"
  }, {
    path: "/iam/staff_accounts/update",
    component: _5439e1c3,
    name: "iam-staff_accounts-update"
  }, {
    path: "/iam/staff_accounts/view",
    component: _5b4be61f,
    name: "iam-staff_accounts-view"
  }, {
    path: "/iam/staff/create",
    component: _d2e42faa,
    name: "iam-staff-create"
  }, {
    path: "/iam/staff/table",
    component: _4991b5ef,
    name: "iam-staff-table"
  }, {
    path: "/iam/staff/update",
    component: _334dd178,
    name: "iam-staff-update"
  }, {
    path: "/iam/staff/view",
    component: _1adb81d8,
    name: "iam-staff-view"
  }, {
    path: "/iam/users/profile",
    component: _400e6f32,
    name: "iam-users-profile"
  }, {
    path: "/services/battery_swap/create",
    component: _0990713b,
    name: "services-battery_swap-create"
  }, {
    path: "/services/battery_swap/table",
    component: _7691cadf,
    name: "services-battery_swap-table"
  }, {
    path: "/services/battery_swap/update",
    component: _b35f4af0,
    name: "services-battery_swap-update"
  }, {
    path: "/services/battery_swap/view",
    component: _287867b8,
    name: "services-battery_swap-view"
  }, {
    path: "/services/battery/barcode",
    component: _0cd1cc73,
    name: "services-battery-barcode"
  }, {
    path: "/services/battery/create",
    component: _1816264e,
    name: "services-battery-create"
  }, {
    path: "/services/battery/table",
    component: _0bff38fe,
    name: "services-battery-table"
  }, {
    path: "/services/battery/update",
    component: _de9653b4,
    name: "services-battery-update"
  }, {
    path: "/services/battery/view",
    component: _b4a2d17c,
    name: "services-battery-view"
  }, {
    path: "/services/stations/create",
    component: _22397641,
    name: "services-stations-create"
  }, {
    path: "/services/stations/table",
    component: _45d10d19,
    name: "services-stations-table"
  }, {
    path: "/services/stations/update",
    component: _820d40e4,
    name: "services-stations-update"
  }, {
    path: "/services/stations/view",
    component: _7ed65aaa,
    name: "services-stations-view"
  }, {
    path: "/setup/branches/create",
    component: _17dcc1d3,
    name: "setup-branches-create"
  }, {
    path: "/setup/branches/table",
    component: _0bad0747,
    name: "setup-branches-table"
  }, {
    path: "/setup/branches/update",
    component: _96c6a9c0,
    name: "setup-branches-update"
  }, {
    path: "/setup/branches/view",
    component: _119b62bc,
    name: "setup-branches-view"
  }, {
    path: "/ui/blocks/Buttons",
    component: _220c97fd,
    name: "ui-blocks-Buttons"
  }, {
    path: "/ui/blocks/Forms",
    component: _ee9cb2aa,
    name: "ui-blocks-Forms"
  }, {
    path: "/ui/blocks/Themed",
    component: _ffa51422,
    name: "ui-blocks-Themed"
  }, {
    path: "/",
    component: _d45140c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
