(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/compfactorykanban/compfactorykanban"],{"12c6":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=(t._self._c,t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Amount)),n=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Amount),o=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].inamt),a=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].inamt),u=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Gathering_Amount),l=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].Area),i=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[6].TranFee_Amount),h=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[3].outamt),s=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].outamt),c=t.toThousands(0==t.currentBriefReport.length?"":t.currentBriefReport[0].SPay_Amount),p=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Qty")),d=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Area")),m=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Aoumt")),f=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Qty_avg")),g=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Area_avg")),y=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthOrderByType(t.totalReport[0],"Aoumt_avg")),R=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Qty")),T=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Area")),v=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Long")),M=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Qty_avg")),_=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Area_avg")),B=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthProductionByType(t.totalReport[1],"Long_avg")),C=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Qty")),A=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Area")),b=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Amount")),O=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Qty_avg")),w=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Area_avg")),D=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[2],"Amount_avg")),P=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inwt")),S=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inamt")),k=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outwt")),Q=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outamt")),j=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inwt_avg")),F=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"inamt_avg")),x=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outwt_avg")),G=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthDeliveryByType(t.totalReport[3],"outamt_avg")),I=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"inamt")),L=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"outamt")),E=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"inamt_avg")),$=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthSubMaterial(t.totalReport[4],"outamt_avg")),J=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"SPay_Amount")),K=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"Gathering_Amount")),q=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"SPay_Amount_avg")),z=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthInOutCome(t.totalReport[5],"Gathering_Amount_avg")),H=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthTransportation(t.totalReport[6],"TranFee_Amount")),N=t.toThousands(0==t.totalReport.length?"":t.handleCurrentMonthTransportation(t.totalReport[6],"TranFee_Amount_avg"));t.$mp.data=Object.assign({},{$root:{m0:r,m1:n,m2:o,m3:a,m4:u,m5:l,m6:i,m7:h,m8:s,m9:c,m10:p,m11:d,m12:m,m13:f,m14:g,m15:y,m16:R,m17:T,m18:v,m19:M,m20:_,m21:B,m22:C,m23:A,m24:b,m25:O,m26:w,m27:D,m28:P,m29:S,m30:k,m31:Q,m32:j,m33:F,m34:x,m35:G,m36:I,m37:L,m38:E,m39:$,m40:J,m41:K,m42:q,m43:z,m44:H,m45:N}})},o=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o})},"3cc5":function(t,e,r){"use strict";r.r(e);var n=r("df5f"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},5547:function(t,e,r){"use strict";r.r(e);var n=r("12c6"),o=r("3cc5");for(var a in o)"default"!==a&&function(t){r.d(e,t,function(){return o[t]})}(a);r("5dd2");var u=r("2877"),l=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},"5dd2":function(t,e,r){"use strict";var n=r("ef55"),o=r.n(n);o.a},"87d1":function(t,e,r){"use strict";(function(t){r("628f"),r("921b");n(r("66fd"));var e=n(r("5547"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},df5f:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("2f62"),o=a(r("2464"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return h(t)||i(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){c(t,e,r[e])})}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=function(){return r.e("components/uni-icon/uni-icon").then(r.bind(null,"6203"))},d=function(){return r.e("components/uni-grid/uni-grid").then(r.bind(null,"1262"))},m=function(){return r.e("components/uni-grid-item/uni-grid-item").then(r.bind(null,"856a"))},f={name:"compfactorykanban",mixins:[o.default],components:{uniGrid:d,uniGridItem:m,uniIcon:p},data:function(){return{pageTitle:"全厂综合查询",legendData:["面积","金额",""],actived:["1"],currentMode:"0",errorContent:"数据加载中...",dataColumns:[],dataSource:[],currentTextOfReport:"",currentTitlefReport:"",barData:[],popupShow:!1,currentBriefReport:[],totalReport:[]}},onReady:function(){this.getDataSource()},methods:s({},(0,n.mapActions)(["getFactoryKanban_action"]),{handleLink:function(e,r){switch(this.legendData=["面积","金额","","",""],this.popupShow=!0,this.barData=r,this.dataSource=r,e){case"order":this.currentMode="0",this.currentTitlefReport="本月订单",this.currentTextOfReport="订单(面积、金额)对照";break;case"production":this.currentMode="1",this.legendData=["面积","米数",""],this.currentTitlefReport="本月生产",this.currentTextOfReport="生产(面积、米数)对照";break;case"delivery":this.currentMode="0",this.currentTitlefReport="本月送货",this.currentTextOfReport="送货(面积、金额)对照";break;case"basePaper":this.currentMode="3",this.legendData=["","入库金额","出库金额","入库重量","出库重量"],this.currentTitlefReport="本月原纸",this.currentTextOfReport="原纸(金额)对照";break;case"subMaterial":this.currentMode="4",this.legendData=["","入库金额","出库金额","",""],this.currentTitlefReport="本月辅料",this.currentTextOfReport="辅料(金额)对照";break;case"inoutCome":this.currentMode="5",this.legendData=["","收入","支出","",""],this.currentTitlefReport="本月收支",this.currentTextOfReport="收支(金额)对照";break;case"transportation":this.currentMode="6",this.legendData=["","金额","","",""],this.currentTitlefReport="本月运输",this.currentTextOfReport="运输(金额)对照";break}null!=r&&""!=r&&Array.isArray(r)&&this.$store.commit("setCurrentComFactoryChartData",r),t.navigateTo({url:"comFactoryCharts?type="+e})},handleCurrentMonthTransportation:function(t,e){if(0==t.length)return"";switch(e){case"TranFee_Amount":return t.slice(-2,-1).TranFee_Amount;case"TranFee_Amount_avg":return t.slice(-1).TranFee_Amount}},handleCurrentMonthInOutCome:function(t,e){if(0==t.length)return"";switch(e){case"SPay_Amount":return t.slice(-2,-1).SPay_Amount;case"Gathering_Amount":return t.slice(-2,-1).Gathering_Amount;case"SPay_Amount_avg":return t.slice(-1).SPay_Amount;case"Gathering_Amount_avg":return t.slice(1).Gathering_Amount}},handleCurrentMonthSubMaterial:function(t,e){this.handleCurrentMonthBasePaperByType(t,e)},handleCurrentMonthBasePaperByType:function(t,e){if(0==t.length)return"";switch(e){case"inwt":return t.slice(-2,-1).inwt;case"inamt":return t.slice(-2,-1).inamt;case"outwt":return t.slice(-2,-1).outwt;case"outamt":return t.slice(-2,-1).outamt;case"inwt_avg":return t.slice(-1).inwt;case"inamt_avg":return t.slice(1).inamt;case"outwt_avg":return t.slice(-1).outwt;case"outamt_avg":return t.slice(-1).outamt}},handleCurrentMonthDeliveryByType:function(t,e){this.handleCurrentMonthOrderByType(t,e)},handleCurrentMonthProductionByType:function(t,e){if(0==t.length)return"";switch(e){case"Long":return t.slice(-2,-1).Long;case"Area":return t.slice(-2,-1).Area;case"Qty":return t.slice(-2,-1).Qty;case"Long_avg":return t.slice(-1).Long;case"Area_avg":return t.slice(1).Area;case"Qty_avg":return t.slice(-1).Qty}},handleCurrentMonthOrderByType:function(t,e){if(0==t.length)return"";switch(e){case"Aoumt":return t.slice(-2,-1).Aoumt;case"Area":return t.slice(-2,-1).Area;case"Qty":return t.slice(-2,-1).Qty;case"Aoumt_avg":return t.slice(-1).Aoumt;case"Area_avg":return t.slice(1).Area;case"Qty_avg":return t.slice(-1).Qty}},toThousands:function(t){if(null==t||""==t||0==t)return"0.00";var e="";t=(t||0).toString();while(t.length>3)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e},getCurrentBriefReportData:function(t){var e=this;return t.forEach(function(t){var r;(r=e.currentBriefReport).push.apply(r,u(t.slice(-2,-1)))}),this.currentBriefReport},getDataSource:function(){var e={},r=this;this.getFactoryKanban_action(e).then(function(t){r.totalReport=t,r.getCurrentBriefReportData(t)}).catch(function(e){t.showToast({title:"获取数据失败 err"+e,icon:"none",duration:2e3})})}})};e.default=f}).call(this,r("6e42")["default"])},ef55:function(t,e,r){}},[["87d1","common/runtime","common/vendor"]]]);