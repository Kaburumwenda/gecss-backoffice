(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1047:function(t,e,l){"use strict";l.r(e);var o=l(33),n=(l(72),{name:"SwapCounts",data:function(){return{statistics:{}}},mounted:function(){this.getTotals()},methods:{getTotals:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("v1/reports/battery_statistics/counts").then((function(e){t.statistics=e}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=l(12),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",{attrs:{cols:"6",md:"2",lg:"2",xl:"2"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            Today\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.today>0?e("span",[t._v(" "+t._s(t.statistics.today.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-success-light rounded-lg"})])])],1),t._v(" "),e("b-col",{attrs:{cols:"6",md:"2",lg:"2",xl:"2"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            This Week\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.week>0?e("span",[t._v(" "+t._s(t.statistics.week.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),e("b-col",{attrs:{cols:"6",md:"2",lg:"2",xl:"2"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            This Month\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.month>0?e("span",[t._v(" "+t._s(t.statistics.month.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-primary-light rounded-lg"})])])],1),t._v(" "),e("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            This Year\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.year>0?e("span",[t._v(" "+t._s(t.statistics.year.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-danger-light rounded-lg"})])])],1),t._v(" "),e("b-col",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            All\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.total>0?e("span",[t._v(" "+t._s(t.statistics.total.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-success-light rounded-lg"})])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseBlock:l(407).default})}}]);