(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{951:function(t,e,r){"use strict";r.r(e);var o=r(33),n=(r(72),{name:"RecordUpdate",methods:{data:function(){return{status_m:["Gecss","Sold","Leased"],condition_m:["New","Retrofitted"]}},updateRecord:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=data.id,o={numberplate:data.numberplate,condition:data.condition,status:data.status},n=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+n,e.next=6,t.$axios.$post("v1/motorbike/update/".concat(r),o).then((function(e){if("false"==e.error){t.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Motorbike details updated successfully"}),t.getRecords()}}));case 6:case"end":return e.stop()}}),e)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null}}}),d=r(12),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateRecord(t.recordbyId)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Bike No. Plate")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.numberplate,callback:function(e){t.$set(t.recordbyId,"numberplate",e)},expression:"recordbyId.numberplate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Status")]),t._v(" "),e("b-form-select",{attrs:{options:t.status_m},model:{value:t.recordbyId.status,callback:function(e){t.$set(t.recordbyId,"status",e)},expression:"recordbyId.status"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Condition")]),t._v(" "),e("b-form-select",{attrs:{options:t.condition_m},model:{value:t.recordbyId.condition,callback:function(e){t.$set(t.recordbyId,"condition",e)},expression:"recordbyId.condition"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{title:"Update record"}}),t._v(" "),e("br")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);