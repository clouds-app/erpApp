(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-verify-originalPaper-originalPaper"],{"031f":function(t,e,n){"use strict";n.r(e);var i=n("a1ba"),a=n("0bfa");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("05a3");var r=n("2877"),u=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"3fbbac4f",null);e["default"]=u.exports},"05a3":function(t,e,n){"use strict";var i=n("4e83"),a=n.n(i);a.a},"0bfa":function(t,e,n){"use strict";n.r(e);var i=n("148a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},1363:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".card[data-v-3fbbac4f]{width:90%;margin-left:5%;border-radius:%?10?%;padding:%?30?%}.grid-title[data-v-3fbbac4f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.text-price[data-v-3fbbac4f]{color:#4aecdb;font-size:%?50?%}",""])},"148a":function(t,e,n){"use strict";var i=n("e54b"),a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("cebc")),r=i(n("491c")),u=a(n("2464")),s=n("2f62"),c={name:"originalPaper",mixins:[u.default],data:function(){return{dataList:[]}},mounted:function(){var t=this;this.loadData();uni.$on(r.BackToPage_Refresh,function(e){t.dataList.splice(e.itemIndex,1)})},beforeDestroy:function(){uni.$off(r.BackToPage_Refresh,function(t){})},methods:(0,o.default)({},(0,s.mapActions)(["searchPODataAction"]),{loadData:function(){var t=this,e={};this.searchPODataAction(e).then(function(e){t.dataList=e.data}).catch(function(t){uni.showToast({title:"数据查询失败 err:"+t,icon:"none",duration:2e3})})},openDeatil:function(t){uni.navigateTo({url:"./opDetail?id="+t})}})};e.default=c},2464:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e814"));n("28a5");var o=i(n("7e00")),r={name:"mixin-base",data:function(){return{pageTitle:"",otherHeight:0,leftContentHeight:0}},computed:{menuList:function(){var t=this.$store.getters.menuList_getters;return t}},methods:{getOtherContentHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bodyContentHeight",e=this,n=uni.createSelectorQuery().select("."+t);n.boundingClientRect(function(t){console.log("other Height:"+t.height),e.otherHeight=t.height}).exec()},setTableHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t||(this.otherHeight=0);try{var e=uni.getSystemInfoSync();return console.log("windowHeight:"+e.windowHeight),console.log("CustomBar:"+this.CustomBar),console.log("bodyContentHeight:"+this.otherHeight),this.leftContentHeight=e.windowHeight-this.CustomBar-this.otherHeight-10,console.log("tableHeight:"+this.leftContentHeight),this.leftContentHeight}catch(n){}},getImgUrl:function(t){return o.default.baseImgUrl+t},formatData:function(t){return null==t?"":this.stringToDate(t).format("yyyy-MM-dd")},stringToDate:function(t,e){e||(e="-");var n,i=t.split(e),o=(0,a.default)(i[0]);n=0===i[1].indexOf("0")?(0,a.default)(i[1].substring(1)):(0,a.default)(i[1]);var r=(0,a.default)(i[2]),u=new Date(o,n-1,r);return u},checkLogin:function(){var t=uni.getStorageSync("TOKEN");if(console.warn("mixins=check==>Token："+t),null==t||""===t||null==this.menuList||0===this.menuList.length)try{uni.reLaunch({url:"/pages/login/login"})}catch(e){}}},onLoad:function(){this.checkLogin()},mounted:function(){}};e.default=r},"491c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BackToPage_Refresh=void 0;var i="BACKTOPAGE_REFRESH";e.BackToPage_Refresh=i},"4e83":function(t,e,n){var i=n("1363");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("eac50e10",i,!0,{sourceMap:!1,shadowMode:!1})},a1ba:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("原纸审批")])],2),n("v-uni-view",[t._l(t.dataList,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"grid-warp",on:{click:function(e){e=t.$handleEvent(e),t.openDeatil(i)}}},[n("v-uni-view",{staticClass:"grid-title"},[t._v(t._s(e.poerName)+"-"+t._s(e.vendName)),n("v-uni-view",{staticClass:"cu-tag bg-red radius"},[t._v("未审核")])],1),n("v-uni-view",{staticClass:"grid-body"},[n("v-uni-view",{staticClass:"grid-flex padding-10"},[n("v-uni-view",[n("v-uni-text",[t._v("单号:"+t._s(e.sp_No))])],1),n("v-uni-view",[n("v-uni-text",[t._v("供应商:"+t._s(e.vendName))])],1)],1),n("v-uni-view",{staticClass:"grid-flex padding-10"},[n("v-uni-view",[n("v-uni-text",[t._v("总卷数:"+t._s(e.sp_SumCoil))])],1),n("v-uni-view",[n("v-uni-text",[t._v("日期:"+t._s(t.formatData(e.sp_PODate)))])],1)],1)],1)],1)]})],2)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e54b:function(t,e,n){var i=n("268f"),a=n("85f2");function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=a&&i?i(t,n):{};o.get||o.set?a(e,n,o):e[n]=t[n]}return e.default=t,e}t.exports=o}}]);