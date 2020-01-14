(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/searchForm/paperboardSF"],{"040a":function(t,e,r){"use strict";r.r(e);var n=r("9798"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},2420:function(t,e,r){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.paperQuality=""},t.e1=function(e){t.paperWide=""},t.e2=function(e){t.paperLong=""},t.e3=function(e){t.paperNum=""},t.e4=function(e){t.paperPO=""},t.e5=function(e){t.isShowOrderTypeList=!0},t.e6=function(e){t.isShowCustomerList=!1},t.e7=function(e){t.isShowProList=!1},t.e8=function(e){t.isShowOrderTypeList=!1})},o=[];r.d(e,"b",function(){return i}),r.d(e,"c",function(){return o}),r.d(e,"a",function(){return n})},5266:function(t,e,r){"use strict";r.r(e);var n=r("2420"),i=r("040a");for(var o in i)"default"!==o&&function(t){r.d(e,t,function(){return i[t]})}(o);var s,c=r("f0c5"),a=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=a.exports},9798:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("5046"),i=s(r("dcad")),o=r("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return p(t)||u(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){h(t,e,r[e])})}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"46c4"))},d={name:"searchForm",components:{wPicker:l},watch:{searchKeyword:function(t,e){if(0==t.length)return this.customerList=this.customerList_filter}},data:function(){return{paperNum:"",paperPO:"",paperLong:"",paperWide:"",paperQuality:"",paperType:"0",isShowProList:!1,productTypeText:"纸板",productTypeItem:{},productType:[{type:"0",ct_Desc:"全部"},{type:"1",ct_Desc:"纸箱"},{type:"2",ct_Desc:"纸板"},{type:"3",ct_Desc:"蜂窝"}],isShowOrderTypeList:!1,orderTypeText:"全部",orderTypeItem:{},orderType:[{type:"0",ct_Desc:"全部"},{type:"1",ct_Desc:"已完成"},{type:"2",ct_Desc:"未完成"}],endYear:(0,i.default)(Date.now()).format("YYYY"),CustomBar:this.CustomBar,isShowCustomerList:!1,isShowSearchForm:!1,customerList:[],searchKeyword:"",customerList_filter:[],startDate:(0,i.default)(Date.now()).subtract(1,"month").format("YYYY-MM-DD"),endDate:(0,i.default)(Date.now()).format("YYYY-MM-DD"),customerInfo:"",customerItem:{},dataType:"start"}},onReady:function(){},methods:f({filterCustomer:function(){var t=this;this.searchKeyword.length>0?this.customerList=this.customerList.filter(function(e){return e.ct_Desc.includes(t.searchKeyword)}):this.customerList=this.customerList_filter},getSelectProtypeInfo:function(t){this.isShowProList=!1,this.productTypeText=t.ct_Desc,this.productType=t},getSelectOrderType:function(t){this.isShowOrderTypeList=!1,this.orderTypeText=t.ct_Desc,this.paperType=t.type,this.orderTypeItem=t}},(0,o.mapActions)(["getCustomerInfo_action"]),{checkInputData:function(){var e=!0,r="";if(""==this.startDate||""==this.endDate)r="起始/结束日期必填",e=!1;else if(""!=this.startDate||""!=this.endDate){var i=this.stringToDate(this.startDate),o=this.stringToDate(this.endDate),s=(0,n.dataDiff)("d",i,o);s>730&&(r="时间间隔不能超过2年",e=!1),s<0&&(r="结束日期必须大于起始日期",e=!1)}return""!=r&&t.showToast({title:r,icon:"none",duration:2e3}),e},stringToDate:function(t,e){e||(e="-");var r,n=t.split(e),i=parseInt(n[0]);r=0==n[1].indexOf("0")?parseInt(n[1].substring(1)):parseInt(n[1]);var o=parseInt(n[2]),s=new Date(i,r-1,o);return s},loadCustomerList:function(){var e=this;if(!(this.customerList.length>0)){var r={ct_Type:"0"};this.getQutationCustomerList_action(r).then(function(t){e.customerList=t.records,e.customerList_filter=c(e.customerList)}).catch(function(e){t.showToast({title:"获取客户列表失败 err:"+e,icon:"none",duration:2e3})})}},getSelectCustomerInfo:function(t){this.isShowCustomerList=!1,this.customerInfo=t.ct_Desc,this.customerItem=t},openCustomerList:function(){this.isShowCustomerList=!0,this.loadCustomerList()},openDateSelect:function(t){this.dataType=t,this.$refs.DatePicker.show()},onConfirmDate:function(t){"start"===this.dataType?this.startDate=t.result:this.endDate=t.result},comfirmEvent:function(){if(this.checkInputData()){this.isShowSearchForm=!1;var t={DateFr:this.startDate,DateTo:this.endDate,Qty:this.paperNum,PO:this.paperPO,SizeL:this.paperLong,SizeW:this.paperWide,ArtID:this.paperQuality,NoDeli:this.paperType,Spec:this.paperWide+"*"+this.paperLong};this.$emit("comfirmEvent",t)}},cancelEvent:function(){this.isShowSearchForm=!1,this.$emit("cancelEvent","cancel")},open:function(){this.isShowSearchForm=!0},close:function(){this.isShowSearchForm=!1}})};e.default=d}).call(this,r("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/searchForm/paperboardSF-create-component',
    {
        'components/searchForm/paperboardSF-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("5266"))
        })
    },
    [['components/searchForm/paperboardSF-create-component']]
]);
