(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{668:function(e,t,r){"use strict";r.r(t);var n=r(30),o=(r(64),{name:"RecordUpdate",data:function(){return{purpose:["Daily Deposit","Swap Battery"],status:["Paid","Unpaid","Processing","Rejected"]}},methods:{updateRecord:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=data.id,n={billRefNumber:data.billRefNumber,transAmount:data.transAmount},o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,t.next=6,e.$axios.$post("v1/mpesa/update/".concat(r),n).then((function(t){if("false"==t.error){e.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Mpesa transaction updated successfully"}),e.getRecords()}}));case 6:case"end":return t.stop()}}),t)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null}}}),c=r(12),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.updateRecord(e.recordbyId)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Transaction Reference.")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.billRefNumber,callback:function(t){e.$set(e.recordbyId,"billRefNumber",t)},expression:"recordbyId.billRefNumber"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v(" Transaction Amount.")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.transAmount,callback:function(t){e.$set(e.recordbyId,"transAmount",t)},expression:"recordbyId.transAmount"}})],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton",{attrs:{title:"Update record"}}),e._v(" "),t("br")],1)])}),[],!1,null,null,null);t.default=component.exports}}]);