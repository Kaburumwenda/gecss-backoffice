(window.webpackJsonp=window.webpackJsonp||[]).push([[7,170,175,176],{1044:function(t,e,r){"use strict";r.r(e);var n=r(33),o=(r(72),r(2),r(4),r(778)),l=(r(779),{name:"BatterySwapsPdf",data:function(){return{pdfData:[],btn_loading:!1,btn_loading_today:!1}},methods:{get_battery_swaps_pdf:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading_today=!0,e.next=5,t.$axios.$get("v1/reports/battery_reports",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.battery_code1,element.swap,element.units,element.amount])}));var l=new o.default;l.autoTable({head:[["No","Battery Code","No. Swap","units(Kw)","Revenue (KES)"]],body:n});var d=l.internal.getNumberOfPages(),i=0;for(i=0;i<d;i++){l.setPage(i);var c=l.internal.getCurrentPageInfo().pageNumber;l.setFontSize(12),l.text("page: "+c+"/"+d,10,l.internal.pageSize.height-10)}var f=Date(),v=d;for(i=1;i<=v;i++)l.setPage(i),l.setTextColor(150),l.setFontSize(7),l.text(50,l.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(f));l.save("batteries_total_swaps.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading_today=!1;case 6:case"end":return e.stop()}}),e)})))()}},props:{}}),d=(r(891),r(12)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("br"),t._v(" "),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.get_battery_swaps_pdf()}}},[e("div",[e("h4",[t._v("Do you want to download pdf???")])]),t._v(" "),e("SbButton",{attrs:{title:"YES"}}),t._v(" "),e("br")],1)],1)}),[],!1,null,"c340462c",null);e.default=component.exports},1045:function(t,e,r){"use strict";r.r(e);var n=r(33),o=(r(72),r(15),r(2),r(4),r(778)),l=(r(779),{name:"SwapDailyPdf",data:function(){return{pdfData:[],btn_loading:!1,swap_filter:{fromdate:"",todate:""}}},methods:{get_swaps_daily_pdf:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading=!0,n={fromdate:t.swap_filter.fromdate,todate:t.swap_filter.todate},e.next=6,t.$axios.$post("v1/reports/battery_statistics/pdf_excel",n).then((function(e){var r=e.length,n=t.swap_filter.fromdate,l=t.swap_filter.todate,d="battery_reports-pdf-".concat(n," - ").concat(l,".pdf");if(r>=1){t.$bvModal.hide("pdf-daily-swaps-record"),t.pdfData=e;var c=t.pdfData,f=[];c.forEach((function(element,t,e){f.push([t+1,element.Date,element.Swaps,element.Power_units,element.Revenue])}));var v=new o.default;v.autoTable({head:[["No","Date","Total Swaps","Power Units(Kw)","Revenue (KES)"]],body:f});var _=v.internal.getNumberOfPages(),i=0;for(i=0;i<_;i++){v.setPage(i);var w=v.internal.getCurrentPageInfo().pageNumber;v.setFontSize(12),v.text("page: "+w+"/"+_,10,v.internal.pageSize.height-10)}var m=Date(),h=_;for(i=1;i<=h;i++)v.setPage(i),v.setTextColor(150),v.setFontSize(7),v.text(50,v.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(m));v.save(d),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 6:t.btn_loading=!1;case 7:case"end":return e.stop()}}),e)})))()}},props:{}}),d=(r(893),r(12)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.get_swaps_daily_pdf()}}},[e("div",[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Start Date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.swap_filter.fromdate,callback:function(e){t.$set(t.swap_filter,"fromdate",e)},expression:"swap_filter.fromdate"}})],1)]),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("End date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.swap_filter.todate,callback:function(e){t.$set(t.swap_filter,"todate",e)},expression:"swap_filter.todate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",[t.btn_loading?e("div",[e("center",[e("i",{staticClass:"fa fa-2x fa-sun fa-spin"}),t._v(" "),e("br"),e("br")])],1):e("div",[e("SbButton",{attrs:{title:"Download Pdf"}})],1)]),t._v(" "),e("br")])])],1)}),[],!1,null,"30d91946",null);e.default=component.exports},1046:function(t,e,r){"use strict";r.r(e);var n=r(33),o=(r(72),r(15),r(782)),l={name:"SwapDailyExcel",data:function(){return{pdfData:[],btn_loading:!1,swap_filter:{fromdate:"",todate:""}}},methods:{generateExcel:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading=!0,n={fromdate:t.swap_filter.fromdate,todate:t.swap_filter.todate},e.next=6,t.$axios.$post("v1/reports/battery_statistics/pdf_excel",n).then((function(e){if(e.length>=1){var r=t.swap_filter.fromdate,n=t.swap_filter.todate,l="mpesa_reports-pdf-".concat(r," - ").concat(n,".xlsx"),data=o.a.json_to_sheet(e),d=o.a.book_new();o.a.book_append_sheet(d,data,"data"),o.b(d,l),t.$bvModal.hide("excel-daily-swaps-record");Swal.fire({icon:"success",title:"Excel downloaded successfully"})}else{t.$bvModal.hide("excel-daily-swaps-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."})}}));case 6:case"end":return e.stop()}}),e)})))()}},props:{}},d=(r(895),r(12)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.generateExcel()}}},[e("div",[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Start Date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.swap_filter.fromdate,callback:function(e){t.$set(t.swap_filter,"fromdate",e)},expression:"swap_filter.fromdate"}})],1)]),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("End date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.swap_filter.todate,callback:function(e){t.$set(t.swap_filter,"todate",e)},expression:"swap_filter.todate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",[t.btn_loading?e("div",[e("center",[e("i",{staticClass:"fa fa-2x fa-sun fa-spin"}),t._v(" "),e("br"),e("br")])],1):e("div",[e("SbButton",{attrs:{title:"Download Excel"}})],1)]),t._v(" "),e("br")])])],1)}),[],!1,null,"6a1592c0",null);e.default=component.exports},1185:function(t,e,r){"use strict";r.r(e);var n=r(1044),o=r(1045),l=r(1046),d={name:"Hero",components:{BatterySwapsPdf:n.default,SwapDailyPdf:o.default,SwapDailyExcel:l.default},methods:{getpdf_form:function(){this.$bvModal.show("pdf-record")},pdf_daily_swaps:function(){this.$bvModal.show("pdf-daily-swaps-record")},excel_daily_swaps:function(){this.$bvModal.show("excel-daily-swaps-record")}}},c=r(12),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-body-light"},[e("div",{staticClass:"content content-full"},[e("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left"},[t._m(0),t._v(" "),e("div",{staticClass:"mt-3 mt-sm-0 ml-sm-3"},[e("b-button",{attrs:{variant:"alt-primary","data-uk-tooltip":"Total Swaps daily"},on:{click:function(e){return t.excel_daily_swaps()}}},[e("i",{staticClass:"fa fa-file-excel"}),t._v(" Excel \n            ")]),t._v(" "),e("b-button",{attrs:{variant:"alt-primary","data-uk-tooltip":"Total Swaps daily"},on:{click:function(e){return t.pdf_daily_swaps()}}},[e("i",{staticClass:"fa fa-file-pdf"}),t._v(" Pdf\n            ")]),t._v(" "),e("b-button",{attrs:{variant:"alt-primary","data-uk-tooltip":"Total Swaps per battery"},on:{click:t.getpdf_form}},[e("i",{staticClass:"si si-bar-chart"}),t._v(" B.Swaps\n            ")]),t._v(" "),e("b-button",{attrs:{to:"/vendors/mpesa",variant:"alt-primary"}},[e("i",{staticClass:"nav-main-link-icon si si-action-undo"}),t._v(" Go to Mpesa Portal\n            ")])],1)])])]),t._v(" "),e("OuModal",{attrs:{mdId:"pdf-record",size:"md",title:"Total Swaps per battery"}},[e("BatterySwapsPdf")],1),t._v(" "),e("OuModal",{attrs:{mdId:"pdf-daily-swaps-record",size:"md",title:"Total daily swaps"}},[e("SwapDailyPdf")],1),t._v(" "),e("OuModal",{attrs:{mdId:"excel-daily-swaps-record",size:"md",title:"Total daily swaps"}},[e("SwapDailyExcel")],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-sm-fill"},[e("h2",{staticClass:"h3 font-w700 mb-2"},[t._v("\n              Battery Swaps\n            ")]),t._v(" "),e("h2",{staticClass:"h6 font-w500 text-muted mb-0"},[t._v("\n              Welcome "),e("a",{staticClass:"font-w600",attrs:{href:"javascript:void(0)"}},[t._v("UnTapped")]),t._v(", everything looks great.\n            ")])])}],!1,null,null,null);e.default=component.exports},825:function(t,e,r){var content=r(892);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("2bc2dfd6",content,!0,{sourceMap:!1})},826:function(t,e,r){var content=r(894);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("afc27a52",content,!0,{sourceMap:!1})},827:function(t,e,r){var content=r(896);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("70590320",content,!0,{sourceMap:!1})},891:function(t,e,r){"use strict";r(825)},892:function(t,e,r){var n=r(42)(!1);n.push([t.i,"\n.pdf-filter-btn[data-v-c340462c]{\n    display: flex;\n    justify-content: space-around;\n}\n",""]),t.exports=n},893:function(t,e,r){"use strict";r(826)},894:function(t,e,r){var n=r(42)(!1);n.push([t.i,"\n.pdf-filter-btn[data-v-30d91946]{\n    display: flex;\n    justify-content: space-around;\n}\n",""]),t.exports=n},895:function(t,e,r){"use strict";r(827)},896:function(t,e,r){var n=r(42)(!1);n.push([t.i,"\n.pdf-filter-btn[data-v-6a1592c0]{\n    display: flex;\n    justify-content: space-around;\n}\n",""]),t.exports=n}}]);