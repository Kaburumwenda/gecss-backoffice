(window.webpackJsonp=window.webpackJsonp||[]).push([[63,62,64,65,66],{655:function(e,t,r){"use strict";r.r(t);var o={name:"RecordTable",props:{records:{type:Array,default:[]}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("DcTable",{scopedSlots:e._u([{key:"theader",fn:function(){return[t("th",{staticStyle:{"padding-left":"10px !important"}},[e._v("#")]),e._v(" "),t("th",[e._v("Username")]),e._v(" "),t("th",[e._v("Firstname")]),e._v(" "),t("th",[e._v("Lastname")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("Active")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("Staff Status")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("Action")])]},proxy:!0},{key:"tbody",fn:function(){return[e.records.length?e._e():t("tr",[t("td"),t("td"),e._v(" "),t("td",[t("span",{staticStyle:{color:"purple"}},[e._v(" No records available ")])]),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),e._t("default")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports},656:function(e,t,r){"use strict";r.r(t);var o=r(30),n=(r(64),{name:"CreateRecord",data:function(){return{create_record:{username:"",first_name:"",last_name:"",password:"",conf_password:""},username_err:"",password_err:""}},methods:{formSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r={username:e.create_record.username,first_name:e.create_record.first_name,last_name:e.create_record.last_name,password:e.create_record.password},e.create_record.password==e.create_record.conf_password){t.next=5;break}e.password_err="Incorrect confirmation password",t.next=9;break;case 5:return o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,t.next=9,e.$axios.$post("v1/auth/register",r).then((function(t){if(0==t.error){e.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Customer added successfully"}),e.getRecords(),e.create_record={}}t.username&&(e.username_err="A user with that member number already exists")}));case 9:case"end":return t.stop()}}),t)})))()}},props:{getRecords:{type:Function,default:null}}}),c=r(12),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Username")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.username,callback:function(t){e.$set(e.create_record,"username",t)},expression:"create_record.username"}}),e._v(" "),e.username_err?t("div",[t("span",{staticStyle:{color:"red"}},[e._v(e._s(e.username_err))])]):e._e()],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Firstname")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.first_name,callback:function(t){e.$set(e.create_record,"first_name",t)},expression:"create_record.first_name"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Lastname")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.create_record.last_name,callback:function(t){e.$set(e.create_record,"last_name",t)},expression:"create_record.last_name"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Password")]),e._v(" "),t("b-form-input",{attrs:{type:"password",required:""},model:{value:e.create_record.password,callback:function(t){e.$set(e.create_record,"password",t)},expression:"create_record.password"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Confirm Password")]),e._v(" "),t("b-form-input",{attrs:{type:"password",required:""},model:{value:e.create_record.conf_password,callback:function(t){e.$set(e.create_record,"conf_password",t)},expression:"create_record.conf_password"}}),e._v(" "),e.password_err?t("div",[t("span",{staticStyle:{color:"red"}},[e._v(e._s(e.password_err))])]):e._e()],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton"),e._v(" "),t("br")],1)],1)}),[],!1,null,null,null);t.default=component.exports},657:function(e,t,r){"use strict";r.r(t);var o={name:"RecordView",props:{recordbyId:{type:Object,default:null}}},n=r(12),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Username")]),e._v(" "),t("b-form-input",{model:{value:e.recordbyId.username,callback:function(t){e.$set(e.recordbyId,"username",t)},expression:"recordbyId.username"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Firstname")]),e._v(" "),t("b-form-input",{model:{value:e.recordbyId.first_name,callback:function(t){e.$set(e.recordbyId,"first_name",t)},expression:"recordbyId.first_name"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Lastname")]),e._v(" "),t("b-form-input",{model:{value:e.recordbyId.last_name,callback:function(t){e.$set(e.recordbyId,"last_name",t)},expression:"recordbyId.last_name"}})],1)]),e._v(" "),t("br")])}),[],!1,null,null,null);t.default=component.exports},658:function(e,t,r){"use strict";r.r(t);var o=r(30),n=(r(64),{name:"RecordUpdate",methods:{updateRecord:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=data.id,o={username:data.username,first_name:data.first_name,last_name:data.last_name,password:data.password},n=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+n,t.next=6,e.$axios.$post("v1/user/update/".concat(r),o).then((function(t){if("false"==t.error){e.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Customer details updated successfully"}),e.getRecords()}}));case 6:case"end":return t.stop()}}),t)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null}}}),c=r(12),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.updateRecord(e.recordbyId)}}},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Username")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.username,callback:function(t){e.$set(e.recordbyId,"username",t)},expression:"recordbyId.username"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Firstname")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.first_name,callback:function(t){e.$set(e.recordbyId,"first_name",t)},expression:"recordbyId.first_name"}})],1),e._v(" "),t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Lastname")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.last_name,callback:function(t){e.$set(e.recordbyId,"last_name",t)},expression:"recordbyId.last_name"}})],1)]),e._v(" "),t("br"),e._v(" "),t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-width-expand@m"},[t("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Password")]),e._v(" "),t("b-form-input",{attrs:{required:""},model:{value:e.recordbyId.password,callback:function(t){e.$set(e.recordbyId,"password",t)},expression:"recordbyId.password"}})],1)]),e._v(" "),t("br"),e._v(" "),t("SbButton",{attrs:{title:"Update record"}}),e._v(" "),t("br")],1)])}),[],!1,null,null,null);t.default=component.exports},808:function(e,t,r){"use strict";r.r(t);r(16),r(3),r(2),r(11),r(156);var o=r(30),n=(r(45),r(64),r(203)),table=r(655),c=r(656),view=r(657),d=r(658),l={layout:"default_common",components:{RecordTable:table.default,Button:n.default,CreateRecord:c.default,RecordView:view.default,RecordUpdate:d.default},data:function(){return{records:[],recordbyId:{},status:"9",record_spinner:!1,search:{queary:"",pageSearch:null,pageError:!1},pagination:{rows:null,perPage:null,rowperPage:null,currentPage:null,countOnPage:null,totalPages:null,fromCount:null,toCount:null},paginationLinks:{self:"",last:"",first:"",prev:""},global_pagination:{},perms:{perms_add:"",perms_view:"",perms_update:"",perms_delete:"",perms_restore:"",perms_status:""}}},mounted:function(){this.getRecordOnMount(),this.getPerms()},methods:{setLoadingTrue:function(){this.$refs.blockLoadingRefresh.stateLoading()},setLoadingFalse:function(){this.$refs.blockLoadingRefresh.stateNormal()},getPerms:function(){this.perms.perms_add="1",this.perms.perms_view="1",this.perms.perms_update="1",this.perms.perms_delete="1",this.perms.perms_restore="1",this.perms.perms_status="1"},getRecordOnMount:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoadingTrue(),r=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+r,t.next=5,e.$axios.$get("v1/staff").then((function(t){e.records=t,console.warn(e.records)}));case 5:e.setLoadingFalse();case 6:case"end":return t.stop()}}),t)})))()},getRecords:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoadingTrue(),r=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+r,t.next=5,e.$axios.$get("v1/staff").then((function(t){e.records=t}));case 5:e.setLoadingFalse();case 6:case"end":return t.stop()}}),t)})))()},getRecordById:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.$bvModal.show("dmk-update-record"),t.record_spinner=!0,o=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+o,r.next=6,t.$axios.$get("v1/users/".concat(e)).then((function(e){t.recordbyId=e,console.warn(e)}));case 6:t.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},viewRecord:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.$bvModal.show("dmk-view-record"),t.record_spinner=!0,o=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+o,r.next=6,t.$axios.$get("v1/users/".concat(e)).then((function(e){t.recordbyId=e}));case 6:t.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},deleteRecord:function(e){var t=this,r=localStorage.getItem("token");this.$axios.defaults.headers.common.Authorization="Token "+r,Swal.fire({icon:"warning",title:"Do you want to delete selected record?",showCancelButton:!0,confirmButtonText:"Delete"}).then((function(r){r.isConfirmed?t.$axios.$delete("v1/user/delete/".concat(e)).then((function(e){if("false"==e.error){Swal.fire("Staff record deleted successfully","","success"),t.getRecords()}})):r.isDenied&&Swal.fire("Changes are not saved","","info")}))},searchRecords:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoadingTrue(),""==e.search.queary&&e.getRecordOnMount(),r=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+r,t.next=6,e.$axios.$get("v1/user/search/".concat(e.search.queary)).then((function(t){e.records=t}));case 6:e.setLoadingFalse();case 7:case"end":return t.stop()}}),t)})))()},resetRecords:function(e){var t=this;this.$refs[e].stateLoading(),this.search={},this.getRecordOnMount(),setTimeout((function(){t.$refs[e].stateNormal()}),2e3)},addRecord:function(){this.$bvModal.show("add-record")}},head:function(){return{title:"Gecss | Staff"}}},m=r(12),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content"},[t("base-block",{ref:"blockLoadingRefresh",staticClass:"block-mode-loading-refresh",attrs:{rounded:"",title:"Staff","header-bg":"","btn-option-fullscreen":""},scopedSlots:e._u([{key:"options",fn:function(){return[t("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Refresh"},on:{click:function(t){return e.resetRecords("blockLoadingRefresh")}}},[t("i",{staticClass:"si si-refresh"})]),e._v(" "),t("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Add new record"},on:{click:e.addRecord}},[t("i",{staticClass:"si si-plus"})]),e._v(" "),t("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Filter records"}},[t("i",{staticClass:"fa fa-filter"})])]},proxy:!0}])},[e._v(" "),t("div",{staticClass:"dmk-search-td-con"},[t("RowsFilter",{attrs:{rowsPerPage:e.rowsPerPage}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.pagination.rowperPage,expression:"pagination.rowperPage"}],staticStyle:{"text-align":"center"},attrs:{id:"rowsperPage"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.pagination,"rowperPage",t.target.multiple?r:r[0])},function(t){return e.rowsPerPage()}]}},[t("option",{attrs:{value:"10"}},[e._v("10")]),e._v(" "),t("option",{attrs:{value:"25"}},[e._v("25")]),e._v(" "),t("option",{attrs:{value:"50"}},[e._v("50")]),e._v(" "),t("option",{attrs:{value:"100"}},[e._v("100")])])]),e._v(" "),t("div",{staticStyle:{display:"flex"}},[t("form",{attrs:{method:"get"},on:{submit:function(t){return t.preventDefault(),e.searchRecords()}}},[t("div",{staticClass:"dmk-search-con"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search.queary,expression:"search.queary"}],staticClass:"form-control dmk-search-input",attrs:{type:"text",placeholder:"search "},domProps:{value:e.search.queary},on:{input:function(t){t.target.composing||e.$set(e.search,"queary",t.target.value)}}}),e._v(" "),t("button",{staticClass:"dmk-search-btn",attrs:{type:"submit"}},[t("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])],1),e._v(" "),t("RecordTable",{attrs:{records:e.records}},e._l(e.records,(function(r,o){return t("tr",{key:r.id,attrs:{id:"dmk-td-items"}},[t("td",{staticClass:"td-1st-nth"},[e._v(" "+e._s(o+1)+" ")]),e._v(" "),t("td",{staticClass:"mobile-td-expand-120"},[e._v(e._s(r.username))]),e._v(" "),t("td",[e._v(e._s(r.first_name))]),e._v(" "),t("td",{},[e._v(e._s(r.last_name))]),e._v(" "),t("td",{staticClass:"text-center"},[1==r.is_active?t("div",[t("b-icon",{attrs:{icon:"check-circle-fill","font-scale":"1.2",variant:"success"}})],1):t("div",[t("b-icon",{attrs:{icon:"x-circle-fill","font-scale":"1.2",variant:"secondary"}})],1)]),e._v(" "),t("td",{staticClass:"text-center"},[1==r.is_staff?t("div",[t("b-icon",{attrs:{icon:"check-circle-fill","font-scale":"1.2",variant:"success"}})],1):t("div",[t("b-icon",{attrs:{icon:"x-circle-fill","font-scale":"1.2",variant:"secondary"}})],1)]),e._v(" "),t("td",[t("EDropdown",{attrs:{statusCode:r.status,Id:r.id,deleteRecord:e.deleteRecord,restoreRecord:e.restoreRecord,getRecordById:e.viewRecord,getRecordUpdateById:e.getRecordById,perms_view:e.perms.perms_view,perms_update:e.perms.perms_update,perms_delete:e.perms.perms_delete,perms_restore:e.perms.perms_restore}})],1)])})),0),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("div",{}),e._v(" "),t("DcPagination",{attrs:{countOnPage:this.pagination.countOnPage,rows:this.pagination.rows,fromCount:this.pagination.fromCount,toCount:this.pagination.toCount,rowperPage:this.pagination.rowperPage,currentPage:this.pagination.currentPage,totalPages:this.pagination.totalPages,previousPage:e.previousPage,nextPage:e.nextPage,searchPageNo:e.searchPageNo}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.pagination.currentPage,expression:"pagination.currentPage"}],staticClass:"dmk-searpage-input",staticStyle:{"text-align":"center"},attrs:{type:"number"},domProps:{value:e.pagination.currentPage},on:{input:function(t){t.target.composing||e.$set(e.pagination,"currentPage",t.target.value)}}})])],1)],1),e._v(" "),t("OuModal",{attrs:{mdId:"add-record",size:"md",title:"Add Staff"}},[t("CreateRecord",{attrs:{getRecords:e.getRecords}})],1),e._v(" "),t("OuModal",{attrs:{mdId:"dmk-view-record",size:"md",title:"Staff Details",modalSpinner:e.record_spinner}},[t("RecordView",{attrs:{recordbyId:e.recordbyId}})],1),e._v(" "),t("OuModal",{attrs:{mdId:"dmk-update-record",size:"md",title:"Update Staff Details",modalSpinner:e.record_spinner}},[t("RecordUpdate",{attrs:{recordbyId:e.recordbyId,getRecords:e.getRecords}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseBlock:r(302).default})}}]);