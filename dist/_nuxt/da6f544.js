(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{597:function(e,r,t){"use strict";t.r(r);var o=t(29),c=(t(65),{name:"CreateRecord",data:function(){return{create_record:{username:"",first_name:"",last_name:"",password:"",conf_password:""},username_err:"",password_err:""}},methods:{formSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t={username:e.create_record.username,first_name:e.create_record.first_name,last_name:e.create_record.last_name,password:e.create_record.password},e.create_record.password==e.create_record.conf_password){r.next=5;break}e.password_err="Incorrect confirmation password",r.next=9;break;case 5:return o=localStorage.getItem("token"),e.$axios.defaults.headers.common.Authorization="Token "+o,r.next=9,e.$axios.$post("v1/auth/register",t).then((function(r){if(0==r.error){e.$bvModal.hide("add-record");Swal.fire({icon:"success",title:"Customer added successfully"}),e.getRecords(),e.create_record={}}r.username&&(e.username_err="A user with that member number already exists")}));case 9:case"end":return r.stop()}}),r)})))()}},props:{getRecords:{type:Function,default:null}}}),n=t(13),component=Object(n.a)(c,(function(){var e=this,r=e._self._c;return r("div",[r("b-form",{on:{submit:function(r){return r.preventDefault(),e.formSubmit.apply(null,arguments)}}},[r("div",{attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-expand@m"},[r("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Member Number")]),e._v(" "),r("b-form-input",{attrs:{required:""},model:{value:e.create_record.username,callback:function(r){e.$set(e.create_record,"username",r)},expression:"create_record.username"}}),e._v(" "),e.username_err?r("div",[r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.username_err))])]):e._e()],1)]),e._v(" "),r("br"),e._v(" "),r("div",{attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-expand@m"},[r("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Firstname")]),e._v(" "),r("b-form-input",{attrs:{required:""},model:{value:e.create_record.first_name,callback:function(r){e.$set(e.create_record,"first_name",r)},expression:"create_record.first_name"}})],1),e._v(" "),r("div",{staticClass:"uk-width-expand@m"},[r("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Lastname")]),e._v(" "),r("b-form-input",{attrs:{required:""},model:{value:e.create_record.last_name,callback:function(r){e.$set(e.create_record,"last_name",r)},expression:"create_record.last_name"}})],1)]),e._v(" "),r("br"),e._v(" "),r("div",{attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-expand@m"},[r("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Password")]),e._v(" "),r("b-form-input",{attrs:{type:"password",required:""},model:{value:e.create_record.password,callback:function(r){e.$set(e.create_record,"password",r)},expression:"create_record.password"}})],1),e._v(" "),r("div",{staticClass:"uk-width-expand@m"},[r("label",{staticStyle:{color:"#1a1a1a"}},[e._v("Confirm Password")]),e._v(" "),r("b-form-input",{attrs:{type:"password",required:""},model:{value:e.create_record.conf_password,callback:function(r){e.$set(e.create_record,"conf_password",r)},expression:"create_record.conf_password"}}),e._v(" "),e.password_err?r("div",[r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.password_err))])]):e._e()],1)]),e._v(" "),r("br"),e._v(" "),r("SbButton"),e._v(" "),r("br")],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);