(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{616:function(e,t,r){"use strict";r.r(t);var o=r(29),d=(r(65),{name:"RecordUpdate",methods:{updateRecord:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=data.id,o={mem_no:data.mem_no,bike_no:data.bike_no,amount:data.amount,battery_code1:data.battery_code1},d=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+d,t.next=6,e.$axios.$post("v1/battery/swap/update/".concat(r),o).then((function(t){if("false"==t.error){e.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Battery record updated successfully"}),e.getRecords()}}));case 6:case"end":return t.stop()}}),t)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null}}}),n=r(13),component=Object(n.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.updateRecord(e.recordbyId)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Member No.")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.mem_no,callback:function(t){e.$set(e.recordbyId,"mem_no",t)},expression:"recordbyId.mem_no"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Bike No.")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.bike_no,callback:function(t){e.$set(e.recordbyId,"bike_no",t)},expression:"recordbyId.bike_no"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v(" Battery ")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.battery_code1,callback:function(t){e.$set(e.recordbyId,"battery_code1",t)},expression:"recordbyId.battery_code1"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v(" Amount ")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.amount,callback:function(t){e.$set(e.recordbyId,"amount",t)},expression:"recordbyId.amount"}})],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton",{attrs:{title:"Update record"}}),e._v(" "),t("br")],1)])}),[],!1,null,null,null);t.default=component.exports}}]);