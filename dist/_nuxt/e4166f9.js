(window.webpackJsonp=window.webpackJsonp||[]).push([[95,94,96,97,98,99],{436:function(t,e,r){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",u="hour",a="day",o="week",d="month",c="quarter",l="year",f="date",m="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},w={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,d),s=r-i<0,u=e.clone().add(n+(s?-1:1),d);return+(-(n+(r-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:d,y:l,w:o,d:a,D:f,h:u,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",$={};$[g]=_;var p=function(t){return t instanceof M},k=function t(e,r,n){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();$[s]&&(i=s),r&&($[s]=r,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;$[a]=e,i=a}return!n&&i&&(g=i),i||!n&&g},x=function(t,e){if(p(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new M(r)},S=w;S.l=k,S.i=p,S.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function _(t){this.$L=k(t.locale,null,!0),this.parse(t)}var y=_.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(v);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(t,e){var r=x(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return x(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<x(t)},y.$g=function(t,e,r){return S.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!S.u(e)||e,c=S.p(t),m=function(t,e){var i=S.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(a)},v=function(t,e){return S.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},h=this.$W,_=this.$M,y=this.$D,w="set"+(this.$u?"UTC":"");switch(c){case l:return n?m(1,0):m(31,11);case d:return n?m(1,_):m(0,_+1);case o:var g=this.$locale().weekStart||0,$=(h<g?h+7:h)-g;return m(n?y-$:y+(6-$),_);case a:case f:return v(w+"Hours",0);case u:return v(w+"Minutes",1);case s:return v(w+"Seconds",2);case i:return v(w+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,o=S.p(t),c="set"+(this.$u?"UTC":""),m=(r={},r[a]=c+"Date",r[f]=c+"Date",r[d]=c+"Month",r[l]=c+"FullYear",r[u]=c+"Hours",r[s]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[o],v=o===a?this.$D+(e-this.$W):e;if(o===d||o===l){var h=this.clone().set(f,1);h.$d[m](v),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else m&&this.$d[m](v);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[S.p(t)]()},y.add=function(n,c){var f,m=this;n=Number(n);var v=S.p(c),h=function(t){var e=x(m);return S.w(e.date(e.date()+Math.round(t*n)),m)};if(v===d)return this.set(d,this.$M+n);if(v===l)return this.set(l,this.$y+n);if(v===a)return h(1);if(v===o)return h(7);var _=(f={},f[s]=e,f[u]=r,f[i]=t,f)[v]||1,y=this.$d.getTime()+n*_;return S.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||m;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,o=r.weekdays,d=r.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},l=function(t){return S.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:c(r.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,o,2),ddd:c(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,u,!0),A:f(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||v[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,m){var v,h=S.p(f),_=x(n),y=(_.utcOffset()-this.utcOffset())*e,w=this-_,g=S.m(this,_);return g=(v={},v[l]=g/12,v[d]=g,v[c]=g/3,v[o]=(w-y)/6048e5,v[a]=(w-y)/864e5,v[u]=w/r,v[s]=w/e,v[i]=w/t,v)[h]||w,m?g:S.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=k(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},_}(),R=M.prototype;return x.prototype=R,[["$ms",n],["$s",i],["$m",s],["$H",u],["$W",a],["$M",d],["$y",l],["$D",f]].forEach((function(t){R[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,M,x),t.$i=!0),x},x.locale=k,x.isDayjs=p,x.unix=function(t){return x(1e3*t)},x.en=$[g],x.Ls=$,x.p={},x}()},585:function(t,e,r){var content=r(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("2982895e",content,!0,{sourceMap:!1})},597:function(t,e,r){"use strict";r(585)},598:function(t,e,r){var n=r(37)(!1);n.push([t.i,"\n.pdf-filter-btn[data-v-89614b82]{\n    display: flex;\n    justify-content: space-around;\n}\n",""]),t.exports=n},618:function(t,e,r){var content=r(775);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("b802e0b4",content,!0,{sourceMap:!1})},677:function(t,e,r){"use strict";r.r(e);var n={name:"RecordTable",props:{records:{type:Array,default:[]}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("DcTable",{scopedSlots:t._u([{key:"theader",fn:function(){return[e("th",{staticStyle:{"padding-left":"10px !important"}},[t._v("#")]),t._v(" "),e("th",{},[t._v("Branch/Location")]),t._v(" "),e("th",[t._v("Member No.")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Bike No.")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Battery")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Amount")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Action")])]},proxy:!0},{key:"tbody",fn:function(){return[t.records.length?t._e():e("tr",[e("td"),e("td"),t._v(" "),e("td",[e("span",{staticStyle:{color:"purple"}},[t._v(" No records available ")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),t._t("default")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},678:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(64),{name:"CreateRecord",data:function(){return{create_record:{bike_no:"",battery_code1:""},bike_err:"",sb_loading:!1}},methods:{formSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={bike_no:t.create_record.bike_no,battery_code1:t.create_record.battery_code1},n=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+n,t.sb_loading=!0,e.next=6,t.$axios.$post("v1/battery/swap/create",r,{headers:{Authorization:"Token ".concat(n)}}).then((function(e){if(0==e.error){t.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Battery Issued successfully"}),t.getRecords(),t.create_record={}}1==e.error&&(t.bike_err="Motorbike number plate not recognized. Please try again later")}));case 6:t.sb_loading=!1;case 7:case"end":return e.stop()}}),e)})))()}},props:{getRecords:{type:Function,default:null}}}),d=r(12),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Bike No.")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.create_record.bike_no,callback:function(e){t.$set(t.create_record,"bike_no",e)},expression:"create_record.bike_no"}}),t._v(" "),t.bike_err?e("div",{staticStyle:{color:"red"}},[t._v("\n              "+t._s(t.bike_err)+"\n            ")]):t._e()],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Battery Code")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.create_record.battery_code1,callback:function(e){t.$set(t.create_record,"battery_code1",e)},expression:"create_record.battery_code1"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{sbloading:t.sb_loading}}),t._v(" "),e("br")],1)],1)}),[],!1,null,null,null);e.default=component.exports},679:function(t,e,r){"use strict";r.r(e);var n={name:"RecordView",props:{recordbyId:{type:Object,default:null}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Member No.")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.mem_no,callback:function(e){t.$set(t.recordbyId,"mem_no",e)},expression:"recordbyId.mem_no"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Bike No")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.bike_no,callback:function(e){t.$set(t.recordbyId,"bike_no",e)},expression:"recordbyId.bike_no"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Battery")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.battery_code1,callback:function(e){t.$set(t.recordbyId,"battery_code1",e)},expression:"recordbyId.battery_code1"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Amount")]),t._v(" "),e("b-form-input",{model:{value:t.recordbyId.amount,callback:function(e){t.$set(t.recordbyId,"amount",e)},expression:"recordbyId.amount"}})],1)]),t._v(" "),e("br")])}),[],!1,null,null,null);e.default=component.exports},680:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(64),{name:"RecordUpdate",data:function(){return{sb_loading:!1}},methods:{updateRecord:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=data.id,n={mem_no:data.mem_no,bike_no:data.bike_no,amount:data.amount,battery_code1:data.battery_code1,status:data.status},o=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+o,t.sb_loading=!0,e.next=7,t.$axios.$post("v1/battery/swap/update/".concat(r),n).then((function(e){if("false"==e.error){t.$bvModal.hide("dmk-update-record");Swal.fire({icon:"success",title:"Battery record updated successfully"}),t.getRecords()}}));case 7:t.sb_loading=!1;case 8:case"end":return e.stop()}}),e)})))()}},props:{recordbyId:{type:Object,default:null},getRecords:{type:Function,default:null}}}),d=r(12),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateRecord(t.recordbyId)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Member No.")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.mem_no,callback:function(e){t.$set(t.recordbyId,"mem_no",e)},expression:"recordbyId.mem_no"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Bike No.")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.bike_no,callback:function(e){t.$set(t.recordbyId,"bike_no",e)},expression:"recordbyId.bike_no"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v(" Battery ")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.battery_code1,callback:function(e){t.$set(t.recordbyId,"battery_code1",e)},expression:"recordbyId.battery_code1"}})],1),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v(" Amount ")]),t._v(" "),e("b-form-input",{attrs:{required:""},model:{value:t.recordbyId.amount,callback:function(e){t.$set(t.recordbyId,"amount",e)},expression:"recordbyId.amount"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{title:"Update record",sbloading:t.sb_loading}}),t._v(" "),e("br")],1)])}),[],!1,null,null,null);e.default=component.exports},681:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(64),r(2),r(4),r(576)),d=(r(583),r(436)),c=r.n(d),l={name:"PdfRecord",data:function(){return{create_record:{fromdate:"",todate:""},bike_err:"",pdfData:[],btn_loading:!1,btn_loading_month:!1,btn_loading_year:!1}},methods:{pdfGenerate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={todate:t.create_record.todate,fromdate:t.create_record.fromdate},n=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+n,e.next=5,t.$axios.$post("v1/battery/pdf",r,{headers:{Authorization:"Token ".concat(n)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.mem_no,element.source,element.battery_code1,element.amount,c()(element.createdAt).format("MMM, ddd D. YYYY h:mm A")])}));var d=new o.default;d.autoTable({head:[["No","Agents","Location","Battery","Amount","Date"]],body:n});var l=d.internal.getNumberOfPages(),i=0;for(i=0;i<l;i++){d.setPage(i);var f=d.internal.getCurrentPageInfo().pageNumber;d.setFontSize(12),d.text("page: "+f+"/"+l,10,d.internal.pageSize.height-10)}var m=Date(),v=l;for(i=1;i<=v;i++)d.setPage(i),d.setTextColor(150),d.setFontSize(7),d.text(50,d.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(m));d.save("batteries.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:case"end":return e.stop()}}),e)})))()},getPdfToday:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading=!0,e.next=5,t.$axios.$get("v1/battery/pdf/today",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.mem_no,element.source,element.battery_code1,element.amount,c()(element.createdAt).format("MMM, ddd D. YYYY h:mm A")])}));var d=new o.default;d.autoTable({head:[["No","Agents","Location","Battery","Amount","Date"]],body:n});var l=d.internal.getNumberOfPages(),i=0;for(i=0;i<l;i++){d.setPage(i);var f=d.internal.getCurrentPageInfo().pageNumber;d.setFontSize(12),d.text("page: "+f+"/"+l,10,d.internal.pageSize.height-10)}var m=Date(),v=l;for(i=1;i<=v;i++)d.setPage(i),d.setTextColor(150),d.setFontSize(7),d.text(50,d.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(m));d.save("batteries.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading=!1;case 6:case"end":return e.stop()}}),e)})))()},getPdfMonth:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading_month=!0,e.next=5,t.$axios.$get("v1/battery/pdf/month",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.mem_no,element.source,element.battery_code1,element.amount,c()(element.createdAt).format("MMM, ddd D. YYYY h:mm A")])}));var d=new o.default;d.autoTable({head:[["No","Agents","Location","Battery","Amount","Date"]],body:n});var l=d.internal.getNumberOfPages(),i=0;for(i=0;i<l;i++){d.setPage(i);var f=d.internal.getCurrentPageInfo().pageNumber;d.setFontSize(12),d.text("page: "+f+"/"+l,10,d.internal.pageSize.height-10)}var m=Date(),v=l;for(i=1;i<=v;i++)d.setPage(i),d.setTextColor(150),d.setFontSize(7),d.text(50,d.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(m));d.save("batteries.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading_month=!1;case 6:case"end":return e.stop()}}),e)})))()},getPdfYear:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,t.btn_loading_year=!0,e.next=5,t.$axios.$get("v1/battery/pdf/year",{headers:{Authorization:"Token ".concat(r)}}).then((function(e){if(e.length>=1){t.$bvModal.hide("pdf-record"),t.pdfData=e;var r=t.pdfData,n=[];r.forEach((function(element,t,e){n.push([t+1,element.mem_no,element.source,element.battery_code1,element.amount,c()(element.createdAt).format("MMM, ddd D. YYYY h:mm A")])}));var d=new o.default;d.autoTable({head:[["No","Agents","Location","Battery","Amount","Date"]],body:n});var l=d.internal.getNumberOfPages(),i=0;for(i=0;i<l;i++){d.setPage(i);var f=d.internal.getCurrentPageInfo().pageNumber;d.setFontSize(12),d.text("page: "+f+"/"+l,10,d.internal.pageSize.height-10)}var m=Date(),v=l;for(i=1;i<=v;i++)d.setPage(i),d.setTextColor(150),d.setFontSize(7),d.text(50,d.internal.pageSize.height-10,"GECSS INVESTMENTS   -    CONFIDENTIAL      ".concat(m));d.save("batteries.pdf"),Swal.fire({icon:"success",title:"Pdf downloaded successfully"}),t.create_record={}}else{t.$bvModal.hide("pdf-record");Swal.fire({icon:"error",title:"Oops.!!! No record found, please enter dates again."}),t.create_record={}}}));case 5:t.btn_loading_year=!1;case 6:case"end":return e.stop()}}),e)})))()}},props:{}},f=(r(597),r(12)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pdf-filter-btn"},[e("div",[t.btn_loading?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getPdfToday()}}},[t._v("Today")])],1),t._v(" "),e("div",[t.btn_loading_month?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getPdfMonth()}}},[t._v("This month")])],1),t._v(" "),e("div",[t.btn_loading_year?e("b-button",{attrs:{variant:"outline-primary",disabled:"",squared:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1):e("b-button",{attrs:{variant:"outline-primary",squared:""},on:{click:function(e){return t.getPdfYear()}}},[t._v("This year")])],1)]),t._v(" "),e("hr"),t._v(" "),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.pdfGenerate.apply(null,arguments)}}},[e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("Start Date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.create_record.fromdate,callback:function(e){t.$set(t.create_record,"fromdate",e)},expression:"create_record.fromdate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-expand@m"},[e("label",{staticStyle:{color:"#1a1a1a"}},[t._v("End date.")]),t._v(" "),e("b-form-input",{attrs:{type:"date",required:""},model:{value:t.create_record.todate,callback:function(e){t.$set(t.create_record,"todate",e)},expression:"create_record.todate"}})],1)]),t._v(" "),e("br"),t._v(" "),e("SbButton",{attrs:{title:"Download PDF"}}),t._v(" "),e("br")],1)],1)}),[],!1,null,"89614b82",null);e.default=component.exports},774:function(t,e,r){"use strict";r(618)},775:function(t,e,r){var n=r(37)(!1);n.push([t.i,"\n.status-btn[data-v-6d0e6bee]{\n\tborder-radius: 0px !important;\n\tpadding: 0px 2px 0px 2px !important;\n\tfont-size: 12px !important;\n\twidth: 80px !important;\n}\n",""]),t.exports=n},816:function(t,e,r){"use strict";r.r(e);r(16),r(3),r(2),r(11),r(156);var n=r(30),o=(r(45),r(64),r(203)),table=r(677),d=r(678),view=r(679),c=r(680),l=r(681),f=r(436),m=r.n(f),v={layout:"default_common",components:{RecordTable:table.default,Button:o.default,CreateRecord:d.default,RecordView:view.default,RecordUpdate:c.default,PdfRecord:l.default},data:function(){return{records:[],recordbyId:{},status:"9",depleted:"Depleted",issued:"Issued",record_spinner:!1,search:{queary:"",pageSearch:null,pageError:!1},pagination:{rows:null,perPage:null,rowperPage:null,currentPage:null,countOnPage:null,totalPages:null,fromCount:null,toCount:null},paginationLinks:{self:"",last:"",first:"",prev:""},global_pagination:{},perms:{perms_add:"",perms_view:"",perms_update:"",perms_delete:"",perms_restore:"",perms_status:""}}},filters:{diffForHumans:function(t){return t?m()(t).format("MMM, ddd D. YYYY h:mm A"):null}},mounted:function(){this.getRecordOnMount(),this.getPerms()},methods:{setLoadingTrue:function(){this.$refs.blockLoadingRefresh.stateLoading()},setLoadingFalse:function(){this.$refs.blockLoadingRefresh.stateNormal()},getPerms:function(){this.perms.perms_add="1",this.perms.perms_view="1",this.perms.perms_update="1",this.perms.perms_delete="1",this.perms.perms_restore="1",this.perms.perms_status="1"},getRecordOnMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/battery/swap").then((function(e){t.records=e}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecords:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=5,t.$axios.$get("v1/battery/swap").then((function(e){t.records=e}));case 5:t.setLoadingFalse();case 6:case"end":return e.stop()}}),e)})))()},getRecordById:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$bvModal.show("dmk-update-record"),e.record_spinner=!0,n=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+n,r.next=6,e.$axios.$get("v1/battery/swap/".concat(t)).then((function(t){e.recordbyId=t}));case 6:e.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},viewRecord:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.$bvModal.show("dmk-view-record"),e.record_spinner=!0,n=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+n,r.next=6,e.$axios.$get("v1/battery/swap/".concat(t)).then((function(t){e.recordbyId=t}));case 6:e.record_spinner=!1;case 7:case"end":return r.stop()}}),r)})))()},deleteRecord:function(t){var e=this,r=localStorage.getItem("token");this.$axios.defaults.headers.common.Authorization="Token "+r,Swal.fire({icon:"warning",title:"Do you want to delete selected record?",showCancelButton:!0,confirmButtonText:"Delete"}).then((function(r){r.isConfirmed?e.$axios.$delete("v1/battery/swap/delete/".concat(t)).then((function(t){if("false"==t.error){Swal.fire("Battery record deleted successfully","","success"),e.getRecords()}})):r.isDenied&&Swal.fire("Changes are not saved","","info")}))},searchRecords:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingTrue(),""==t.search.queary&&t.getRecordOnMount(),r=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+r,e.next=6,t.$axios.$get("v1/battery/swap/search/".concat(t.search.queary)).then((function(e){t.records=e}));case 6:t.setLoadingFalse();case 7:case"end":return e.stop()}}),e)})))()},updateRecordStatus:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=data.id,n={status:t.issued,battery_code1:data.battery_code1},o=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+o,e.next=6,t.$axios.post("v1/battery/swap/update/".concat(r),n).then((function(e){Swal.fire({icon:"success",title:"Battery status updated successfully"}),t.getRecords()}));case 6:case"end":return e.stop()}}),e)})))()},updateRecordStatusDepleted:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=data.id,n={status:t.depleted,battery_code1:data.battery_code1},o=localStorage.getItem("token"),t.$axios.defaults.headers.common.Authorization="Token "+o,e.next=6,t.$axios.post("v1/battery/swap/update/".concat(r),n).then((function(e){Swal.fire({icon:"success",title:"Battery status updated successfully"}),t.getRecords()}));case 6:case"end":return e.stop()}}),e)})))()},resetRecords:function(t){var e=this;this.$refs[t].stateLoading(),this.search={},this.getRecordOnMount(),setTimeout((function(){e.$refs[t].stateNormal()}),2e3)},addRecord:function(){this.$bvModal.show("add-record")},getpdf_form:function(){this.$bvModal.show("pdf-record")}},head:function(){return{title:"Gecss | Battery Swap"}}},h=(r(774),r(12)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content"},[e("base-block",{ref:"blockLoadingRefresh",staticClass:"block-mode-loading-refresh",attrs:{rounded:"",title:"Swap Battery","header-bg":"","btn-option-fullscreen":""},scopedSlots:t._u([{key:"options",fn:function(){return[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Download"},on:{click:t.getpdf_form}},[e("i",{staticClass:"fa fa-cloud-download-alt"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Refresh"},on:{click:function(e){return t.resetRecords("blockLoadingRefresh")}}},[e("i",{staticClass:"si si-refresh"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Add new record"},on:{click:t.addRecord}},[e("i",{staticClass:"si si-plus"})]),t._v(" "),e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-uk-tooltip":"Filter records"}},[e("i",{staticClass:"fa fa-filter"})])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"dmk-search-td-con"},[e("RowsFilter",{attrs:{rowsPerPage:t.rowsPerPage}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.pagination.rowperPage,expression:"pagination.rowperPage"}],staticStyle:{"text-align":"center"},attrs:{id:"rowsperPage"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pagination,"rowperPage",e.target.multiple?r:r[0])},function(e){return t.rowsPerPage()}]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),e("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),e("option",{attrs:{value:"100"}},[t._v("100")])])]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("form",{attrs:{method:"get"},on:{submit:function(e){return e.preventDefault(),t.searchRecords()}}},[e("div",{staticClass:"dmk-search-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search.queary,expression:"search.queary"}],staticClass:"form-control dmk-search-input",attrs:{type:"text",placeholder:"search "},domProps:{value:t.search.queary},on:{input:function(e){e.target.composing||t.$set(t.search,"queary",e.target.value)}}}),t._v(" "),e("button",{staticClass:"dmk-search-btn",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])],1),t._v(" "),e("RecordTable",{attrs:{records:t.records}},t._l(t.records,(function(r,n){return e("tr",{key:r.id,attrs:{id:"dmk-td-items"}},[e("td",{staticClass:"td-1st-nth"},[t._v(" "+t._s(n+1)+" ")]),t._v(" "),e("td",[t._v(t._s(r.source))]),t._v(" "),e("td",[t._v(t._s(r.mem_no))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(r.bike_no))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(r.battery_code1))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("Ksh "+t._s(r.amount))]),t._v(" "),e("td",[t._v(t._s(t._f("diffForHumans")(r.createdAt)))]),t._v(" "),e("td",{staticClass:"text-center"},[e("div",["Issued"==r.status?e("button",{staticClass:"btn status-btn btn-success dropdown-toggle",attrs:{id:r.id,type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),"Depleted"==r.status?e("button",{staticClass:"btn status-btn btn-warning dropdown-toggle",attrs:{id:r.id,type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t"+t._s(r.status)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),e("ul",{staticClass:"dropdown-menu dropdown-menu-dark",attrs:{"aria-labelledby":r.id}},[e("li",{staticClass:"dropdown-item"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateRecordStatusDepleted(r)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.depleted,expression:"depleted"}],attrs:{hidden:""},domProps:{value:t.depleted},on:{input:function(e){e.target.composing||(t.depleted=e.target.value)}}}),t._v(" "),e("button",{staticClass:"dropdown-item",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-ban",staticStyle:{color:"orange"},attrs:{"aria-hidden":"true"}}),t._v(" Depleted")])])]),t._v(" "),e("li",{staticClass:"dropdown-item"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateRecordStatus(r)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.issued,expression:"issued"}],attrs:{hidden:""},domProps:{value:t.issued},on:{input:function(e){e.target.composing||(t.issued=e.target.value)}}}),t._v(" "),e("button",{staticClass:"dropdown-item",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-check-circle",staticStyle:{color:"green"},attrs:{"aria-hidden":"true"}}),t._v(" Issued")])])])])])]),t._v(" "),e("td",[e("EDropdown",{attrs:{statusCode:r.status,Id:r.id,deleteRecord:t.deleteRecord,restoreRecord:t.restoreRecord,getRecordById:t.viewRecord,getRecordUpdateById:t.getRecordById,perms_view:t.perms.perms_view,perms_update:t.perms.perms_update,perms_delete:t.perms.perms_delete,perms_restore:t.perms.perms_restore}})],1)])})),0),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{}),t._v(" "),e("DcPagination",{attrs:{countOnPage:this.pagination.countOnPage,rows:this.pagination.rows,fromCount:this.pagination.fromCount,toCount:this.pagination.toCount,rowperPage:this.pagination.rowperPage,currentPage:this.pagination.currentPage,totalPages:this.pagination.totalPages,previousPage:t.previousPage,nextPage:t.nextPage,searchPageNo:t.searchPageNo}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pagination.currentPage,expression:"pagination.currentPage"}],staticClass:"dmk-searpage-input",staticStyle:{"text-align":"center"},attrs:{type:"number"},domProps:{value:t.pagination.currentPage},on:{input:function(e){e.target.composing||t.$set(t.pagination,"currentPage",e.target.value)}}})])],1)],1),t._v(" "),e("OuModal",{attrs:{mdId:"add-record",size:"md",title:"Issue Battery"}},[e("CreateRecord",{attrs:{getRecords:t.getRecords}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"pdf-record",size:"md",title:"Battery Reports"}},[e("PdfRecord",{attrs:{getRecords:t.getRecords}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"dmk-view-record",size:"md",title:"Battery Details",modalSpinner:t.record_spinner}},[e("RecordView",{attrs:{recordbyId:t.recordbyId}})],1),t._v(" "),e("OuModal",{attrs:{mdId:"dmk-update-record",size:"md",title:"Update Battery Details",modalSpinner:t.record_spinner}},[e("RecordUpdate",{attrs:{recordbyId:t.recordbyId,getRecords:t.getRecords}})],1)],1)])}),[],!1,null,"6d0e6bee",null);e.default=component.exports;installComponents(component,{BaseBlock:r(302).default})}}]);