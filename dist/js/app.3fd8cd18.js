(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-38ea516a":"c66e5ee2","chunk-e273fde6":"f127673e","chunk-1394fb20":"3383a087","chunk-2d2306e5":"9f6acc14","chunk-558f2e9e":"9a64dd7a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-38ea516a":1,"chunk-e273fde6":1,"chunk-558f2e9e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-38ea516a":"31199919","chunk-e273fde6":"55648386","chunk-1394fb20":"31d6cfe0","chunk-2d2306e5":"31d6cfe0","chunk-558f2e9e":"d007547c"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),o=n.n(a),i={},s=o.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("main-layout")],1)},c=[],l=(n("a4d3"),n("4de4"),n("4160"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{key:e.login,attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{Link:"",to:"/"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Домой")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Связаться с нами")])],1)],1),e.isAuthorized?e._e():n("v-list-item",{attrs:{link:"",to:"/reg"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-clipboard-account")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Регистрация")])],1)],1),e.isAuthorized?e._e():n("v-list-item",{attrs:{link:"",to:"/auth"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-login")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Войти")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("NewsApp")]),e.isAuthorized?n("v-toolbar-items",{staticClass:"d-flex align-center ml-auto"},[n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{color:"white",dark:"",text:""}},r),[e._v(" Привет, "+e._s(e.name)+" ")])]}}],null,!1,2020401220)},[n("v-list",[e._l(e.filteredOptions,(function(t,r){return n("v-list-item",{key:r,attrs:{link:"",to:t.link}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-title",[e._v(e._s(t.title))])],1)})),e.isAuthorized?n("v-list-item",{attrs:{link:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-exit-to-app")])],1),n("v-list-item-title",[n("v-list-item-title",[e._v("Выйти")])],1)],1):e._e()],2)],1)],1)]):e._e()],1),n("v-content",[n("v-container",{staticClass:"full-height",attrs:{fluid:""}},[n("router-view")],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Вы уверены?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Нет ")]),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.userExit()}}},[e._v(" Да ")])],1)],1)],1)],1),n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[e._v("BidloDevs© 2019")])])],1)},d=[],m=n("2f62"),p=n("b76c"),v=n("5b21");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={props:{source:String},data:function(){return{drawer:null,dialog:!1}},computed:g({},Object(m["b"])(["login","name","isAuthorized","adminMenuOptions","role","isAdmin"]),{filteredOptions:function(){var e=this;return this.adminMenuOptions.filter((function(){return!!e.isAdmin}))}}),methods:{userExit:function(){this.dialog=!1,this.setLocalStorageUserData({login:"",name:"",role:""}),this.setUserParams("","","")}},mixins:[p["a"],v["a"]]},w=b,y=n("2877"),k=n("6544"),O=n.n(k),P=n("7496"),S=n("40dc"),_=n("5bc1"),x=n("8336"),j=n("b0af"),A=n("99d9"),E=n("a523"),C=n("a75b"),V=n("169a"),N=n("553a"),I=n("132d"),D=n("8860"),L=n("da13"),F=n("1800"),M=n("5d23"),z=n("e449"),$=n("f774"),U=n("2fa4"),T=n("2a7f"),B=Object(y["a"])(w,f,d,!1,null,null,null),q=B.exports;function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}O()(B,{VApp:P["a"],VAppBar:S["a"],VAppBarNavIcon:_["a"],VBtn:x["a"],VCard:j["a"],VCardActions:A["a"],VCardTitle:A["c"],VContainer:E["a"],VContent:C["a"],VDialog:V["a"],VFooter:N["a"],VIcon:I["a"],VList:D["a"],VListItem:L["a"],VListItemAction:F["a"],VListItemContent:M["a"],VListItemTitle:M["b"],VMenu:z["a"],VNavigationDrawer:$["a"],VSpacer:U["a"],VToolbarItems:T["a"],VToolbarTitle:T["b"]});var H={data:function(){return{createdCounter:0}},computed:R({},m["b"]["name"],{createdOnce:function(){return 1===this.createdCounter}}),methods:{getNews:function(){return o.a.get("https://spring-boot-rest-api-app.herokuapp.com/getAll")}},components:{"main-layout":q},mixins:[p["a"]],created:function(){var e=this;this.createdCounter++,this.setUserParamsFromLocalStorage(),this.createdOnce&&this.getNews().then((function(t){e.$store.dispatch("addNews",t.data)}))}},J=H,W=(n("5c0b"),Object(y["a"])(J,u,c,!1,null,null,null)),K=W.exports,G=n("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Q=n("8c4f");r["a"].use(Q["a"]);var X=[{path:"/",name:"Home",meta:{layout:"main"},component:function(){return n.e("chunk-38ea516a").then(n.bind(null,"57da"))}},{path:"/reg",name:"Reg",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-e273fde6"),n.e("chunk-1394fb20")]).then(n.bind(null,"35fe"))}},{path:"/auth",name:"Auth",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-e273fde6"),n.e("chunk-2d2306e5")]).then(n.bind(null,"ebf8"))}},{path:"/create",name:"Create",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-e273fde6"),n.e("chunk-558f2e9e")]).then(n.bind(null,"770f"))}}],Y=new Q["a"]({mode:"history",routes:X}),ee=Y,te={state:{userParams:{login:"",name:"",role:""}},getters:{login:function(e){return e.userParams.login},name:function(e){return e.userParams.name},role:function(e){return e.userParams.role},isAuthorized:function(e){return!!e.userParams.login},isAdmin:function(e){return"ADMIN"===e.userParams.role}},mutations:{mutateUserParams:function(e,t){for(var n in e.userParams)r["a"].set(e.userParams,n,t[n])}},actions:{changeUserParams:function(e,t){e.commit("mutateUserParams",t)}}},ne={state:{regInfo:[{value:"",label:"Login",title:"Логин",commonError:"Логин должен начинаться с буквы и состоять из латинских букв.",pattern:/^[a-zA-Z][a-zA-Z0-9-.]{1,20}$/,requestName:"checkLogin",existsError:"Такой логин уже есть!",errorStatus:!0,type:"text"},{value:"",label:"Name",title:"Имя",pattern:/^[a-zA-Z]+$/,commonError:"Имя должно состоять из латинских букв.",requestName:"",existsError:"",errorStatus:!0,type:"text"},{value:"",label:"Email",title:"Почта",pattern:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,commonError:"Некорректная почта.",requestName:"checkEmail",existsError:"Такая почта уже есть!",errorStatus:!0,type:"email"},{value:"",label:"Password",title:"Пароль",pattern:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,commonError:"Пароль должен иметь минимум 8 символов, 1 заглавную букву и состоять из латинских букв и знаков",requestName:"",existsError:"",errorStatus:!0,type:"password"},{value:"",label:"Confirm password",title:"Подтвердите пароль",pattern:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,requestName:"",existsError:"",errorStatus:!0,type:"password"}]},getters:{regInfo:function(e){return e.regInfo}},mutations:{mutateRegInfoValue:function(e,t){var n=t.index,r=t.value;e.regInfo[n].value=r},mutateErrorStatus:function(e,t){var n=t.status,r=t.index;e.regInfo[r].errorStatus=n}},actions:{changeRegInfoValue:function(e,t){e.commit("mutateRegInfoValue",t)},changeErrorStatus:function(e,t){e.commit("mutateErrorStatus",t)}}},re={state:{authInfo:[{label:"Login",title:"Логин",value:"",type:"text",isFilled:!1},{label:"Password",title:"Пароль",value:"",type:"password",isFilled:!1}],errorStatus:!1},getters:{authInfo:function(e){return e.authInfo},errorStatus:function(e){return e.errorStatus}},mutations:{mutateFieldValue:function(e,t){var n=t.index,r=t.value;e.authInfo[n].value=r},mutateIsFilledStatus:function(e,t){var n=t.index,r=t.status;e.authInfo[n].isFilled=r},mutateAuthErrorStatus:function(e,t){var n=t;e.errorStatus=n}},actions:{changeFieldValue:function(e,t){e.commit("mutateFieldValue",t)},changeIsFilledStatus:function(e,t){e.commit("mutateIsFilledStatus",t)},changeAuthErrorStatus:function(e,t){e.commit("mutateAuthErrorStatus",t)}}},ae=(n("26e9"),n("fb6a"),n("a434"),{state:{news:[]},getters:{news:function(e){return e.news}},mutations:{addNewsMutation:function(e,t){t.forEach((function(t){e.news.push(t)})),e.news=e.news.slice().reverse()},deleteNewsMutation:function(e,t){e.news.splice(t,1)}},actions:{addNews:function(e,t){e.commit("addNewsMutation",t)},deleteNews:function(e,t){e.commit("deleteNewsMutation",t)}}}),oe={state:{adminMenuOptions:[{title:"Добавить новость",icon:"mdi-plus-box",link:"/create"}]},getters:{adminMenuOptions:function(e){return e.adminMenuOptions}}};r["a"].use(m["a"]);var ie=new m["a"].Store({state:{},mutations:{},actions:{},modules:{app:te,reg:ne,auth:re,news:ae,adminMenu:oe}}),se=n("f309");r["a"].use(se["a"]);var ue={},ce=new se["a"](ue),le=n("1dce"),fe=n.n(le);r["a"].use(fe.a),r["a"].config.productionTip=!1,new r["a"]({router:ee,store:ie,vuetify:ce,vuelidate:void 0,render:function(e){return e(K)}}).$mount("#app")},"5b21":function(e,t,n){"use strict";n("d81d"),n("45fc");t["a"]={methods:{getCollectionData:function(e,t){return this[e].map((function(e){return e[t]}))},checkCollectionData:function(e,t,n){return this[e].some((function(e){return e[t]===n}))}}}},"5c0b":function(e,t,n){"use strict";var r=n("91cd"),a=n.n(r);a.a},"91cd":function(e,t,n){},b76c:function(e,t,n){"use strict";n("b0c0");t["a"]={methods:{setLocalStorageUserData:function(e){for(var t in e)localStorage[t]=e[t]},setUserParams:function(e){var t=e.login,n=e.name,r=e.role;this.$store.dispatch("changeUserParams",{login:t,name:n,role:r})},setUserParamsFromLocalStorage:function(){if(localStorage.login){var e=localStorage.login,t=localStorage.name,n=localStorage.role;this.setUserParams({login:e,name:t,role:n})}},sendDataButtonClicked:function(){var e=this;this.$router.push("/",(function(){e.setUserParamsFromLocalStorage()}))},authorize:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"READER";this.setLocalStorageUserData({login:e,name:t,role:n}),this.sendDataButtonClicked()}}}}});
//# sourceMappingURL=app.3fd8cd18.js.map