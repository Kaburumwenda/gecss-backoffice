(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{672:function(e,t,r){"use strict";r.r(t);var o=r(30),c=(r(64),{name:"CreateRecord",data:function(){return{create_record:{condition:"",status:"",code:"",location:""},status:["Charging","Charged","Issued","Depleted"],condition:["Stable","Medium","Unstable","Depleted"],sb_loading:!1}},methods:{formSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={condition:e.create_record.condition,status:e.create_record.status,location:e.create_record.location,code:e.create_record.code},o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,e.sb_loading=!0,t.next=6,e.$axios.$post("v1/battery/create",r).then((function(t){if(0==t.error){e.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Battery added successfully"}),e.getRecords(),e.create_record={}}t.username&&(e.username_err="A user with that member number already exists")}));case 6:e.sb_loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},props:{getRecords:{type:Function,default:null},branches:{type:Array,default:[]}}}),n=r(12),component=Object(n.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Battery Code")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.code,callback:function(t){e.$set(e.create_record,"code",t)},expression:"create_record.code"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Branch")]),e._v(" "),e.branches.length>0?t("b-form-select",{attrs:{options:e.branches,required:""},model:{value:e.create_record.location,callback:function(t){e.$set(e.create_record,"location",t)},expression:"create_record.location"}}):t("b-form-select",{attrs:{disabled:"",required:""}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Status")]),e._v(" "),t("b-form-select",{attrs:{options:e.status,required:""},model:{value:e.create_record.status,callback:function(t){e.$set(e.create_record,"status",t)},expression:"create_record.status"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Condition")]),e._v(" "),t("b-form-select",{attrs:{options:e.condition,required:""},model:{value:e.create_record.condition,callback:function(t){e.$set(e.create_record,"condition",t)},expression:"create_record.condition"}})],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton",{attrs:{sb_loading:e.sb_loading}}),e._v(" "),t("br")],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);