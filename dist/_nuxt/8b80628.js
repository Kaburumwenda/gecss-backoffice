(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{590:function(e,t,r){"use strict";r.r(t);var o=r(29),c=(r(65),{name:"CreateRecord",data:function(){return{create_record:{memNo:"",amount:"",purpose:"Daily Deposit",status:"Paid"},purpose:["Daily Deposit","Swap Battery"],status:["Paid","Unpaid","Processing","Rejected"]}},methods:{formSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={memNo:e.create_record.memNo,amount:e.create_record.amount,purpose:e.create_record.purpose,status:e.create_record.status},o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,t.next=5,e.$axios.$post("v1/transaction/create",r).then((function(t){if(0==t.error){e.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Transaction saved successfully"}),e.getRecords(),e.create_record={}}t.username&&(e.username_err="A user with that member number already exists")}));case 5:case"end":return t.stop()}}),t)})))()}},props:{getRecords:{type:Function,default:null}}}),n=r(12),component=Object(n.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Member No.")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.memNo,callback:function(t){e.$set(e.create_record,"memNo",t)},expression:"create_record.memNo"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Amount")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.amount,callback:function(t){e.$set(e.create_record,"amount",t)},expression:"create_record.amount"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Purpose")]),e._v(" "),t("b-form-select",{attrs:{options:e.purpose,required:""},model:{value:e.create_record.purpose,callback:function(t){e.$set(e.create_record,"purpose",t)},expression:"create_record.purpose"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Status")]),e._v(" "),t("b-form-select",{attrs:{options:e.status,required:""},model:{value:e.create_record.status,callback:function(t){e.$set(e.create_record,"status",t)},expression:"create_record.status"}})],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton"),e._v(" "),t("br")],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);