(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2489:function(t,e,n){"use strict";(function(t){n("628f"),n("921b");var e=a(n("66fd")),o=a(n("8c18")),r=a(n("6661")),u=a(n("7e00"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=r.default,e.default.prototype.$config=u.default;var l=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"79d2"))};e.default.component("cu-custom",l),e.default.config.productionTip=!1,Date.prototype.format=function(t){if(""==t)return"";var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},o.default.mpType="app";var f=new e.default(c({store:r.default},o.default));t(f).$mount()}).call(this,n("6e42")["createApp"])},"45b0":function(t,e,n){},5833:function(t,e,n){"use strict";var o=n("45b0"),r=n.n(o);r.a},"8c18":function(t,e,n){"use strict";n.r(e);var o=n("be19");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("5833");var u,a,c=n("2877"),i=Object(c["a"])(o["default"],u,a,!1,null,null,null);e["default"]=i.exports},be19:function(t,e,n){"use strict";n.r(e);var o=n("e991"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},e991:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("66fd"));function u(t){return t&&t.__esModule?t:{default:t}}var a={onLaunch:function(){t.getSystemInfo({success:function(t){r.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?r.default.prototype.CustomBar=t.statusBarHeight+50:r.default.prototype.CustomBar=t.statusBarHeight+45}})},onShow:function(){console.warn(o("App Show process.env.NODE_ENV：production"," at App.vue:34"))},onHide:function(){console.log(o("App Hide"," at App.vue:40"))},onError:function(t){console.error(o("ERP App onError...:"+t," at App.vue:46"))}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["2489","common/runtime","common/vendor"]]]);