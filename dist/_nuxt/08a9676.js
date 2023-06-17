(window.webpackJsonp=window.webpackJsonp||[]).push([[86,87,88,89],{585:function(t,e,r){var content=r(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("fd142ee8",content,!0,{sourceMap:!1})},606:function(t,e,r){"use strict";r(585)},607:function(t,e,r){var n=r(37)(!1);n.push([t.i,"\n.pdf-filter-btn[data-v-7814e298]{\n    display: flex;\n    justify-content: space-around;\n}\n",""]),t.exports=n},643:function(t,e,r){var content=r(815);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("c83fcb0c",content,!0,{sourceMap:!1})},698:function(t,e,r){"use strict";r.r(e);var n={name:"RecordTable",props:{records:{type:Array,default:[]}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("DcTable",{scopedSlots:t._u([{key:"theader",fn:function(){return[e("th",{staticStyle:{"padding-left":"10px !important"}},[t._v("#")]),t._v(" "),e("th",[t._v("Bike")]),t._v(" "),e("th",[t._v("Swaps")]),t._v(" "),e("th",[t._v("Units(kw)")]),t._v(" "),e("th",[t._v("Revenue")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")])]},proxy:!0},{key:"tbody",fn:function(){return[t.records.length?t._e():e("tr",[e("td"),e("td"),t._v(" "),e("td",[e("span",{staticStyle:{color:"purple"}},[t._v(" No records available ")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),t._t("default")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},699:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(64),{name:"Statistics",data:function(){return{statistics:{}}},mounted:function(){this.getTotals()},methods:{getTotals:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("v1/reports/bike_reports").then((function(e){console.warn(e),t.statistics=e}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=r(12),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            Total swaps\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.swaps>0?e("span",[t._v(" "+t._s(t.statistics.swaps.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-success-light rounded-lg"})])])],1),t._v(" "),e("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            Total units (Kw)\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.units>0?e("span",[t._v(" "+t._s(t.statistics.units.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-warning-light rounded-lg"})])])],1),t._v(" "),e("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            Total mileage (Km)\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.mileage>0?e("span",[t._v(" "+t._s(t.statistics.mileage.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-primary-light rounded-lg"})])])],1),t._v(" "),e("b-col",{attrs:{cols:"6",md:"3",lg:"6",xl:"3"}},[e("base-block",{attrs:{tag:"a",rounded:"","link-pop":"","content-class":"d-flex py-4",href:"javascript:void(0)"}},[e("div",{staticClass:"flex-grow-1"},[e("div",{staticClass:"font-size-sm font-w600 text-uppercase text-muted"},[t._v("\n            Total GHG Avoided\n          ")]),t._v(" "),e("div",{staticClass:"font-size-h5",staticStyle:{color:"green"}},[t.statistics.ghg>0?e("span",[t._v(" "+t._s(t.statistics.ghg.toLocaleString()))]):e("span",[t._v("0")])])]),t._v(" "),e("div",{staticClass:"d-flex ml-2"},[e("div",{staticClass:"flex-grow-1 px-1 bg-danger-light rounded-lg"})])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseBlock:r(302).default})},700:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(64),r(2),r(4),r(576)),c=(r(577),r(570),{name:"PdfRecord",data:function(){return{create_record:{fromdate:"",todate:""},bike_err:"",pdfData:[],btn_loading:!1,btn_loading_today:!1,btn_loading_week:!1,btn_loading_month:!1,btn_loading_year:!1}},methods:{pdfGenerate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={todate:t.create_record.todate,fromdate:t.create_record.fromdate},n=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+n,e.next=5,t.$axios.$post("v1/reports/bike_reports_filter_range",r,{headers:{Authorization:"Token ".concat(n)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.bike_no,element.swap,element.units,element.mileage,element.ghg])}));var c=new o.default;c.autoTable({head:[["No","E-Bike","No. Swap","units(Kw)","Km. Driven","GHG Avoided"]],body:n});var d=c.internal.getNumberOfPages(),i=0;for(i=0;i<d;i++){c.setPage(i);var l=c.internal.getCurrentPageInfo().pageNumber;c.setFontSize(12),c.text("page: "+l+"/"+d,10,c.internal.pageSize.height-10)}var f=Date(),v=d;for(i=1;i<=v;i++)c.setPage(i),c.setTextColor(150),c.setFontSize(7),c.text(50,c.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(f));c.save("GECSS_ebike_report.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:case"end":return e.stop()}}),e)})))()},getPdfToday:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading_today=!0,e.next=5,t.$axios.$get("v1/reports/battery_reports",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.battery_code1,element.swap,element.units,element.amount])}));var c=new o.default;c.autoTable({head:[["No","Battery Code","No. Swap","units(Kw)","Revenue (KES)"]],body:n});var d=c.internal.getNumberOfPages(),i=0;for(i=0;i<d;i++){c.setPage(i);var l=c.internal.getCurrentPageInfo().pageNumber;c.setFontSize(12),c.text("page: "+l+"/"+d,10,c.internal.pageSize.height-10)}var f=Date(),v=d;for(i=1;i<=v;i++)c.setPage(i),c.setTextColor(150),c.setFontSize(7),c.text(50,c.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(f));c.save("battery_report.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading_today=!1;case 6:case"end":return e.stop()}}),e)})))()},getPdfWeek:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading_week=!0,e.next=5,t.$axios.$get("v1/reports/bike_reports_filter_week",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.bike_no,element.swap,element.units,element.mileage,element.ghg])}));var c=new o.default;c.autoTable({head:[["No","E-Bike","No. Swap","units(Kw)","Km. Driven","GHG Avoided"]],body:n});var d=c.internal.getNumberOfPages(),i=0;for(i=0;i<d;i++){c.setPage(i);var l=c.internal.getCurrentPageInfo().pageNumber;c.setFontSize(12),c.text("page: "+l+"/"+d,10,c.internal.pageSize.height-10)}var f=Date(),v=d;for(i=1;i<=v;i++)c.setPage(i),c.setTextColor(150),c.setFontSize(7),c.text(50,c.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(f));c.save("GECSS_ebike_report.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading_week=!1;case 6:case"end":return e.stop()}}),e)})))()},getPdfMonth:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading_month=!0,e.next=5,t.$axios.$get("v1/reports/bike_reports_filter_month",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.bike_no,element.swap,element.units,element.mileage,element.ghg])}));var c=new o.default;c.autoTable({head:[["No","E-Bike","No. Swap","units(Kw)","Km. Driven","GHG Avoided"]],body:n});var d=c.internal.getNumberOfPages(),i=0;for(i=0;i<d;i++){c.setPage(i);var l=c.internal.getCurrentPageInfo().pageNumber;c.setFontSize(12),c.text("page: "+l+"/"+d,10,c.internal.pageSize.height-10)}var f=Date(),v=d;for(i=1;i<=v;i++)c.setPage(i),c.setTextColor(150),c.setFontSize(7),c.text(50,c.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(f));c.save("GECSS_ebike_report.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading_month=!1;case 6:case"end":return e.stop()}}),e)})))()},getPdfYear:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading_year=!0,e.next=5,t.$axios.$get("v1/reports/bike_reports_filter_year",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.bike_no,element.swap,element.units,element.mileage,element.amount])}));var c=new o.default;c.autoTable({head:[["No","E-Bike","No. Swap","units(Kw)","KM. Driven","Amount(KES)"]],body:n});var d=c.internal.getNumberOfPages(),i=0;for(i=0;i<d;i++){c.setPage(i);var l=c.internal.getCurrentPageInfo().pageNumber;c.setFontSize(12),c.text("page: "+l+"/"+d,10,c.internal.pageSize.height-10)}var f=Date(),v=d;for(i=1;i<=v;i++)c.setPage(i),c.setTextColor(150),c.setFontSize(7),c.text(50,c.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(f));c.save("GECSS_ebike_report.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading_year=!1;case 6:case"end":return e.stop()}}),e)})))()}},props:{}}),d=(r(606),r(12)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pdf-filter-btn"},[e("div",[t.btn_loading_today?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getPdfToday()}}},[t._v("Today")])],1),t._v(" "),e("div",[t.btn_loading_week?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getPdfWeek()}}},[t._v("This week")])],1),t._v(" "),e("div",[t.btn_loading_month?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getPdfMonth()}}},[t._v("This month")])],1),t._v(" "),e("div",[t.btn_loading_year?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getPdfYear()}}},[t._v("This year")])],1)]),t._v(" "),e("hr"),t._v(" "),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.pdfGenerate.apply(null,arguments)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Start Date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.create_record.fromdate,callback:function(e){t.$set(t.create_record,"fromdate",e)},expression:"create_record.fromdate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("End date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.create_record.todate,callback:function(e){t.$set(t.create_record,"todate",e)},expression:"create_record.todate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{title:"Download PDF"}}),t._v(" "),e("br")],1)],1)}),[],!1,null,"7814e298",null);e.default=component.exports},814:function(t,e,r){"use strict";r(643)},815:function(t,e,r){var n=r(37)(!1);n.push([t.i,"\n.status-btn[data-v-6bc82cf6]{\n\tborder-radius: 0px !important;\n\tpadding: 0px 2px 0px 2px !important;\n\tfont-size: 12px !important;\n\twidth: 80px !important;\n}\n.pdf-filter-btn[data-v-6bc82cf6]{\n    display: flex;\n    justify-content: space-around;\n}\n",""]),t.exports=n},861:function(t,e,r){"use strict";r.r(e);r(16),r(3),r(2),r(11),r(156);var n=r(30),o=(r(45),r(64),r(203)),table=r(698),c=r(699),d=r(700),l=r(570),f=r.n(l),v={layout:"default_common",components:{RecordTable:table.default,Button:o.default,Statistics:c.default,PdfRecord:d.default},data:function(){return{records:[],recordbyId:{},status:"9",record_spinner:!1,search:{queary:"",pageSearch:null,pageError:!1},pagination:{rows:null,perPage:null,rowperPage:null,currentPage:null,countOnPage:null,totalPages:null,fromCount:null,toCount:null},paginationLinks:{self:"",last:"",first:"",prev:""},global_pagination:{},perms:{perms_add:"",perms_view:"",perms_update:"",perms_delete:"",perms_restore:"",perms_status:""},filter_today:!1,filter_week:!1,filter_month:!1,filter_year:!1,mpesa_filter:{fromdate:"",todate:""}}},filters:{diffForHumans:function(t){return t?f()(t).format("MMM, ddd D. YYYY h:mm A"):null}},mounted:function(){this.getRecordOnMount(),this.getPerms()},methods:{setLoadingTrue:function(){this.$refs.blockLoadingRefresh.stateLoading()},setLoadingFalse:function(){this.$refs.blockLoadingRefresh.stateNormal()},getPerms:function(){this.perms.perms_add="1",this.perms.perms_view="1",this.perms.perms_update="1",this.perms.perms_delete="1",this.perms.perms_restore="1",this.perms.perms_status="1"},getRecordOnMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/reports/battery_reports").then((function(e){t.records=e}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecords:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/reports/battery_reports").then((function(e){t.records=e}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecordById:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$bvModal.show("dmk-update-record"),e.record_spinner=!0,n=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+n,r.next=6,e.$axios.$get("v1/mpesa/".concat(t)).then((function(t){e.recordbyId=t}));case 6:e.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},searchRecords:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),""==t.search.queary&&t.getRecordOnMount(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=6,t.$axios.$get("v1/mpesa/search/".concat(t.search.queary)).then((function(e){t.records=e}));case 6:t.setLoadingFalse();case 7:case"end":return e.stop()}}),e)})))()},resetRecords:function(t){var e=this;this.$refs[t].stateLoading(),this.search={},this.getRecordOnMount(),setTimeout((function(){e.$refs[t].stateNormal()}),2e3)},getMpesaStatToday:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.filter_today=!0,r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/reports/battery_reports").then((function(e){t.records=e}));case 5:t.filter_today=!1,t.$bvModal.hide("filter-record");case 7:case"end":return e.stop()}}),e)})))()},getMpesaStatWeek:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.filter_week=!0,r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/reports/bike_reports_filter_week").then((function(e){t.records=e}));case 5:t.filter_week=!1,t.$bvModal.hide("filter-record");case 7:case"end":return e.stop()}}),e)})))()},getMpesaStatMonth:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.filter_month=!0,r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/reports/bike_reports_filter_month").then((function(e){t.records=e}));case 5:t.filter_month=!1,t.$bvModal.hide("filter-record");case 7:case"end":return e.stop()}}),e)})))()},getMpesaStatYear:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.filter_year=!0,r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/reports/bike_reports_filter_year").then((function(e){t.records=e}));case 5:t.filter_year=!1,t.$bvModal.hide("filter-record");case 7:case"end":return e.stop()}}),e)})))()},getMpesaStatRange:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,n={fromdate:t.mpesa_filter.fromdate,todate:t.mpesa_filter.todate},e.next=6,t.$axios.$post("v1/reports/bike_reports_filter_range",n).then((function(e){t.records=e}));case 6:t.setLoadingFalse(),t.$bvModal.hide("filter-record");case 8:case"end":return e.stop()}}),e)})))()},filterRecord:function(){this.$bvModal.show("filter-record")},getpdf_form:function(){this.$bvModal.show("pdf-record")}},head:function(){return{title:"Gecss | E-Bike report"}}},m=(r(814),r(12)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content"},[e("div",[e("Statistics")],1),t._v(" "),e("base-block",{ref:"blockLoadingRefresh",staticClass:"block-mode-loading-refresh",attrs:{rounded:"",title:"Battery Report","header-bg":"","btn-option-fullscreen":""},scopedSlots:t._u([{key:"options",fn:function(){return[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Download"},on:{click:t.getpdf_form}},[e("i",{staticClass:"fa fa-cloud-download-alt"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Refresh"},on:{click:function(e){return t.resetRecords("blockLoadingRefresh")}}},[e("i",{staticClass:"si si-refresh"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Filter records"},on:{click:function(e){return e.preventDefault(),t.filterRecord()}}},[e("i",{staticClass:"fa fa-filter"})])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"dmk-search-td-con"},[e("RowsFilter",{attrs:{rowsPerPage:t.rowsPerPage}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.pagination.rowperPage,expression:"pagination.rowperPage"}],staticStyle:{"text-align":"center"},attrs:{id:"rowsperPage"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pagination,"rowperPage",e.target.multiple?r:r[0])},function(e){return t.rowsPerPage()}]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),e("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),e("option",{attrs:{value:"100"}},[t._v("100")])])]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("form",{attrs:{method:"get"},on:{submit:function(e){return e.preventDefault(),t.searchRecords()}}},[e("div",{staticClass:"dmk-search-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search.queary,expression:"search.queary"}],staticClass:"form-control dmk-search-input",attrs:{type:"text",placeholder:"search "},domProps:{value:t.search.queary},on:{input:function(e){e.target.composing||t.$set(t.search,"queary",e.target.value)}}}),t._v(" "),e("button",{staticClass:"dmk-search-btn",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])],1),t._v(" "),e("RecordTable",{attrs:{records:t.records}},t._l(t.records,(function(r,n){return e("tr",{key:r.id,attrs:{id:"dmk-td-items"}},[e("td",{staticClass:"td-1st-nth"},[t._v(" "+t._s(n+1)+" ")]),t._v(" "),e("td",[t._v(t._s(r.battery_code1))]),t._v(" "),e("td",[r.swap>0?e("span",[t._v(" "+t._s(r.swap.toLocaleString())+" ")]):e("span",[t._v("0")])]),t._v(" "),e("td",[r.units>0?e("span",[t._v(" "+t._s(r.units.toLocaleString())+" ")]):e("span",[t._v("0")])]),t._v(" "),e("td",[r.amount>0?e("span",[t._v(" "+t._s(r.amount.toLocaleString())+" ")]):e("span",[t._v("0")])]),t._v(" "),e("td",{staticClass:"text-center"},[e("button",{staticClass:"btn status-btn btn-success",attrs:{"aria-expanded":"false"}},[t._v("\n\t\t\t\t\tActive\n\t\t\t\t")])])])})),0),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{})])],1),t._v(" "),e("OuModal",{attrs:{mdId:"pdf-record",size:"md",title:"Gecss E-bike Reports"}},[e("PdfRecord",{attrs:{getRecords:t.getRecords}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"filter-record",size:"md",title:"Filter E-bike report"}},[e("div",[e("div",{staticClass:"pdf-filter-btn"},[e("div",[t.filter_today?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getMpesaStatToday()}}},[t._v("Today")])],1),t._v(" "),e("div",[t.filter_week?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getMpesaStatWeek()}}},[t._v("This Week")])],1),t._v(" "),e("div",[t.filter_month?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getMpesaStatMonth()}}},[t._v("This month")])],1),t._v(" "),e("div",[t.filter_month?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getMpesaStatYear()}}},[t._v("This year")])],1)]),t._v(" "),e("hr"),t._v(" "),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.getMpesaStatRange.apply(null,arguments)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Start Date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.mpesa_filter.fromdate,callback:function(e){t.$set(t.mpesa_filter,"fromdate",e)},expression:"mpesa_filter.fromdate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("End date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.mpesa_filter.todate,callback:function(e){t.$set(t.mpesa_filter,"todate",e)},expression:"mpesa_filter.todate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{title:"Pull records"}}),t._v(" "),e("br")],1)],1)])],1)])}),[],!1,null,"6bc82cf6",null);e.default=component.exports;installComponents(component,{BaseBlock:r(302).default})}}]);