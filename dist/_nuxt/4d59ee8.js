(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1021:function(e,t,r){"use strict";r.r(t);var o=r(33),c=(r(72),{name:"CreateRecord",data:function(){return{create_record:{title:"",status:"",phone:"",head:""},status:["Active","Construction","Closed"]}},methods:{formSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={title:e.create_record.title,status:e.create_record.status,head:e.create_record.head,phone:e.create_record.phone},o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,t.next=5,e.$axios.$post("v1/battery/station/create",r).then((function(t){if(0==t.error){e.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Battery Station added successfully"}),e.getRecords(),e.create_record={}}t.username&&(e.username_err="A user with that member number already exists")}));case 5:case"end":return t.stop()}}),t)})))()}},props:{getRecords:{type:Function,default:null}}}),n=r(12),component=Object(n.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Battery Station")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.title,callback:function(t){e.$set(e.create_record,"title",t)},expression:"create_record.title"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Station Head")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.head,callback:function(t){e.$set(e.create_record,"head",t)},expression:"create_record.head"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Phone")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.phone,callback:function(t){e.$set(e.create_record,"phone",t)},expression:"create_record.phone"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Status")]),e._v(" "),t("b-form-select",{attrs:{options:e.status,required:""},model:{value:e.create_record.status,callback:function(t){e.$set(e.create_record,"status",t)},expression:"create_record.status"}})],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton"),e._v(" "),t("br")],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);