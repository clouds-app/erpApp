(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cardBoard/loadGoodsDown/loadGoodsDown"],{"0525":function(t,o,e){"use strict";(function(t){e("628f"),e("921b");n(e("66fd"));var o=n(e("d91c"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("6e42")["createPage"])},3493:function(t,o,e){},7507:function(t,o,e){"use strict";var n,r=function(){var t=this,o=t.$createElement;t._self._c},a=[];e.d(o,"b",function(){return r}),e.d(o,"c",function(){return a}),e.d(o,"a",function(){return n})},"81e3":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=a(e("a34a")),r=a(e("2464"));e("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function i(t,o,e,n,r,a,i){try{var s=t[a](i),c=s.value}catch(d){return void e(d)}s.done?o(c):Promise.resolve(c).then(n,r)}function s(t){return function(){var o=this,e=arguments;return new Promise(function(n,r){var a=t.apply(o,e);function s(t){i(a,n,r,s,c,"next",t)}function c(t){i(a,n,r,s,c,"throw",t)}s(void 0)})}}var c=function(){return e.e("components/color-ui-dialog/color-ui-dialog").then(e.bind(null,"43f7"))},d=function(){return Promise.all([e.e("common/vendor"),e.e("components/z-table/z-table")]).then(e.bind(null,"717c"))},u=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"6203"))},l=function(){return e.e("components/searchForm/searchDataList.vue").then(e.bind(null,"a99d"))},h=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"ad32"))},f={cardBoardNo:"",carGoodsNo:"",hoverport:"",driver:"",licensePlate:""},m={name:"loadGoodsUp",mixins:[r.default],components:{zTable:d,uniPopup:h,searchForm:l,uniIcon:u,alertBox:c},data:function(){return{hasLoadGoodsDone:!1,saveBtnTitle:"未完成",carNoList:[],carNoItem:{},editItem:{loadCarNo:"",hoverport:"",hoverportID:""},hoverportList:[],scanCard:{},currentAction:"",currentSelect:"hoverportList",dataSource:[],toShowModal:!1,msgContent:"",scanType:"",tableHeight:400,errorContent:"暂无数据",cardBoardNoInfoData:[],cardBoardNoInfoClone:{},cardBoardNoInfoColumns:[{key:"OrderNo",title:"工单号",width:180},{key:"Qty",title:"需装数",width:100},{key:"ZCScanQty",title:"扫描数",width:100},{key:"CustName",title:"客户",width:180},{key:"StationNo",title:"库位",width:180},{key:"ArtID",title:"纸质",width:160},{key:"Size",title:"规格",width:160},{key:"MinSize",title:"小尺寸",width:160},{key:"ZoneName",title:"地区",width:100},{title:"操作",listenerClick:!0,width:80,titleAlign:"center",columnAlign:"center",format:{template:"详细",names:[]}}],formItem:Object.assign({},f),catchFlag:!1,cardScanQtyItems:{}}},watch:{cardBoardNoInfoData:{handler:function(t,o){this.checkIsDoneOrNot()},immediate:!0,deep:!0}},computed:{canScanCode:function(){return 0==this.cardBoardNoInfoData.length},canSaveData:function(){return 0==this.cardBoardNoInfoData.length}},onReady:function(){this.messageRegister(),this.getTableHeight()},methods:{loadDataByUser:function(){var o={procName:"spGetLoadCarInfo",params:{UserID:this.$store.getters.userInfo_getters}},e=this;this.$store.dispatch("getMultipleResultsAction",o).then(function(t){null!=t&&(e.cardBoardNoInfoData=t.cardDetailList,e.formItem.hoverport=t.master.PierName,e.formItem.carGoodsNo=t.master.CarListNo,e.formItem.driver=t.master.LoadName,e.formItem.licensePlate=t.master.CarNo)}).catch(function(o){t.showToast({title:"加载装车列表失败:"+o,icon:"none",duration:2e3})})},checkIsDoneOrNot:function(){this.cardBoardNoInfoData.length>0&&(this.hasLoadGoodsDone=this.cardBoardNoInfoData.every(function(t){return t.Qty==t.ZCScanQty})),this.hasLoadGoodsDone&&(this.saveBtnTitle="完成")},getCardBoardNoInfo:function(){var o=this;if(this.cardBoardNoInfoData=[],""!=this.formItem.carGoodsNo){var e={procName:"spGetPaperCarListInfoForAPP",params:{UserID:this.$store.getters.userInfo_getters,CarListNo:this.formItem.carGoodsNo}};this.$store.dispatch("getExecuteDropDownDetailsAction",e).then(function(e){e&&e.list.length>0?(o.cardBoardNoInfoData=e.list,o.formItem.originalKuNo=o.cardBoardNoInfoData[0].ap_StationNo,o.cardBoardNoInfoData.forEach(function(t,e){o.cardBoardNoInfoClone[t.OrderNo]=t})):t.showToast({title:"没有该卡板对应的数据",icon:"none",duration:2e3})}).catch(function(o){t.showToast({title:"获取清单数据失败:"+o,icon:"none",duration:2e3})})}},openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},submitDataList:function(){t.navigateTo({url:"./loadGoodsDownDetail?cardNo=".concat(this.formItem.licensePlate,"&carListNo=")+this.formItem.carGoodsNo})},onClickCheck:function(t){},onClickRowEvent:function(o){t.navigateTo({url:"./../loadGoodsUp/loadGoodsUpDetail?detailId=".concat(o.ID1,"&orderNo=").concat(o.OrderNo,"&cardNo=").concat(this.formItem.licensePlate,"&scanQty=").concat(o.ZCScanQty)})},getSelectDataInfo:function(t){switch(this.currentSelect){case"hoverportList":this.editItem.hoverport=t.ct_Desc,this.editItem.hoverportID=t.type;break;default:break}},setSearchDataListSource:function(){this.$refs["searchForm"].isShowSearchList=!0,this.$refs["searchForm"].dataSourceList=this.hoverportList,this.dataSource=this.hoverportList},comfirmModal:function(t){switch(this.toShowModal=!1,this.currentAction){case"preSubmitDataList":this.SubmitDataList();break;case"preSelectHoverport":this.handleDataWhenGotHoverport();break;case"preCompetitionForOrders":this.scanCard={},this.loadCarGoodsNoList();break;default:break}},cancelModal:function(t){this.toShowModal=!1},getTableHeight:function(){var t=s(n.default.mark(function t(){var o,e,r,a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=this,e=o.setTableHeight(),t.next=4,o.getOtherContentHeight("elForm");case 4:return r=t.sent,t.next=7,o.getOtherContentHeight("elBtn");case 7:a=t.sent,null!=r&&null!=a&&(o.tableHeight=e-r-a-20);case 9:case"end":return t.stop()}},t,this)}));function o(){return t.apply(this,arguments)}return o}(),messageRegister:function(){this.formItem.driver=this.$store.getters.userInfo_getters,this.loadDataByUser()},spFreshCarListForAPP:function(){var o=this;if(""!=this.formItem.cardBoardNo){var e=""+this.formItem.cardBoardNo;if(this.scanCard[e])return t.showToast({title:"".concat(this.formItem.cardBoardNo,"卡板号已经被扫描了"),icon:"none",duration:2e3}),void(this.formItem.cardBoardNo="");var n={procName:"spScanInfoForAPP",params:{UserID:this.$store.getters.userInfo_getters,CardNo:this.formItem.cardBoardNo,CarListNo:this.formItem.carGoodsNo,Type:"B"}};this.$store.dispatch("getExecuteDropDownAction",n).then(function(n){n&&n.list&&n.list.length>0&&(1===n.list[0].Error?t.showToast({title:"扫描失败:"+n.list[0].Result,icon:"none",duration:2e3}):(o.loadDataByUser(),o.formItem.cardBoardNo="",o.scanCard[e]="A",t.showToast({title:"扫描成功",icon:"none",duration:2e3})))}).catch(function(o){t.showToast({title:"更新扫描数量失败:"+o,icon:"none",duration:2e3})})}},turnOnScanCode:function(o){this.scanType=o;var e=this;t.scanCode({scanType:"barCode",success:function(t){switch(o){case"cardBoardNo":e.formItem.cardBoardNo=t.result,e.spFreshCarListForAPP();break;default:break}}})}}};o.default=m}).call(this,e("6e42")["default"])},a0eb:function(t,o,e){"use strict";e.r(o);var n=e("81e3"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(o,t,function(){return n[t]})}(a);o["default"]=r.a},d3b4:function(t,o,e){"use strict";var n=e("3493"),r=e.n(n);r.a},d91c:function(t,o,e){"use strict";e.r(o);var n=e("7507"),r=e("a0eb");for(var a in r)"default"!==a&&function(t){e.d(o,t,function(){return r[t]})}(a);e("d3b4");var i,s=e("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);o["default"]=c.exports}},[["0525","common/runtime","common/vendor"]]]);