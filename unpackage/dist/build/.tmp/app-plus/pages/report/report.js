(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/report"],{"3eec":function(e,r,t){"use strict";t.r(r);var n=t("e74a"),a=t("4318");for(var u in a)"default"!==u&&function(e){t.d(r,e,function(){return a[e]})}(u);var o,c=t("f0c5"),i=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);r["default"]=i.exports},4318:function(e,r,t){"use strict";t.r(r);var n=t("4de8"),a=t.n(n);for(var u in n)"default"!==u&&function(e){t.d(r,e,function(){return n[e]})}(u);r["default"]=a.a},"4de8":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;t("2f62");var n=a(t("2464"));function a(e){return e&&e.__esModule?e:{default:e}}var u={name:"reportMenu",mixins:[n.default],data:function(){return{allMenuList:[]}},onReady:function(){this.allMenuList=this.menuList},methods:{turnToPage:function(r){switch(r){case"compfactorykanban":e.navigateTo({url:"./compfactorykanban/compfactorykanban"});break;case"deliveryQuery":e.navigateTo({url:"./deliveryquery/deliveryquery"});break;case"PaperOrderQuery":e.navigateTo({url:"./paperorderquery/paperorderquery"});break;case"SumOfCustArrears":e.navigateTo({url:"./sumofcustarrears/sumofcustarrears"});break;default:e.showToast({title:"找不到指定路径，请确认！",icon:"none",duration:2e3});break}}}};r.default=u}).call(this,t("6e42")["default"])},e74a:function(e,r,t){"use strict";var n,a=function(){var e=this,r=e.$createElement,t=(e._self._c,e.__map(e.allMenuList.report,function(r,t){var n=e.__map(r.children,function(r,t){var n=e.getImgUrl(r.data.resIcon);return{$orig:e.__get_orig(r),m0:n}});return{$orig:e.__get_orig(r),l0:n}}));e.$mp.data=Object.assign({},{$root:{l1:t}})},u=[];t.d(r,"b",function(){return a}),t.d(r,"c",function(){return u}),t.d(r,"a",function(){return n})},e8b5:function(e,r,t){"use strict";(function(e){t("628f"),t("921b");n(t("66fd"));var r=n(t("3eec"));function n(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("6e42")["createPage"])}},[["e8b5","common/runtime","common/vendor"]]]);