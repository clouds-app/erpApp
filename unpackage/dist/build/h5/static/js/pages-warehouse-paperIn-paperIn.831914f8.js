(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-warehouse-paperIn-paperIn"],{"6b99":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("795b")),s=a(n("5176"));n("28a5");var r=a(n("cebc")),o=a(n("2464")),u=n("2f62"),c=a(n("717c")),l={name:"paperIn",mixins:[o.default],components:{zTable:c.default},data:function(){return{TabCur:0,scrollLeft:0,dataTableList:[],errorContent:"暂无数据",tableHeight:0,findGoodsTableDataItems:[],paperOutTableDataItems:[],paperInFormItems:{instruct:"",station:"",fOrderNo:"",line:"",group:"",fQty:"",fDNum:"",desc:""},paperInFormInit:{instruct:"",station:"",fOrderNo:"",line:"",group:"",fQty:"",fDNum:"",desc:""},findGoodsItem:{fOrderNo:""},paperOutItem:{fOrderNo:"",batch:""},findGoodsColumns:[{key:"OrderNo",title:"工单号",width:200},{key:"Station",title:"仓位",width:200},{key:"FNum",title:"板号",width:200},{key:"State",title:"状态",width:145}]}},mounted:function(){},methods:(0,r.default)({tabSelect:function(t){var e=this;switch(this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.TabCur){case 0:break;case"1":this.$nextTick(function(){e.getOtherContentHeight("bodyContentHeight"),setTimeout(function(){var t=e.setTableHeight(!0);e.tableHeight=t-130},200)});break;case"2":this.$nextTick(function(){e.getOtherContentHeight("bodyContentHeight2"),setTimeout(function(){var t=e.setTableHeight(!0);e.tableHeight=t-130},200)});break;default:break}},turnOnScanCode:function(t){var e=this;uni.scanCode({scanType:"barCode",success:function(n){switch(console.log("条码内容："+n.result),t){case"in":e.paperInFormItems.instruct=n.result,e.getParamsFromScanCode();break;case"out":this.paperOutItem.fOrderNo=n.result;break;case"search":this.findGoodsItem.fOrderNo=n.result;break;default:break}}})}},(0,u.mapActions)(["spScanOrderAction"]),{barCodeBlur:function(){""!=this.paperInFormItems.instruct?this.getParamsFromScanCode():uni.showToast({title:"请输入或扫描条码",icon:"none"})},getParamsFromScanCode:function(){var t=this.paperInFormItems.instruct.split("*");if(t.length<5)uni.showToast({title:"数据解析失败，参数个数不够",icon:"none"});else{var e={fOrderNo:t[0],fDNum:t[1],fQty:t[2],line:t[3],group:t[4]};(0,s.default)(this.paperInFormItems,e)}},paperInRequest:function(t){var e=this;return this.errorContent="数据加载中...",new i.default(function(n,a){e.spScanOrderAction(t).then(function(t){n(t.list)}).catch(function(t){e.errorContent="暂无数据",uni.showToast({title:"获取数据失败:"+t,icon:"none"}),a(t)})})},paprtIn:function(){if(""!=this.paperInFormItems.station)if(""!=this.paperInFormItems.fOrderNo&&""!=this.paperInFormItems.fQty&&""!=this.paperInFormItems.fDNum&&""!=this.paperInFormItems.line&&""!=this.paperInFormItems.group){var t={BarCodeStr:this.paperInFormItems.instruct,Station:this.paperInFormItems.station,Flag:0,FOrderNo:this.paperInFormItems.fOrderNo,FQty:this.paperInFormItems.fQty,FDNum:this.paperInFormItems.fDNum,FLine:this.paperInFormItems.line,FClass:this.paperInFormItems.group,Remark:this.paperInFormItems.desc};this.paperInRequest(t).then(function(t){t&&1==t[0].res?uni.showToast({title:"入仓成功"}):uni.showToast({title:"入仓失败",icon:"none",duration:2e3})}).catch(function(t){uni.showToast({title:"入仓失败"+t,icon:"none",duration:2e3})})}else uni.showToast({title:"请先扫描完整的指令",icon:"none"});else uni.showToast({title:"请输入仓位",icon:"none"})},findGoods:function(){var t=this;if(""!=this.findGoodsItem.fOrderNo){var e={FOrderNo:this.findGoodsItem.fOrderNo,BarCodeStr:this.findGoodsItem.fOrderNo,Flag:2};this.paperInRequest(e).then(function(e){e&&e.length>0&&(t.findGoodsTableDataItems=e[0].resultList)}).catch(function(t){uni.showToast({title:"暂无数据",icon:"none",duration:2e3})})}else uni.showToast({title:"请输入或扫描工单号",icon:"none",duration:2e3})},paperOut:function(){var t=this;if(""!=this.paperOutItem.fOrderNo)if(""!=this.paperOutItem.batch){var e={FOrderNo:this.paperOutItem.fOrderNo,BarCodeStr:"",Batch:this.paperOutItem.batch,Flag:1};this.paperInRequest(e).then(function(e){e&&e.length>0&&(t.paperOutTableDataItems=e.resultList[0])}).catch(function(t){uni.showToast({title:"暂无数据",icon:"none",duration:2e3})})}else uni.showToast({title:"请输入车次",icon:"none",duration:2e3});else uni.showToast({title:"请输入或扫描工单号",icon:"none",duration:2e3})}})};e.default=l},"882d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("纸板出入库")])],2),n("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":""}},[n("v-uni-view",{staticClass:"flex text-center"},[n("v-uni-view",{staticClass:"cu-item flex-sub",class:0==t.TabCur?"text-orange cur":"",attrs:{"data-id":"0"},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(e)}}},[t._v("入ㅤ库")]),n("v-uni-view",{staticClass:"cu-item flex-sub",class:1==t.TabCur?"text-orange cur":"",attrs:{"data-id":"1"},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(e)}}},[t._v("寻ㅤ货")]),n("v-uni-view",{staticClass:"cu-item flex-sub",class:2==t.TabCur?"text-orange cur":"",attrs:{"data-id":"2"},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(e)}}},[t._v("出仓扫描")])],1)],1),n("v-uni-form",{directives:[{name:"show",rawName:"v-show",value:0==t.TabCur,expression:"0==TabCur"}]},[n("v-uni-view",{staticClass:"cu-form-group border-top"},[n("v-uni-view",{staticClass:"title"},[t._v("条ㅤ码:")]),n("v-uni-input",{attrs:{placeholder:"请输入条形码",name:"input"},on:{blur:function(e){e=t.$handleEvent(e),t.barCodeBlur(e)}},model:{value:t.paperInFormItems.instruct,callback:function(e){t.$set(t.paperInFormItems,"instruct",e)},expression:"paperInFormItems.instruct"}}),n("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(e){e=t.$handleEvent(e),t.turnOnScanCode("in")}}},[t._v("扫描")])],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("仓ㅤ位:")]),n("v-uni-input",{attrs:{placeholder:"请输入仓位",name:"input"},model:{value:t.paperInFormItems.station,callback:function(e){t.$set(t.paperInFormItems,"station",e)},expression:"paperInFormItems.station"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("工单号:")]),n("v-uni-input",{attrs:{disabled:!0,placeholder:"请输入工单号",name:"input"},model:{value:t.paperInFormItems.fOrderNo,callback:function(e){t.$set(t.paperInFormItems,"fOrderNo",e)},expression:"paperInFormItems.fOrderNo"}})],1),n("v-uni-view",{staticClass:"flex border-top"},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("板ㅤ号:")]),n("v-uni-input",{attrs:{disabled:!0,placeholder:"请输入板号",name:"input"},model:{value:t.paperInFormItems.fDNum,callback:function(e){t.$set(t.paperInFormItems,"fDNum",e)},expression:"paperInFormItems.fDNum"}})],1)],1),n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("数ㅤ量:")]),n("v-uni-input",{attrs:{disabled:!0,placeholder:"请输入数量",name:"input"},model:{value:t.paperInFormItems.fQty,callback:function(e){t.$set(t.paperInFormItems,"fQty",e)},expression:"paperInFormItems.fQty"}})],1)],1)],1),n("v-uni-view",{staticClass:"flex border-top"},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("线ㅤ别:")]),n("v-uni-input",{attrs:{disabled:!0,placeholder:"请输入线别",name:"input"},model:{value:t.paperInFormItems.line,callback:function(e){t.$set(t.paperInFormItems,"line",e)},expression:"paperInFormItems.line"}})],1)],1),n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("班ㅤ别:")]),n("v-uni-input",{attrs:{disabled:!0,placeholder:"请输入班别",name:"input"},model:{value:t.paperInFormItems.group,callback:function(e){t.$set(t.paperInFormItems,"group",e)},expression:"paperInFormItems.group"}})],1)],1)],1),n("v-uni-view",{staticClass:"cu-form-group border-top"},[n("v-uni-textarea",{attrs:{maxlength:"-1",placeholder:"请输入备注"},model:{value:t.paperInFormItems.desc,callback:function(e){t.$set(t.paperInFormItems,"desc",e)},expression:"paperInFormItems.desc"}})],1),n("v-uni-view",{staticClass:"margin-text-center"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.paprtIn(e)}}},[t._v("入仓")])],1)],1),n("v-uni-form",{directives:[{name:"show",rawName:"v-show",value:1==t.TabCur,expression:"1==TabCur"}]},[n("v-uni-view",{staticClass:"bodyContentHeight"},[n("v-uni-view",{staticClass:"cu-form-group border-top"},[n("v-uni-view",{staticClass:"title"},[t._v("工单号:")]),n("v-uni-input",{attrs:{placeholder:"请输入工单号",name:"input"},model:{value:t.findGoodsItem.fOrderNo,callback:function(e){t.$set(t.findGoodsItem,"fOrderNo",e)},expression:"findGoodsItem.fOrderNo"}}),n("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(e){e=t.$handleEvent(e),t.turnOnScanCode("search")}}},[t._v("扫描")])],1)],1),n("zTable",{attrs:{tableHeight:t.tableHeight,showLoading:!1,emptyText:t.errorContent,tableData:t.findGoodsTableDataItems,columns:t.findGoodsColumns}}),n("v-uni-view",{staticClass:"margin-text-center"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.findGoods()}}},[t._v("查ㅤ询")])],1)],1),n("v-uni-form",{directives:[{name:"show",rawName:"v-show",value:2==t.TabCur,expression:"2==TabCur"}]},[n("v-uni-view",{staticClass:"bodyContentHeight2"},[n("v-uni-view",{staticClass:"cu-form-group border-top"},[n("v-uni-view",{staticClass:"title"},[t._v("车ㅤ次:")]),n("v-uni-input",{attrs:{placeholder:"请输入车次",name:"input"},model:{value:t.paperOutItem.batch,callback:function(e){t.$set(t.paperOutItem,"batch",e)},expression:"paperOutItem.batch"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("工单号:")]),n("v-uni-input",{attrs:{placeholder:"请输入工单号",name:"input"},model:{value:t.paperOutItem.fOrderNo,callback:function(e){t.$set(t.paperOutItem,"fOrderNo",e)},expression:"paperOutItem.fOrderNo"}}),n("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(e){e=t.$handleEvent(e),t.turnOnScanCode("out")}}},[t._v("扫描")])],1)],1),n("zTable",{attrs:{tableHeight:t.tableHeight,showLoading:!1,emptyText:t.errorContent,tableData:t.paperOutTableDataItems,columns:t.findGoodsColumns}}),n("v-uni-view",{staticClass:"margin-text-center"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.paperOut()}}},[t._v("查ㅤ询")])],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"8f13":function(t,e,n){"use strict";var a=n("9c9e"),i=n.n(a);i.a},"9c9e":function(t,e,n){var a=n("dbae");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4217429c",a,!0,{sourceMap:!1,shadowMode:!1})},"9cf7":function(t,e,n){"use strict";n.r(e);var a=n("882d"),i=n("f388");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("8f13");var r=n("2877"),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"3952b912",null);e["default"]=o.exports},dbae:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".margin-text-center[data-v-3952b912]{text-align:center;margin:%?20?%}.border-top[data-v-3952b912]{border-top:1px solid #eee}.cu-form-group .title[data-v-3952b912]{min-width:calc(4em + 15px)}",""])},f388:function(t,e,n){"use strict";n.r(e);var a=n("6b99"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a}}]);