(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1117:function(e,t,o){"use strict";o(915)},1118:function(e,t,o){var r=o(42)(!1);r.push([e.i,"\n#tsparticles[data-v-02dcf6b5]{\n      height: 100vh;\n      width: 100%;\n}\n",""]),e.exports=r},1192:function(e,t,o){"use strict";o.r(t);var r=o(33),n=(o(72),o(842)),l=o(843),c={layout:"empty",mixins:[n.validationMixin],data:function(){return{form:{username:null,password:null},err:""}},validations:{form:{username:{required:l.required,minLength:Object(l.minLength)(3)},password:{required:l.required,minLength:Object(l.minLength)(5)}}},mounted:function(){this.getAnimation()},methods:{submitForm:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$axios.defaults.headers.common.Authorization="",localStorage.removeItem("token"),o={username:e.form.username,password:e.form.password},t.next=5,e.$axios.$post("v1/auth/login",o).then((function(t){if(t.token){var o=t.token;e.$store.commit("setToken",o),e.$axios.defaults.headers.common.Authorization="Token "+o,localStorage.setItem("token",o);var r=e.$route.query.to||"/dashboard";e.$router.push(r)}else e.err="Unable to log in with provided credentials."}));case 5:case"end":return t.stop()}}),t)})))()},getAnimation:function(){tsParticles.load("tsparticles",{fpsLimit:60,particles:{number:{value:180,density:{enable:!0,value_area:800}},color:{value:"#ff0000",animation:{enable:!0,speed:20,sync:!0}},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:3,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}},links:{enable:!0,distance:100,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:.8},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,background:{color:"#339966",image:"",position:"50% 50%",repeat:"no-repeat",size:"cover"}})}}},d=(o(1117),o(12)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"tsparticles"}},[t("div",{staticClass:"hero-static"},[t("div",{staticClass:"content"},[t("b-row",{staticClass:"justify-content-center"},[t("b-col",{attrs:{md:"8",lg:"6",xl:"4"}},[t("base-block",{staticClass:"mb-0",attrs:{rounded:"",themed:"","header-class":"bg-primary-dark",title:"Sign In"},scopedSlots:e._u([{key:"options",fn:function(){return[t("router-link",{staticClass:"btn-block-option font-size-sm",attrs:{to:"/auth/login"}},[e._v("Forgot Password?")]),e._v(" "),t("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.nofade.left",value:"New Account",expression:"'New Account'",modifiers:{hover:!0,nofade:!0,left:!0}}],staticClass:"btn-block-option",attrs:{to:"/auth/login"}},[t("i",{staticClass:"fa fa-user-plus"})])]},proxy:!0}])},[e._v(" "),t("div",{staticClass:"p-sm-3 px-lg-4 py-lg-5"},[t("h1",{staticClass:"h2 mb-1"},[e._v("GECSS")]),e._v(" "),t("p",{staticClass:"text-muted"},[e._v("\n              Welcome, please login.\n            ")]),e._v(" "),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("div",{staticClass:"py-3"},[t("div",{staticClass:"form-group"},[t("b-form-input",{staticClass:"form-control-alt",attrs:{size:"lg",id:"username",name:"username",placeholder:"Username","aria-describedby":"username-feedback"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e._v(" "),t("div")],1),e._v(" "),t("div",{staticClass:"form-group"},[t("b-form-input",{staticClass:"form-control-alt",attrs:{type:"password",size:"lg",id:"password",name:"password",placeholder:"Password","aria-describedby":"password-feedback"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),t("div",{staticClass:"form-group"},[t("b-form-checkbox",{attrs:{id:"remember",name:"remember"}},[e._v("Remember Me")])],1)]),e._v(" "),t("b-row",{staticClass:"form-group"},[t("b-col",{attrs:{md:"6",xl:"5"}},[t("b-button",{attrs:{type:"submit",variant:"alt-primary",block:""}},[t("i",{staticClass:"fa fa-fw fa-sign-in-alt mr-1"}),e._v(" Sign In\n                  ")])],1)],1)],1)],1)])],1)],1)],1),e._v(" "),t("div",{staticClass:"content content-full font-size-sm text-muted text-center"},[t("strong",[e._v(e._s(e.$store.getters.appName+" "+e.$store.getters.appVersion))]),e._v(" © "+e._s(e.$store.getters.appCopyright)+"\n  ")])])])}),[],!1,null,"02dcf6b5",null);t.default=component.exports;installComponents(component,{BaseBlock:o(407).default})},915:function(e,t,o){var content=o(1118);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("8577ff3c",content,!0,{sourceMap:!1})}}]);