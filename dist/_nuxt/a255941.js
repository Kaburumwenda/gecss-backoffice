(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1222:function(e,r,t){"use strict";t.r(r);var o=t(33),n=(t(72),{name:"CreateRecord",data:function(){return{create_record:{bike_no:"",battery_code1:""},bike_err:"",sb_loading:!1}},methods:{formSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={bike_no:e.create_record.bike_no,battery_code1:e.create_record.battery_code1},o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,e.sb_loading=!0,r.next=6,e.$axios.$post("v1/battery/swap/create",t,{headers:{Authorization:"Token ".concat(o)}}).then((function(r){if(0==r.error){e.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Battery Issued successfully"}),e.getRecords(),e.create_record={}}1==r.error&&(e.bike_err="Motorbike number plate not recognized. Please try again later")}));case 6:e.sb_loading=!1;case 7:case"end":return r.stop()}}),r)})))()}},props:{getRecords:{type:Function,default:null}}}),c=t(12),component=Object(c.a)(n,(function(){var e=this,r=e._self._c;return r("div",[r("b-form",{on:{submit:function(r){return r.preventDefault(),e.formSubmit.apply(null,arguments)}}},[r("div",{attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-expand@m"},[r("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Bike No.")]),e._v(" "),r("b-form-input",{attrs:{required:""},model:{value:e.create_record.bike_no,callback:function(r){e.$set(e.create_record,"bike_no",r)},expression:"create_record.bike_no"}}),e._v(" "),e.bike_err?r("div",{staticStyle:{color:"red"}},[e._v("\n              "+e._s(e.bike_err)+"\n            ")]):e._e()],1)]),e._v(" "),r("br"),e._v(" "),r("div",{attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-expand@m"},[r("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Battery Code")]),e._v(" "),r("b-form-input",{attrs:{required:""},model:{value:e.create_record.battery_code1,callback:function(r){e.$set(e.create_record,"battery_code1",r)},expression:"create_record.battery_code1"}})],1)]),e._v(" "),r("br"),e._v(" "),r("SbButton",{attrs:{sbloading:e.sb_loading}}),e._v(" "),r("br")],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);