(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var a=t("fb1c"),r=t.n(a);r.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("a114"),t("d14b"),t("1e5d"),t("7e6d");var a=t("2b0e"),r=t("e84f"),i=t("7051"),o=t("2040"),s=t("cf12"),u=t("46a9"),p=t("32a1"),c=t("f30c"),l=t("ce67"),f=t("482e"),d=t("52b5"),m=t("1180"),b=t("1e55"),v=t("506f"),h=t("b8d9"),g=t("7d43"),Q=t("1526"),w=t("133b");a["a"].use(r["a"],{config:{},components:{QLayout:i["a"],QLayoutHeader:o["a"],QLayoutDrawer:s["a"],QPageContainer:u["a"],QPage:p["a"],QToolbar:c["a"],QToolbarTitle:l["a"],QBtn:f["a"],QIcon:d["a"],QList:m["a"],QListHeader:b["a"],QItem:v["a"],QItemMain:h["a"],QItemSide:g["a"]},directives:{Ripple:Q["a"]},plugins:{Notify:w["a"]}});var y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},I=[];y._withStripped=!0;var A={name:"App"},L=A,x=(t("034f"),t("2877")),S=Object(x["a"])(L,y,I,!1,null,null,null);S.options.__file="App.vue";var B=S.exports,C=t("8c4f"),T=[{path:"/",component:function(){return t.e("4526fd9a").then(t.bind(null,"8e31"))},children:[{path:"",component:function(){return t.e("081cfd72").then(t.bind(null,"8b24"))}}]}];T.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var _=T;a["a"].use(C["a"]);var k=function(){var e=new C["a"]({scrollBehavior:function(){return{y:0}},routes:_,mode:"hash",base:""});return e},q=function(){var e="function"===typeof k?k({}):k,n={el:"#q-app",router:e,render:function(e){return e(B)}};return{app:n,router:e}},P=t("9224"),U=function(e){var n=e.Vue;n.prototype.$pkg=P},j=t("0ff2"),z=t("8aa5"),D=t.n(z),E={timestampsInSnapshots:!0};console.log("Loading Firebase");var F={apiKey:"AIzaSyA421a6haqAA3dSQU1TUCPUTFCIPwmWiWE",authDomain:"barnstorm-online.firebaseapp.com",databaseURL:"https://barnstorm-online.firebaseio.com",projectId:"barnstorm-online",storageBucket:"",messagingSenderId:"244330504376"};D.a.initializeApp(F);var J=D.a.firestore();J.settings(E);var N=function(e){var n=e.Vue;n.use(j["a"]),n.prototype.$db=J},O=q(),V=O.app,$=O.router;[U,N].forEach(function(e){e({app:V,router:$,Vue:a["a"],ssrContext:null})}),new a["a"](V)},"7e6d":function(e,n,t){},9224:function(e){e.exports={name:"@barnstorm/multi-tenant",version:"0.0.1",description:"Configurations for Barnstorm Online",productName:"Barnstorm Online Admin",cordovaId:"online.barnstorm.configurator",author:"Michael J Feher <github@phearzero.com>",private:!0,scripts:{lint:"eslint --ext .js,.vue src",test:'echo "No test specified" && exit 0'},dependencies:{firebase:"^5.5.6",vuefire:"^2.0.0-alpha.15"},devDependencies:{"babel-eslint":"^8.2.1","cross-env":"^5.2.0",eslint:"^4.18.2","eslint-config-standard":"^11.0.0","eslint-friendly-formatter":"^4.0.1","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.7.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.3.0","quasar-cli":"^0.17.0","strip-ansi":"=3.0.1"},engines:{node:">= 8.9.0",npm:">= 5.6.0",yarn:">= 1.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}},fb1c:function(e,n,t){}},[[0,"runtime","vendor"]]]);