import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e75bc91 = () => interopDefault(import('../pages/bakcode.vue' /* webpackChunkName: "pages/bakcode" */))
const _51798032 = () => interopDefault(import('../pages/bills/index.vue' /* webpackChunkName: "pages/bills/index" */))
const _3bcf1277 = () => interopDefault(import('../pages/dash_bak.vue' /* webpackChunkName: "pages/dash_bak" */))
const _7fb92d8c = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "pages/Dashboard" */))
const _f44f7a96 = () => interopDefault(import('../pages/http_common.js' /* webpackChunkName: "pages/http_common" */))
const _a0cfd01e = () => interopDefault(import('../pages/motorbike/index.vue' /* webpackChunkName: "pages/motorbike/index" */))
const _46df1152 = () => interopDefault(import('../pages/reports.vue' /* webpackChunkName: "pages/reports" */))
const _40a920bd = () => interopDefault(import('../pages/auth/bak.vue' /* webpackChunkName: "pages/auth/bak" */))
const _56dabf76 = () => interopDefault(import('../pages/auth/bak2.vue' /* webpackChunkName: "pages/auth/bak2" */))
const _7d670d2c = () => interopDefault(import('../pages/auth/Lock.vue' /* webpackChunkName: "pages/auth/Lock" */))
const _7736094c = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _54cb2537 = () => interopDefault(import('../pages/auth/SignUp.vue' /* webpackChunkName: "pages/auth/SignUp" */))
const _38d907b7 = () => interopDefault(import('../pages/bills/create.vue' /* webpackChunkName: "pages/bills/create" */))
const _9e7c3a44 = () => interopDefault(import('../pages/bills/statistics.vue' /* webpackChunkName: "pages/bills/statistics" */))
const _de43163a = () => interopDefault(import('../pages/bills/table.vue' /* webpackChunkName: "pages/bills/table" */))
const _54ce1df8 = () => interopDefault(import('../pages/bills/update.vue' /* webpackChunkName: "pages/bills/update" */))
const _57f7d1a0 = () => interopDefault(import('../pages/bills/view.vue' /* webpackChunkName: "pages/bills/view" */))
const _64101138 = () => interopDefault(import('../pages/finance/agentPayments/index.vue' /* webpackChunkName: "pages/finance/agentPayments/index" */))
const _fd149b54 = () => interopDefault(import('../pages/finance/mpesa/index.vue' /* webpackChunkName: "pages/finance/mpesa/index" */))
const _7f3aa4f6 = () => interopDefault(import('../pages/finance/transactions/index.vue' /* webpackChunkName: "pages/finance/transactions/index" */))
const _26507629 = () => interopDefault(import('../pages/home/dash_graph.vue' /* webpackChunkName: "pages/home/dash_graph" */))
const _e1e3917c = () => interopDefault(import('../pages/home/hero.vue' /* webpackChunkName: "pages/home/hero" */))
const _65b757eb = () => interopDefault(import('../pages/home/statistics.vue' /* webpackChunkName: "pages/home/statistics" */))
const _9f78e07e = () => interopDefault(import('../pages/home/trends/index.vue' /* webpackChunkName: "pages/home/trends/index" */))
const _9a976a0a = () => interopDefault(import('../pages/iam/accounts/index.vue' /* webpackChunkName: "pages/iam/accounts/index" */))
const _dc9a4614 = () => interopDefault(import('../pages/iam/customers/index.vue' /* webpackChunkName: "pages/iam/customers/index" */))
const _559f84c1 = () => interopDefault(import('../pages/iam/staff/index.vue' /* webpackChunkName: "pages/iam/staff/index" */))
const _36551f3a = () => interopDefault(import('../pages/iam/staff_accounts/index.vue' /* webpackChunkName: "pages/iam/staff_accounts/index" */))
const _6b1f30ed = () => interopDefault(import('../pages/motorbike/create.vue' /* webpackChunkName: "pages/motorbike/create" */))
const _69334ced = () => interopDefault(import('../pages/motorbike/table.vue' /* webpackChunkName: "pages/motorbike/table" */))
const _07df1a3a = () => interopDefault(import('../pages/motorbike/update.vue' /* webpackChunkName: "pages/motorbike/update" */))
const _bdfa5f54 = () => interopDefault(import('../pages/motorbike/view.vue' /* webpackChunkName: "pages/motorbike/view" */))
const _4bd1e2cd = () => interopDefault(import('../pages/notification/agents/index.vue' /* webpackChunkName: "pages/notification/agents/index" */))
const _95563212 = () => interopDefault(import('../pages/services/battery/index.vue' /* webpackChunkName: "pages/services/battery/index" */))
const _78bb569e = () => interopDefault(import('../pages/services/battery_swap/index.vue' /* webpackChunkName: "pages/services/battery_swap/index" */))
const _9585a42a = () => interopDefault(import('../pages/services/stations/index.vue' /* webpackChunkName: "pages/services/stations/index" */))
const _2c18ff3d = () => interopDefault(import('../pages/setup/branches/index.vue' /* webpackChunkName: "pages/setup/branches/index" */))
const _57a6e72b = () => interopDefault(import('../pages/ui/table.vue' /* webpackChunkName: "pages/ui/table" */))
const _45a66086 = () => interopDefault(import('../pages/finance/agentPayments/create.vue' /* webpackChunkName: "pages/finance/agentPayments/create" */))
const _1dab4634 = () => interopDefault(import('../pages/finance/agentPayments/table.vue' /* webpackChunkName: "pages/finance/agentPayments/table" */))
const _3b336c5a = () => interopDefault(import('../pages/finance/agentPayments/update.vue' /* webpackChunkName: "pages/finance/agentPayments/update" */))
const _c2d9dba2 = () => interopDefault(import('../pages/finance/agentPayments/view.vue' /* webpackChunkName: "pages/finance/agentPayments/view" */))
const _561639b0 = () => interopDefault(import('../pages/finance/mpesa/create.vue' /* webpackChunkName: "pages/finance/mpesa/create" */))
const _01363576 = () => interopDefault(import('../pages/finance/mpesa/pdf.vue' /* webpackChunkName: "pages/finance/mpesa/pdf" */))
const _489ec462 = () => interopDefault(import('../pages/finance/mpesa/statistics.vue' /* webpackChunkName: "pages/finance/mpesa/statistics" */))
const _3b10e752 = () => interopDefault(import('../pages/finance/mpesa/table.vue' /* webpackChunkName: "pages/finance/mpesa/table" */))
const _71b4cc75 = () => interopDefault(import('../pages/finance/mpesa/update.vue' /* webpackChunkName: "pages/finance/mpesa/update" */))
const _c0f4555e = () => interopDefault(import('../pages/finance/mpesa/view.vue' /* webpackChunkName: "pages/finance/mpesa/view" */))
const _73a74dd9 = () => interopDefault(import('../pages/finance/transactions/create.vue' /* webpackChunkName: "pages/finance/transactions/create" */))
const _79fde281 = () => interopDefault(import('../pages/finance/transactions/table.vue' /* webpackChunkName: "pages/finance/transactions/table" */))
const _10673726 = () => interopDefault(import('../pages/finance/transactions/update.vue' /* webpackChunkName: "pages/finance/transactions/update" */))
const _fef58f7c = () => interopDefault(import('../pages/finance/transactions/view.vue' /* webpackChunkName: "pages/finance/transactions/view" */))
const _7fe2b31d = () => interopDefault(import('../pages/home/trends/create.vue' /* webpackChunkName: "pages/home/trends/create" */))
const _69dec4bd = () => interopDefault(import('../pages/home/trends/table.vue' /* webpackChunkName: "pages/home/trends/table" */))
const _1ca29c6a = () => interopDefault(import('../pages/home/trends/update.vue' /* webpackChunkName: "pages/home/trends/update" */))
const _04211e86 = () => interopDefault(import('../pages/home/trends/view.vue' /* webpackChunkName: "pages/home/trends/view" */))
const _68ed41ba = () => interopDefault(import('../pages/iam/accounts/create.vue' /* webpackChunkName: "pages/iam/accounts/create" */))
const _6c4f7ff7 = () => interopDefault(import('../pages/iam/accounts/table.vue' /* webpackChunkName: "pages/iam/accounts/table" */))
const _68494870 = () => interopDefault(import('../pages/iam/accounts/update.vue' /* webpackChunkName: "pages/iam/accounts/update" */))
const _2921d7e8 = () => interopDefault(import('../pages/iam/accounts/view.vue' /* webpackChunkName: "pages/iam/accounts/view" */))
const _6745e6f0 = () => interopDefault(import('../pages/iam/customers/create.vue' /* webpackChunkName: "pages/iam/customers/create" */))
const _4b4e11f2 = () => interopDefault(import('../pages/iam/customers/table.vue' /* webpackChunkName: "pages/iam/customers/table" */))
const _691cf5d5 = () => interopDefault(import('../pages/iam/customers/update.vue' /* webpackChunkName: "pages/iam/customers/update" */))
const _13a8d6b1 = () => interopDefault(import('../pages/iam/customers/view.vue' /* webpackChunkName: "pages/iam/customers/view" */))
const _87f9da78 = () => interopDefault(import('../pages/iam/staff_accounts/create.vue' /* webpackChunkName: "pages/iam/staff_accounts/create" */))
const _201f5794 = () => interopDefault(import('../pages/iam/staff_accounts/table.vue' /* webpackChunkName: "pages/iam/staff_accounts/table" */))
const _58c2fc11 = () => interopDefault(import('../pages/iam/staff_accounts/update.vue' /* webpackChunkName: "pages/iam/staff_accounts/update" */))
const _f7598826 = () => interopDefault(import('../pages/iam/staff_accounts/view.vue' /* webpackChunkName: "pages/iam/staff_accounts/view" */))
const _f3f543c6 = () => interopDefault(import('../pages/iam/staff/create.vue' /* webpackChunkName: "pages/iam/staff/create" */))
const _0f3ab9bd = () => interopDefault(import('../pages/iam/staff/table.vue' /* webpackChunkName: "pages/iam/staff/table" */))
const _22c5476a = () => interopDefault(import('../pages/iam/staff/update.vue' /* webpackChunkName: "pages/iam/staff/update" */))
const _0e1aecf4 = () => interopDefault(import('../pages/iam/staff/view.vue' /* webpackChunkName: "pages/iam/staff/view" */))
const _3f85b780 = () => interopDefault(import('../pages/iam/users/profile.vue' /* webpackChunkName: "pages/iam/users/profile" */))
const _561ec191 = () => interopDefault(import('../pages/notification/agents/create.vue' /* webpackChunkName: "pages/notification/agents/create" */))
const _056d17c9 = () => interopDefault(import('../pages/notification/agents/table.vue' /* webpackChunkName: "pages/notification/agents/table" */))
const _1a42aa44 = () => interopDefault(import('../pages/notification/agents/update.vue' /* webpackChunkName: "pages/notification/agents/update" */))
const _4b3639fa = () => interopDefault(import('../pages/notification/agents/view.vue' /* webpackChunkName: "pages/notification/agents/view" */))
const _4f46e7a6 = () => interopDefault(import('../pages/services/battery_swap/create.vue' /* webpackChunkName: "pages/services/battery_swap/create" */))
const _6b4db291 = () => interopDefault(import('../pages/services/battery_swap/pdf.vue' /* webpackChunkName: "pages/services/battery_swap/pdf" */))
const _7d3d89ad = () => interopDefault(import('../pages/services/battery_swap/table.vue' /* webpackChunkName: "pages/services/battery_swap/table" */))
const _751c757a = () => interopDefault(import('../pages/services/battery_swap/update.vue' /* webpackChunkName: "pages/services/battery_swap/update" */))
const _785dfb96 = () => interopDefault(import('../pages/services/battery_swap/view.vue' /* webpackChunkName: "pages/services/battery_swap/view" */))
const _04b53065 = () => interopDefault(import('../pages/services/battery/barcode.vue' /* webpackChunkName: "pages/services/battery/barcode" */))
const _1cfc42a7 = () => interopDefault(import('../pages/services/battery/create.vue' /* webpackChunkName: "pages/services/battery/create" */))
const _6ecdcf23 = () => interopDefault(import('../pages/services/battery/filter.vue' /* webpackChunkName: "pages/services/battery/filter" */))
const _09ee25ce = () => interopDefault(import('../pages/services/battery/statistics.vue' /* webpackChunkName: "pages/services/battery/statistics" */))
const _6ef01bf3 = () => interopDefault(import('../pages/services/battery/table.vue' /* webpackChunkName: "pages/services/battery/table" */))
const _8c87a818 = () => interopDefault(import('../pages/services/battery/update.vue' /* webpackChunkName: "pages/services/battery/update" */))
const _0c8d0890 = () => interopDefault(import('../pages/services/battery/view.vue' /* webpackChunkName: "pages/services/battery/view" */))
const _1a1cda33 = () => interopDefault(import('../pages/services/stations/create.vue' /* webpackChunkName: "pages/services/stations/create" */))
const _6ed862e7 = () => interopDefault(import('../pages/services/stations/table.vue' /* webpackChunkName: "pages/services/stations/table" */))
const _92467900 = () => interopDefault(import('../pages/services/stations/update.vue' /* webpackChunkName: "pages/services/stations/update" */))
const _1873d9c8 = () => interopDefault(import('../pages/services/stations/view.vue' /* webpackChunkName: "pages/services/stations/view" */))
const _7ebb3321 = () => interopDefault(import('../pages/setup/branches/create.vue' /* webpackChunkName: "pages/setup/branches/create" */))
const _3497978e = () => interopDefault(import('../pages/setup/branches/table.vue' /* webpackChunkName: "pages/setup/branches/table" */))
const _1b7b1c6e = () => interopDefault(import('../pages/setup/branches/update.vue' /* webpackChunkName: "pages/setup/branches/update" */))
const _1061cf8a = () => interopDefault(import('../pages/setup/branches/view.vue' /* webpackChunkName: "pages/setup/branches/view" */))
const _2183e04b = () => interopDefault(import('../pages/ui/blocks/Buttons.vue' /* webpackChunkName: "pages/ui/blocks/Buttons" */))
const _4e5aaa79 = () => interopDefault(import('../pages/ui/blocks/Forms.vue' /* webpackChunkName: "pages/ui/blocks/Forms" */))
const _6fa4ebe1 = () => interopDefault(import('../pages/ui/blocks/Themed.vue' /* webpackChunkName: "pages/ui/blocks/Themed" */))
const _63a3a62c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3e75bc91,
    name: "bakcode"
  }, {
    path: "/bills",
    component: _51798032,
    name: "bills"
  }, {
    path: "/dash_bak",
    component: _3bcf1277,
    name: "dash_bak"
  }, {
    path: "/Dashboard",
    component: _7fb92d8c,
    name: "Dashboard"
  }, {
    path: "/http_common",
    component: _f44f7a96,
    name: "http_common"
  }, {
    path: "/motorbike",
    component: _a0cfd01e,
    name: "motorbike"
  }, {
    path: "/reports",
    component: _46df1152,
    name: "reports"
  }, {
    path: "/auth/bak",
    component: _40a920bd,
    name: "auth-bak"
  }, {
    path: "/auth/bak2",
    component: _56dabf76,
    name: "auth-bak2"
  }, {
    path: "/auth/Lock",
    component: _7d670d2c,
    name: "auth-Lock"
  }, {
    path: "/auth/login",
    component: _7736094c,
    name: "auth-login"
  }, {
    path: "/auth/SignUp",
    component: _54cb2537,
    name: "auth-SignUp"
  }, {
    path: "/bills/create",
    component: _38d907b7,
    name: "bills-create"
  }, {
    path: "/bills/statistics",
    component: _9e7c3a44,
    name: "bills-statistics"
  }, {
    path: "/bills/table",
    component: _de43163a,
    name: "bills-table"
  }, {
    path: "/bills/update",
    component: _54ce1df8,
    name: "bills-update"
  }, {
    path: "/bills/view",
    component: _57f7d1a0,
    name: "bills-view"
  }, {
    path: "/finance/agentPayments",
    component: _64101138,
    name: "finance-agentPayments"
  }, {
    path: "/finance/mpesa",
    component: _fd149b54,
    name: "finance-mpesa"
  }, {
    path: "/finance/transactions",
    component: _7f3aa4f6,
    name: "finance-transactions"
  }, {
    path: "/home/dash_graph",
    component: _26507629,
    name: "home-dash_graph"
  }, {
    path: "/home/hero",
    component: _e1e3917c,
    name: "home-hero"
  }, {
    path: "/home/statistics",
    component: _65b757eb,
    name: "home-statistics"
  }, {
    path: "/home/trends",
    component: _9f78e07e,
    name: "home-trends"
  }, {
    path: "/iam/accounts",
    component: _9a976a0a,
    name: "iam-accounts"
  }, {
    path: "/iam/customers",
    component: _dc9a4614,
    name: "iam-customers"
  }, {
    path: "/iam/staff",
    component: _559f84c1,
    name: "iam-staff"
  }, {
    path: "/iam/staff_accounts",
    component: _36551f3a,
    name: "iam-staff_accounts"
  }, {
    path: "/motorbike/create",
    component: _6b1f30ed,
    name: "motorbike-create"
  }, {
    path: "/motorbike/table",
    component: _69334ced,
    name: "motorbike-table"
  }, {
    path: "/motorbike/update",
    component: _07df1a3a,
    name: "motorbike-update"
  }, {
    path: "/motorbike/view",
    component: _bdfa5f54,
    name: "motorbike-view"
  }, {
    path: "/notification/agents",
    component: _4bd1e2cd,
    name: "notification-agents"
  }, {
    path: "/services/battery",
    component: _95563212,
    name: "services-battery"
  }, {
    path: "/services/battery_swap",
    component: _78bb569e,
    name: "services-battery_swap"
  }, {
    path: "/services/stations",
    component: _9585a42a,
    name: "services-stations"
  }, {
    path: "/setup/branches",
    component: _2c18ff3d,
    name: "setup-branches"
  }, {
    path: "/ui/table",
    component: _57a6e72b,
    name: "ui-table"
  }, {
    path: "/finance/agentPayments/create",
    component: _45a66086,
    name: "finance-agentPayments-create"
  }, {
    path: "/finance/agentPayments/table",
    component: _1dab4634,
    name: "finance-agentPayments-table"
  }, {
    path: "/finance/agentPayments/update",
    component: _3b336c5a,
    name: "finance-agentPayments-update"
  }, {
    path: "/finance/agentPayments/view",
    component: _c2d9dba2,
    name: "finance-agentPayments-view"
  }, {
    path: "/finance/mpesa/create",
    component: _561639b0,
    name: "finance-mpesa-create"
  }, {
    path: "/finance/mpesa/pdf",
    component: _01363576,
    name: "finance-mpesa-pdf"
  }, {
    path: "/finance/mpesa/statistics",
    component: _489ec462,
    name: "finance-mpesa-statistics"
  }, {
    path: "/finance/mpesa/table",
    component: _3b10e752,
    name: "finance-mpesa-table"
  }, {
    path: "/finance/mpesa/update",
    component: _71b4cc75,
    name: "finance-mpesa-update"
  }, {
    path: "/finance/mpesa/view",
    component: _c0f4555e,
    name: "finance-mpesa-view"
  }, {
    path: "/finance/transactions/create",
    component: _73a74dd9,
    name: "finance-transactions-create"
  }, {
    path: "/finance/transactions/table",
    component: _79fde281,
    name: "finance-transactions-table"
  }, {
    path: "/finance/transactions/update",
    component: _10673726,
    name: "finance-transactions-update"
  }, {
    path: "/finance/transactions/view",
    component: _fef58f7c,
    name: "finance-transactions-view"
  }, {
    path: "/home/trends/create",
    component: _7fe2b31d,
    name: "home-trends-create"
  }, {
    path: "/home/trends/table",
    component: _69dec4bd,
    name: "home-trends-table"
  }, {
    path: "/home/trends/update",
    component: _1ca29c6a,
    name: "home-trends-update"
  }, {
    path: "/home/trends/view",
    component: _04211e86,
    name: "home-trends-view"
  }, {
    path: "/iam/accounts/create",
    component: _68ed41ba,
    name: "iam-accounts-create"
  }, {
    path: "/iam/accounts/table",
    component: _6c4f7ff7,
    name: "iam-accounts-table"
  }, {
    path: "/iam/accounts/update",
    component: _68494870,
    name: "iam-accounts-update"
  }, {
    path: "/iam/accounts/view",
    component: _2921d7e8,
    name: "iam-accounts-view"
  }, {
    path: "/iam/customers/create",
    component: _6745e6f0,
    name: "iam-customers-create"
  }, {
    path: "/iam/customers/table",
    component: _4b4e11f2,
    name: "iam-customers-table"
  }, {
    path: "/iam/customers/update",
    component: _691cf5d5,
    name: "iam-customers-update"
  }, {
    path: "/iam/customers/view",
    component: _13a8d6b1,
    name: "iam-customers-view"
  }, {
    path: "/iam/staff_accounts/create",
    component: _87f9da78,
    name: "iam-staff_accounts-create"
  }, {
    path: "/iam/staff_accounts/table",
    component: _201f5794,
    name: "iam-staff_accounts-table"
  }, {
    path: "/iam/staff_accounts/update",
    component: _58c2fc11,
    name: "iam-staff_accounts-update"
  }, {
    path: "/iam/staff_accounts/view",
    component: _f7598826,
    name: "iam-staff_accounts-view"
  }, {
    path: "/iam/staff/create",
    component: _f3f543c6,
    name: "iam-staff-create"
  }, {
    path: "/iam/staff/table",
    component: _0f3ab9bd,
    name: "iam-staff-table"
  }, {
    path: "/iam/staff/update",
    component: _22c5476a,
    name: "iam-staff-update"
  }, {
    path: "/iam/staff/view",
    component: _0e1aecf4,
    name: "iam-staff-view"
  }, {
    path: "/iam/users/profile",
    component: _3f85b780,
    name: "iam-users-profile"
  }, {
    path: "/notification/agents/create",
    component: _561ec191,
    name: "notification-agents-create"
  }, {
    path: "/notification/agents/table",
    component: _056d17c9,
    name: "notification-agents-table"
  }, {
    path: "/notification/agents/update",
    component: _1a42aa44,
    name: "notification-agents-update"
  }, {
    path: "/notification/agents/view",
    component: _4b3639fa,
    name: "notification-agents-view"
  }, {
    path: "/services/battery_swap/create",
    component: _4f46e7a6,
    name: "services-battery_swap-create"
  }, {
    path: "/services/battery_swap/pdf",
    component: _6b4db291,
    name: "services-battery_swap-pdf"
  }, {
    path: "/services/battery_swap/table",
    component: _7d3d89ad,
    name: "services-battery_swap-table"
  }, {
    path: "/services/battery_swap/update",
    component: _751c757a,
    name: "services-battery_swap-update"
  }, {
    path: "/services/battery_swap/view",
    component: _785dfb96,
    name: "services-battery_swap-view"
  }, {
    path: "/services/battery/barcode",
    component: _04b53065,
    name: "services-battery-barcode"
  }, {
    path: "/services/battery/create",
    component: _1cfc42a7,
    name: "services-battery-create"
  }, {
    path: "/services/battery/filter",
    component: _6ecdcf23,
    name: "services-battery-filter"
  }, {
    path: "/services/battery/statistics",
    component: _09ee25ce,
    name: "services-battery-statistics"
  }, {
    path: "/services/battery/table",
    component: _6ef01bf3,
    name: "services-battery-table"
  }, {
    path: "/services/battery/update",
    component: _8c87a818,
    name: "services-battery-update"
  }, {
    path: "/services/battery/view",
    component: _0c8d0890,
    name: "services-battery-view"
  }, {
    path: "/services/stations/create",
    component: _1a1cda33,
    name: "services-stations-create"
  }, {
    path: "/services/stations/table",
    component: _6ed862e7,
    name: "services-stations-table"
  }, {
    path: "/services/stations/update",
    component: _92467900,
    name: "services-stations-update"
  }, {
    path: "/services/stations/view",
    component: _1873d9c8,
    name: "services-stations-view"
  }, {
    path: "/setup/branches/create",
    component: _7ebb3321,
    name: "setup-branches-create"
  }, {
    path: "/setup/branches/table",
    component: _3497978e,
    name: "setup-branches-table"
  }, {
    path: "/setup/branches/update",
    component: _1b7b1c6e,
    name: "setup-branches-update"
  }, {
    path: "/setup/branches/view",
    component: _1061cf8a,
    name: "setup-branches-view"
  }, {
    path: "/ui/blocks/Buttons",
    component: _2183e04b,
    name: "ui-blocks-Buttons"
  }, {
    path: "/ui/blocks/Forms",
    component: _4e5aaa79,
    name: "ui-blocks-Forms"
  }, {
    path: "/ui/blocks/Themed",
    component: _6fa4ebe1,
    name: "ui-blocks-Themed"
  }, {
    path: "/",
    component: _63a3a62c,
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
