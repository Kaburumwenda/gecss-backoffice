import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ec5ea7a = () => interopDefault(import('../pages/bakcode.vue' /* webpackChunkName: "pages/bakcode" */))
const _1545b73e = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "pages/Dashboard" */))
const _56d9031c = () => interopDefault(import('../pages/auth/Lock.vue' /* webpackChunkName: "pages/auth/Lock" */))
const _3f2cb030 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _8d47eb2e = () => interopDefault(import('../pages/auth/SignUp.vue' /* webpackChunkName: "pages/auth/SignUp" */))
const _33c87e13 = () => interopDefault(import('../pages/finance/transactions/index.vue' /* webpackChunkName: "pages/finance/transactions/index" */))
const _797aecee = () => interopDefault(import('../pages/iam/accounts/index.vue' /* webpackChunkName: "pages/iam/accounts/index" */))
const _da271fb0 = () => interopDefault(import('../pages/iam/customers/index.vue' /* webpackChunkName: "pages/iam/customers/index" */))
const _40652e85 = () => interopDefault(import('../pages/services/battery/index.vue' /* webpackChunkName: "pages/services/battery/index" */))
const _8612d43a = () => interopDefault(import('../pages/services/battery_swap/index.vue' /* webpackChunkName: "pages/services/battery_swap/index" */))
const _e7944fc6 = () => interopDefault(import('../pages/services/stations/index.vue' /* webpackChunkName: "pages/services/stations/index" */))
const _1a695f39 = () => interopDefault(import('../pages/ui/table.vue' /* webpackChunkName: "pages/ui/table" */))
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
    path: "/ui/table",
    component: _1a695f39,
    name: "ui-table"
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
