(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paperBox/paperorderquery/paperorderquery"],{"0072":function(t,e,a){"use strict";a.r(e);var r=a("48cf"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e["default"]=i.a},"2ed8":function(t,e,a){"use strict";a.r(e);var r=a("6dd5"),i=a("0072");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("554e");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=c.exports},"48cf":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(a("dcad")),i=o(a("2bdc")),n=(a("362c"),o(a("c2d4")),a("2f62")),s=o(a("2464"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach(function(e){l(t,e,a[e])})}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u,h=function(){return Promise.all([a.e("common/vendor"),a.e("components/searchForm/searchForm")]).then(a.bind(null,"81cc"))},d=function(){return Promise.all([a.e("common/vendor"),a.e("components/z-table/z-table")]).then(a.bind(null,"717c"))},m=null,f={name:"paperOrderQuery",mixins:[s.default],components:{searchForm:h,zTable:d},data:function(){return{ct_Type:"1",TabCur:"0",scrollLeft:0,canvasColumnId:"canvasColumn",currentFilterType:"",errorContent:"数据加载中...",tableHeight:0,currentTitle:"日期汇总",cWidth:"",cHeight:"",pixelRatio:1,categories:[],series:[],searchParams:{startDate:(0,r.default)(Date.now()).subtract(1,"year").format("YYYY-MM-DD"),endDate:(0,r.default)(Date.now()).format("YYYY-MM-DD"),cList:"",ct_SalerId:"",mode:0},dataTableList:[],barTopData:[],dataColumns:[],dataColumnsM1:[{key:"ct_Desc",title:"名称",width:200,titleAlign:"left",columnAlign:"left"},{key:"co_Qty",title:"数量",width:145,titleAlign:"right",columnAlign:"right"},{key:"BMoney",title:"本币金额",width:200,titleAlign:"right",columnAlign:"right"},{key:"Aarea",title:"面积",width:200,titleAlign:"right",columnAlign:"right"},{key:"Acube",title:"体积",width:200,titleAlign:"right",columnAlign:"right"},{key:"AmtB",title:"金额点比",width:200,titleAlign:"right",columnAlign:"right"}],dataColumnsM2:[{key:"w_Name",title:"名称",width:200,titleAlign:"left",columnAlign:"left"},{key:"co_Qty",title:"数量",width:145,titleAlign:"right",columnAlign:"right"},{key:"BMoney",title:"本币金额",width:200,titleAlign:"right",columnAlign:"right"},{key:"Aarea",title:"面积",width:200,titleAlign:"right",columnAlign:"right"},{key:"Acube",title:"体积",width:200,titleAlign:"right",columnAlign:"right"},{key:"AmtB",title:"金额点比",width:200,titleAlign:"right",columnAlign:"right"}]}},onReady:function(){this.getDataSource(),this.getOtherContentHeight()},onLoad:function(e){u=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500)},methods:c({pageChange:function(t){this.pageSetting.current=t,this.getDataSource()},tabSelect:function(t){var e=this;this.TabCur=t.currentTarget.dataset.id,this.searchParams.mode=this.TabCur,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.$nextTick(function(){setTimeout(function(){var t=e.setTableHeight();e.tableHeight=t-50},200)}),this.getDataSource()},onChangeSwipe:function(t){var e=Number(t);switch(e){case 0:this.canvasColumnId="canvasColumn1",this.currentTitle="客户下单TOP20",this.searchParams.mode=0;break;case 1:this.canvasColumnId="canvasColumn2",this.currentTitle="业务员TOP20",this.searchParams.mode=1;break}this.getDataSource()},updateCanvasInWechat:function(){m.updateData({series:u.series,categories:u.categories,animation:!1})},handleSwichDataColumns:function(){switch(Number(this.searchParams.mode)){case 0:this.series=[{name:"数量",type:"column",data:[]},{name:"金额",type:"line",data:[]}],this.dataColumns=this.dataColumnsM1;break;case 1:this.series=[{name:"数量",type:"column",data:[]},{name:"金额",type:"line",data:[]}],this.dataColumns=this.dataColumnsM2;break}},handleFilterData:function(t){switch(this.currentFilterType=t,t){case"week":this.searchParams.startDate=(0,r.default)(Date.now()).startOf("week").format("YYYY-MM-DD"),this.searchParams.endDate=(0,r.default)(Date.now()).format("YYYY-MM-DD");break;case"month":this.searchParams.startDate=(0,r.default)(Date.now()).startOf("month").format("YYYY-MM-DD"),this.searchParams.endDate=(0,r.default)(Date.now()).format("YYYY-MM-DD");break;case"season":this.searchParams.startDate=(0,r.default)(Date.now()).subtract(3,"month").format("YYYY-MM-DD"),this.searchParams.endDate=(0,r.default)(Date.now()).format("YYYY-MM-DD");break}this.getDataSource()},cancelEvent:function(){this.showSearchForm=!1},searchComfirmEvent:function(t){this.currentFilterType="",this.searchParams=Object.assign(this.searchParams,t),this.showSearchForm=!1,this.resetSearchParams(),this.getDataSource()},resetSearchParams:function(){null==this.searchParams.ctCode&&(this.searchParams.ctCode=""),null==this.searchParams.ct_SalerId&&(this.searchParams.ct_SalerId="")},openSearchEventForm:function(){this.showSearchForm=!0,this.$refs.searchForm.isShowSearchForm=!0},getEchartData:function(t){var e=this.formatDataIntoEchart(t);this.categories=e.map(function(t){return null==t[0]?"-":t[0]}),this.series[0].data=e.map(function(t){return null==t[1]?"-":t[1]}),5!=this.searchParams.mode&&(this.series[1].data=e.map(function(t){return null==t[2]?"-":t[2]})),this.setChartDataConfig()},formatDataIntoEchart:function(t){var e=[],a={};for(var r in t){switch(this.searchParams.mode){case 0:a={cus_Name:t[r].ct_Desc,cus_Qty:Number.parseFloat(t[r].co_Qty),cus_Amount:Number.parseFloat(t[r].BMoney)};break;case 1:a={cus_Name:t[r].w_Name,cus_Qty:Number.parseFloat(t[r].co_Qty),cus_Amount:Number.parseFloat(t[r].BMoney)};break;case 5:a={cus_Name:t[r].co_Date,cus_Qty:Number.parseFloat(t[r].co_Qty)};break}var i=Object.values(a);e.push(i)}return e}},(0,n.mapActions)(["getPaperBoxOrderSummary_action"]),{getDataSource:function(){this.handleSwichDataColumns(),this.resetSearchParams();var e={sFrom:this.searchParams.startDate,sTo:this.searchParams.endDate,mode:this.searchParams.mode,cList:this.searchParams.ctCode,ct_SalerId:this.searchParams.ct_SalerId,size:this.pageSetting.pageSize,current:this.pageSetting.current},a=this;this.getPaperBoxOrderSummary_action(e).then(function(t){a.dataTableList=t.data.records,0==a.dataTableList.length&&(a.errorContent="暂无数据")}).catch(function(e){a.errorContent="暂无数据",t.showToast({title:"获取数据失败:"+e,icon:"none",duration:2e3})})},setChartDataConfig:function(){var t={categories:[],series:[]};t.categories=u.categories,t.series=u.series,u.showColumn(this.canvasColumnId,t)},showColumn:function(t,e){m=new i.default({$this:u,canvasId:t,type:"mix",fontSize:11,padding:[5,15,15,15],legend:{show:!0,position:"top",float:"center",lineHeight:11,itemGap:30,padding:10,margin:5,borderWidth:1},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:u.pixelRatio,categories:e.categories,series:e.series,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{data:[{calibration:!0,position:"left",title:u.currentTitle,titleFontSize:12}],showTitle:!0,gridType:"dash",dashLength:4,splitNumber:5},width:u.cWidth*u.pixelRatio,height:u.cHeight*u.pixelRatio,extra:{column:{type:"group",width:u.cWidth*u.pixelRatio*.45/e.categories.length}}})},touchColumn:function(t){m.scrollStart(t)},moveColumn:function(t){m.scroll(t)},touchEndColumn:function(t){m.scrollEnd(t),m.touchLegend(t,{animation:!0}),m.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})}})};e.default=f}).call(this,a("6e42")["default"])},"554e":function(t,e,a){"use strict";var r=a("d56d"),i=a.n(r);i.a},"6dd5":function(t,e,a){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return r})},b50d:function(t,e,a){"use strict";(function(t){a("628f"),a("921b");r(a("66fd"));var e=r(a("2ed8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},d56d:function(t,e,a){}},[["b50d","common/runtime","common/vendor"]]]);