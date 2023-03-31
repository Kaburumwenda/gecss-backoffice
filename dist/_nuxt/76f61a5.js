(window.webpackJsonp=window.webpackJsonp||[]).push([[101,100,102,103,104],{619:function(t,e,r){var content=r(777);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("242b312d",content,!0,{sourceMap:!1})},682:function(t,e,r){"use strict";r.r(e);var o={name:"RecordTable",props:{records:{type:Array,default:[]}}},n=r(12),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("DcTable",{scopedSlots:t._u([{key:"theader",fn:function(){return[e("th",{staticStyle:{"padding-left":"10px !important"}},[t._v("#")]),t._v(" "),e("th",[t._v("Battery Stations")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Head")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Phone")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Action")])]},proxy:!0},{key:"tbody",fn:function(){return[t.records.length?t._e():e("tr",[e("td"),e("td"),t._v(" "),e("td",[e("span",{staticStyle:{color:"purple"}},[t._v(" No records available ")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),t._t("default")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},683:function(t,e,r){"use strict";r.r(e);var o=r(30),n=(r(64),{name:"CreateRecord",data:function(){return{create_record:{title:"",status:"",phone:"",head:""},status:["Active","Construction","Closed"]}},methods:{formSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={title:t.create_record.title,status:t.create_record.status,head:t.create_record.head,phone:t.create_record.phone},o=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+o,e.next=5,t.$axios.$post("v1/battery/station/create",r).then((function(e){if(0==e.error){t.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Battery Station added successfully"}),t.getRecords(),t.create_record={}}e.username&&(t.username_err="A user with that member number already exists")}));case 5:case"end":return e.stop()}}),e)})))()}},props:{getRecords:{type:Function,default:null}}}),c=r(12),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Battery Station")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.create_record.title,callback:function(e){t.$set(t.create_record,"title",e)},expression:"create_record.title"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Station Head")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.create_record.head,callback:function(e){t.$set(t.create_record,"head",e)},expression:"create_record.head"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Phone")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.create_record.phone,callback:function(e){t.$set(t.create_record,"phone",e)},expression:"create_record.phone"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Status")]),t._v(" "),e("b-form-select",{attrs:{options:t.status,required:""},model:{value:t.create_record.status,callback:function(e){t.$set(t.create_record,"status",e)},expression:"create_record.status"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton"),t._v(" "),e("br")],1)],1)}),[],!1,null,null,null);e.default=component.exports},684:function(t,e,r){"use strict";r.r(e);var o={name:"RecordView",props:{recordbyId:{type:Object,default:null}}},n=r(12),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Battery Station")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.title,callback:function(e){t.$set(t.recordbyId,"title",e)},expression:"recordbyId.title"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Head")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.head,callback:function(e){t.$set(t.recordbyId,"head",e)},expression:"recordbyId.head"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Phone")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.phone,callback:function(e){t.$set(t.recordbyId,"phone",e)},expression:"recordbyId.phone"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Status")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.status,callback:function(e){t.$set(t.recordbyId,"status",e)},expression:"recordbyId.status"}})],1)]),t._v(" "),e("br")])}),[],!1,null,null,null);e.default=component.exports},685:function(t,e,r){"use strict";r.r(e);var o=r(30),n=(r(64),{name:"RecordUpdate",methods:{data:function(){return{status:["Charging","Issued"],condition:["Stable","Medium","Unstable"]}},updateRecord:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=data.id,o={title:data.title,head:data.head,phone:data.phone,status:data.status},n=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+n,e.next=6,t.$axios.$post("v1/battery/station/update/".concat(r),o).then((function(e){if("false"==e.error){t.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Battery Station updated successfully"}),t.getRecords()}}));case 6:case"end":return e.stop()}}),e)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null}}}),c=r(12),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateRecord(t.recordbyId)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Battery Station")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.title,callback:function(e){t.$set(t.recordbyId,"title",e)},expression:"recordbyId.title"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Head")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.head,callback:function(e){t.$set(t.recordbyId,"head",e)},expression:"recordbyId.head"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v(" Phone ")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.phone,callback:function(e){t.$set(t.recordbyId,"phone",e)},expression:"recordbyId.phone"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Status")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.status,callback:function(e){t.$set(t.recordbyId,"status",e)},expression:"recordbyId.status"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{title:"Update record"}}),t._v(" "),e("br")],1)])}),[],!1,null,null,null);e.default=component.exports},776:function(t,e,r){"use strict";r(619)},777:function(t,e,r){var o=r(37)(!1);o.push([t.i,"\n.status-btn[data-v-fe66d82a]{\n\tborder-radius: 0px !important;\n\tpadding: 0px 2px 0px 2px !important;\n\tfont-size: 12px !important;\n\twidth: 80px !important;\n}\n",""]),t.exports=o},817:function(t,e,r){"use strict";r.r(e);r(16),r(3),r(2),r(11),r(156);var o=r(30),n=(r(45),r(64),r(203)),table=r(682),c=r(683),view=r(684),d=r(685),l={layout:"default_common",components:{RecordTable:table.default,Button:n.default,CreateRecord:c.default,RecordView:view.default,RecordUpdate:d.default},data:function(){return{records:[],recordbyId:{},status:"9",record_spinner:!1,search:{queary:"",pageSearch:null,pageError:!1},pagination:{rows:null,perPage:null,rowperPage:null,currentPage:null,countOnPage:null,totalPages:null,fromCount:null,toCount:null},paginationLinks:{self:"",last:"",first:"",prev:""},global_pagination:{},perms:{perms_add:"",perms_view:"",perms_update:"",perms_delete:"",perms_restore:"",perms_status:""}}},mounted:function(){this.getRecordOnMount(),this.getPerms()},methods:{setLoadingTrue:function(){this.$refs.blockLoadingRefresh.stateLoading()},setLoadingFalse:function(){this.$refs.blockLoadingRefresh.stateNormal()},getPerms:function(){this.perms.perms_add="1",this.perms.perms_view="1",this.perms.perms_update="1",this.perms.perms_delete="1",this.perms.perms_restore="1",this.perms.perms_status="1"},getRecordOnMount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/battery/stations").then((function(e){t.records=e,console.warn(t.records)}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecords:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/battery/stations").then((function(e){t.records=e}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecordById:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$bvModal.show("dmk-update-record"),e.record_spinner=!0,o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,r.next=6,e.$axios.$get("v1/battery/station/".concat(t)).then((function(t){e.recordbyId=t,console.warn(t)}));case 6:e.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},viewRecord:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$bvModal.show("dmk-view-record"),e.record_spinner=!0,o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,r.next=6,e.$axios.$get("v1/battery/station/".concat(t)).then((function(t){e.recordbyId=t}));case 6:e.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},deleteRecord:function(t){var e=this,r=localStorage.getItem("token");this.$axios.defaults.headers.common.Authorization="Token "+r,Swal.fire({icon:"warning",title:"Do you want to delete selected record?",showCancelButton:!0,confirmButtonText:"Delete"}).then((function(r){r.isConfirmed?e.$axios.$delete("v1/battery/station/delete/".concat(t)).then((function(t){if("false"==t.error){Swal.fire("Battery Station deleted successfully","","success"),e.getRecords()}})):r.isDenied&&Swal.fire("Changes are not saved","","info")}))},searchRecords:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),""==t.search.queary&&t.getRecordOnMount(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=6,t.$axios.$get("v1/battery/statiton/search/".concat(t.search.queary)).then((function(e){t.records=e}));case 6:t.setLoadingFalse();case 7:case"end":return e.stop()}}),e)})))()},resetRecords:function(t){var e=this;this.$refs[t].stateLoading(),this.search={},this.getRecordOnMount(),setTimeout((function(){e.$refs[t].stateNormal()}),2e3)},addRecord:function(){this.$bvModal.show("add-record")}},head:function(){return{title:"Gecss | Battery Stations"}}},v=(r(776),r(12)),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content"},[e("base-block",{ref:"blockLoadingRefresh",staticClass:"block-mode-loading-refresh",attrs:{rounded:"",title:"Battery Stations","header-bg":"","btn-option-fullscreen":""},scopedSlots:t._u([{key:"options",fn:function(){return[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Refresh"},on:{click:function(e){return t.resetRecords("blockLoadingRefresh")}}},[e("i",{staticClass:"si si-refresh"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Add new record"},on:{click:t.addRecord}},[e("i",{staticClass:"si si-plus"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Filter records"}},[e("i",{staticClass:"fa fa-filter"})])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"dmk-search-td-con"},[e("RowsFilter",{attrs:{rowsPerPage:t.rowsPerPage}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.pagination.rowperPage,expression:"pagination.rowperPage"}],staticStyle:{"text-align":"center"},attrs:{id:"rowsperPage"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pagination,"rowperPage",e.target.multiple?r:r[0])},function(e){return t.rowsPerPage()}]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),e("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),e("option",{attrs:{value:"100"}},[t._v("100")])])]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("form",{attrs:{method:"get"},on:{submit:function(e){return e.preventDefault(),t.searchRecords()}}},[e("div",{staticClass:"dmk-search-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search.queary,expression:"search.queary"}],staticClass:"form-control dmk-search-input",attrs:{type:"text",placeholder:"search "},domProps:{value:t.search.queary},on:{input:function(e){e.target.composing||t.$set(t.search,"queary",e.target.value)}}}),t._v(" "),e("button",{staticClass:"dmk-search-btn",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])],1),t._v(" "),e("RecordTable",{attrs:{records:t.records}},t._l(t.records,(function(r,o){return e("tr",{key:r.id,attrs:{id:"dmk-td-items"}},[e("td",{staticClass:"td-1st-nth"},[t._v(" "+t._s(o+1)+" ")]),t._v(" "),e("td",[t._v(t._s(r.title))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(r.head))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(r.phone))]),t._v(" "),e("td",{staticClass:"text-center"},["Active"==r.status?e("button",{staticClass:"btn status-btn btn-success",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")]):"Construction"==r.status?e("button",{staticClass:"btn status-btn btn-primary",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")]):"Closed"==r.status?e("button",{staticClass:"btn status-btn btn-warning",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")]):e("button",{staticClass:"btn status-btn btn-secondary",attrs:{type:"button","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t")])]),t._v(" "),e("td",[e("EDropdown",{attrs:{statusCode:r.status,Id:r.id,deleteRecord:t.deleteRecord,restoreRecord:t.restoreRecord,getRecordById:t.viewRecord,getRecordUpdateById:t.getRecordById,perms_view:t.perms.perms_view,perms_update:t.perms.perms_update,perms_delete:t.perms.perms_delete,perms_restore:t.perms.perms_restore}})],1)])})),0),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{}),t._v(" "),e("DcPagination",{attrs:{countOnPage:this.pagination.countOnPage,rows:this.pagination.rows,fromCount:this.pagination.fromCount,toCount:this.pagination.toCount,rowperPage:this.pagination.rowperPage,currentPage:this.pagination.currentPage,totalPages:this.pagination.totalPages,previousPage:t.previousPage,nextPage:t.nextPage,searchPageNo:t.searchPageNo}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pagination.currentPage,expression:"pagination.currentPage"}],staticClass:"dmk-searpage-input",staticStyle:{"text-align":"center"},attrs:{type:"number"},domProps:{value:t.pagination.currentPage},on:{input:function(e){e.target.composing||t.$set(t.pagination,"currentPage",e.target.value)}}})])],1)],1),t._v(" "),e("OuModal",{attrs:{mdId:"add-record",size:"md",title:"Add Battery Station"}},[e("CreateRecord",{attrs:{getRecords:t.getRecords}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"dmk-view-record",size:"md",title:"Battery Station Details",modalSpinner:t.record_spinner}},[e("RecordView",{attrs:{recordbyId:t.recordbyId}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"dmk-update-record",size:"md",title:"Update Battery Station Details",modalSpinner:t.record_spinner}},[e("RecordUpdate",{attrs:{recordbyId:t.recordbyId,getRecords:t.getRecords}})],1)],1)])}),[],!1,null,"fe66d82a",null);e.default=component.exports;installComponents(component,{BaseBlock:r(302).default})}}]);