(window.webpackJsonp=window.webpackJsonp||[]).push([[128,6],{578:function(t,e,n){"use strict";n.r(e);var l={name:"BasePageHeading",props:{title:{type:String,description:"The title of page heading section"},subtitle:{type:String,description:"The subtitle of page heading section"}}},r=n(12),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-body-light"},[e("div",{staticClass:"dmk-content content-ful"},[t._t("default",(function(){return[t.title||t.$slots.extra?e("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center"},[t.title?e("h3",{staticClass:"flex-sm-fill h6 my-2"},[t._v("\n          "+t._s(t.title)+" "),t.subtitle?e("small",{staticClass:"d-block d-sm-inline-block mt-2 mt-sm-0 font-size-base font-w400 text-muted"},[t._v(t._s(t.subtitle))]):t._e()]):t._e(),t._v(" "),t.$slots.extra?e("div",{staticClass:"flex-sm-00-auto ml-sm-3"},[t._t("extra")],2):t._e()]):t._e()]}))],2)])}),[],!1,null,null,null);e.default=component.exports},871:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{form:{username:"",password:"",rememberMe:!1}}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){t.preventDefault(),this.form.username="",this.form.password="",this.form.rememberMe=!1}}},r=n(12),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("base-page-heading",{attrs:{title:"Block Forms",subtitle:"Easily integrated in your blocks."},scopedSlots:t._u([{key:"extra",fn:function(){return[e("b-breadcrumb",{staticClass:"breadcrumb-alt"},[e("b-breadcrumb-item",{attrs:{href:"javascript:void(0)"}},[t._v("Blocks")]),t._v(" "),e("b-breadcrumb-item",{attrs:{active:""}},[t._v("Forms")])],1)]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"content"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BasePageHeading:n(578).default})}}]);