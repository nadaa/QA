(function(t){function e(e){for(var a,o,u=e[0],i=e[1],c=e[2],d=0,p=[];d<u.length;d++)o=u[d],s[o]&&p.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,u=1;u<n.length;u++){var i=n[u];0!==s[i]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},r=[],o=(n("034f"),n("2877")),u={},i=Object(o["a"])(u,s,r,!1,null,null,null);i.options.__file="App.vue";var c=i.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Auth")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("br"),n("div",{staticClass:"container"},[n("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{md:"6"}},[n("b-card",{staticClass:"card-login"},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",[n("button",{on:{click:t.handleSignup}},[t._v("Signup")])]),n("b-col",[n("button",{on:{click:t.handleSignin}},[t._v("Signin")])]),n("br"),n("br"),n("br"),n("br")],1),n("b-row",{staticClass:"user-pass",attrs:{"align-h":"center"}},[n("b-col",{attrs:{md:"3"}},[n("b",[t._v("Username")])]),n("b-col",{attrs:{md:"6"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{name:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])],1),n("br"),n("b-row",{staticClass:"user-pass",attrs:{"align-h":"center"}},[n("b-col",{attrs:{md:"3"}},[n("b",[t._v("Password")])]),n("b-col",{attrs:{md:"6"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])],1)],1)],1)],1)],1)],1)])},m=[],b=n("bc3a"),v=n.n(b),_=function(){return v.a.create({baseURL:"0.0.0.0:8001"})},g=n("2f62");a["a"].use(g["a"]);var h=new g["a"].Store({state:{loggedinUser:"global user"},mutations:{updateLoggedUser:function(t,e){t.loggedinUser=e}},actions:{},getters:{get_loggedinUser:function(t){return t.loggedinUser}}}),q={name:"auth",data:function(){return{username:"",password:""}},methods:{handleSignup:function(){_().post("/signup",{username:this.username,password:this.password}).then(function(t){return alert(t.data.msg)})},handleSignin:function(){var t=this;_().post("/signin",{username:this.username,password:this.password}).then(function(e){"Loggedin successfully"===e.data.msg?("admin"===t.username?t.$router.push("/qaa"):t.$router.push("/qao"),h.commit("updateLoggedUser",t.username)):alert(e.data.msg)})}}},w=q,y=(n("a2c6"),Object(o["a"])(w,f,m,!1,null,"31753366",null));y.options.__file="Auth.vue";var k=y.exports,x={name:"home",components:{Auth:k}},O=x,j=Object(o["a"])(O,d,p,!1,null,null,null);j.options.__file="Home.vue";var S=j.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"logout",attrs:{to:"/"}},[t._v("Logout")]),n("b-container",t._l(t.questions,function(e,a){return n("b-row",{key:a,attrs:{value:e.askedby}},[n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b",[t._v(t._s(e.askedby)+": ")]),t._v(t._s(e.quest))])],1),n("br"),n("br"),n("b-row",[n("b-col",{attrs:{md:"11"}},[n("input",{attrs:{name:"answer"},on:{change:function(e){t.handle_input(e.target.value,a)}}})]),n("b-col",{attrs:{md:"1"}},[n("button",{staticClass:"answer-btn",on:{click:function(e){t.handle_answer_pressed(a)}}},[t._v("Answer")])])],1)],1)}))],1)},A=[],P={name:"qaadmin",data:function(){return{questions:[],answer:""}},beforeMount:function(){var t=this;_().get("/qs").then(function(e){t.questions=e.data.questions})},computed:{loggedin:function(){return h.getters.get_loggedinUser}},methods:{handle_answer_pressed:function(t){_().post("/aq",{quest:this.questions[t].quest,askedby:this.questions[t].askedby,ans:this.questions[t].ans}).then(function(t){return console.log(t.data)})},handle_input:function(t,e){this.questions[e].ans=t},handle_logout:function(){this.$router.push("/")}}},U=P,$=(n("cc64"),Object(o["a"])(U,C,A,!1,null,"d581345c",null));$.options.__file="QAAdmin.vue";var L=$.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"logout"},[n("router-link",{attrs:{to:"/"}},[t._v("Logout")])],1),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.q_to_send,expression:"q_to_send"}],attrs:{name:"q_to_send",required:""},domProps:{value:t.q_to_send},on:{input:function(e){e.target.composing||(t.q_to_send=e.target.value)}}}),n("button",{on:{click:t.handle_question_send}},[t._v("Ask")])]),n("br"),n("br"),n("div",{staticClass:"question"},[n("b",[t._v(t._s(t.asked_by)+": ")]),t._v(" "+t._s(t.asked_q)+"\n    ")]),n("div",{staticClass:"answer"},[n("b",[t._v("Admin: ")]),t._v(" "+t._s(t.ans)+"\n    ")])])},E=[],N={name:"qaother",data:function(){return{q_to_send:"",asked_by:"",asked_q:"",ans:""}},beforeMount:function(){var t=this;_().get("/lastq").then(function(e){t.asked_by=e.data.question[0].askedby,t.asked_q=e.data.question[0].quest,t.ans=e.data.question[0].ans})},computed:{loggedin:function(){return h.getters.get_loggedinUser}},methods:{handle_question_send:function(){_().post("/newq",{quest:this.q_to_send,askedby:this.loggedin,ans:""}).then(function(t){return alert(t.data.msg)})}}},T=N,J=(n("7333"),Object(o["a"])(T,M,E,!1,null,"19320870",null));J.options.__file="QAOther.vue";var Q=J.exports;a["a"].use(l["a"]);var H=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S},{path:"/qaa",name:"qaadmiin",component:L},{path:"/qao",name:"qaother",component:Q}]}),R=n("9f7b");n("f9e3"),n("2dd8");a["a"].config.productionTip=!1,a["a"].use(R["a"]),new a["a"]({router:H,store:h,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,n){},7333:function(t,e,n){"use strict";var a=n("96a4"),s=n.n(a);s.a},"96a4":function(t,e,n){},a2c6:function(t,e,n){"use strict";var a=n("cf5a"),s=n.n(a);s.a},bdbb:function(t,e,n){},cc64:function(t,e,n){"use strict";var a=n("bdbb"),s=n.n(a);s.a},cf5a:function(t,e,n){}});
//# sourceMappingURL=app.d3d75d13.js.map
