(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{662:function(e,t,r){"use strict";r.r(t);var o=r(30),d=(r(64),{name:"RecordUpdate",methods:{updateRecord:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=data.id,o={idNo:data.idNo,phone:data.phone,alt_phone:data.alt_phone,department:data.department,designation:data.designation,age:data.age,sex:data.sex,operation_area:data.operation_area},d=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+d,t.next=6,e.$axios.$post("v1/staff/account/update/".concat(r),o).then((function(t){if("false"==t.error){e.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Staff account details updated successfully"}),e.getRecords()}}));case 6:case"end":return t.stop()}}),t)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null},branches:{type:Array,default:[]}}}),n=r(12),component=Object(n.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.updateRecord(e.recordbyId)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("ID number")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.idNo,callback:function(t){e.$set(e.recordbyId,"idNo",t)},expression:"recordbyId.idNo"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Phone")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.phone,callback:function(t){e.$set(e.recordbyId,"phone",t)},expression:"recordbyId.phone"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v(" Alt Phone")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.alt_phone,callback:function(t){e.$set(e.recordbyId,"alt_phone",t)},expression:"recordbyId.alt_phone"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Branch")]),e._v(" "),t("b-form-select",{attrs:{options:e.branches,required:""},model:{value:e.recordbyId.operation_area,callback:function(t){e.$set(e.recordbyId,"operation_area",t)},expression:"recordbyId.operation_area"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Department")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.department,callback:function(t){e.$set(e.recordbyId,"department",t)},expression:"recordbyId.department"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Designation")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.designation,callback:function(t){e.$set(e.recordbyId,"designation",t)},expression:"recordbyId.designation"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("SEX")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.sex,callback:function(t){e.$set(e.recordbyId,"sex",t)},expression:"recordbyId.sex"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Age")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.age,callback:function(t){e.$set(e.recordbyId,"age",t)},expression:"recordbyId.age"}})],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton",{attrs:{title:"Update record"}}),e._v(" "),t("br")],1)])}),[],!1,null,null,null);t.default=component.exports}}]);