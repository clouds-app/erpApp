(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-paperorderquery-paperorderquery"],{"1ed0":function(t,e,a){"use strict";a.r(e);var n=a("687e"),i=a("9240");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("4b03");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"5d403a00",null);e["default"]=r.exports},"4b03":function(t,e,a){"use strict";var n=a("ff60"),i=a.n(n);i.a},"687e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0},on:{searchEvent:function(e){e=t.$handleEvent(e),t.openSearchEventForm(e)}}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("订单查询")]),a("template",{attrs:{slot:"right"},slot:"right"},[t._v("查询")])],2),a("v-uni-view",{staticClass:"bodyContentHeight"},[a("v-uni-view",{staticClass:"button-sp-area"},[a("v-uni-button",{staticClass:"mini-btn",attrs:{type:"week"===t.currentFilterType?"primary":"default",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.handleFilterData("week")}}},[t._v("周")]),a("v-uni-button",{staticClass:"mini-btn",attrs:{type:"month"===t.currentFilterType?"primary":"default",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.handleFilterData("month")}}},[t._v("月")]),a("v-uni-button",{staticClass:"mini-btn",attrs:{type:"season"===t.currentFilterType?"primary":"default",size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.handleFilterData("season")}}},[t._v("季")])],1),a("v-uni-swiper",{staticClass:"qiun-charts",attrs:{vertical:!0,circular:!0,"indicator-dots":!0},on:{change:function(e){e=t.$handleEvent(e),t.onChangeSwipe(e)}}},[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":t.canvasColumnId,id:t.canvasColumnId,"disable-scroll":"true"},on:{touchstart:function(e){e=t.$handleEvent(e),t.touchColumn(e)},touchmove:function(e){e=t.$handleEvent(e),t.moveColumn(e)},touchend:function(e){e=t.$handleEvent(e),t.touchEndColumn(e)}}})],1)],1)],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":t.canvasColumnId,id:t.canvasColumnId,"disable-scroll":"true"},on:{touchstart:function(e){e=t.$handleEvent(e),t.touchColumn(e)},touchmove:function(e){e=t.$handleEvent(e),t.moveColumn(e)},touchend:function(e){e=t.$handleEvent(e),t.touchEndColumn(e)}}})],1)],1)],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":t.canvasColumnId,id:t.canvasColumnId,"disable-scroll":"true"},on:{touchstart:function(e){e=t.$handleEvent(e),t.touchColumn(e)},touchmove:function(e){e=t.$handleEvent(e),t.moveColumn(e)},touchend:function(e){e=t.$handleEvent(e),t.touchEndColumn(e)}}})],1)],1)],1)],1),a("zTable",{attrs:{tableHeight:t.tableHeight,showLoading:!1,emptyText:t.errorContent,tableData:t.dataTableList,columns:t.dataColumns}})],1),a("searchForm",{ref:"searchForm",on:{cancelEvent:function(e){e=t.$handleEvent(e),t.cancelEvent(e)},comfirmEvent:function(e){e=t.$handleEvent(e),t.searchComfirmEvent(e)}}})],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},7171:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-swiper[data-v-5d403a00]{display:block;height:%?500?%}.button-sp-area[data-v-5d403a00]{text-align:center;padding-top:%?10?%;background:#fff}.button-sp-area uni-button[data-v-5d403a00]{margin-left:%?40?%}\n\t/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-5d403a00]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-5d403a00]{width:%?750?%;height:%?500?%;background-color:#fff}",""])},"7efb":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7f7f");var i=n(a("db0c")),s=n(a("82a3")),o=n(a("5176"));a("c5f6");var r,c=n(a("cebc")),l=n(a("0a0d")),u=n(a("81cc")),h=n(a("dcad")),d=n(a("2bdc")),m=(a("362c"),n(a("717c"))),f=(n(a("c2d4")),a("2f62")),v=n(a("2464")),g=null,p={name:"paperOrderQuery",mixins:[v.default],components:{searchForm:u.default,zTable:m.default},data:function(){return{canvasColumnId:"canvasColumn",currentFilterType:"",errorContent:"数据加载中...",tableHeight:0,currentTitle:"日期汇总",cWidth:"",cHeight:"",pixelRatio:1,categories:[],series:[],searchParams:{startDate:(0,h.default)((0,l.default)()).subtract(1,"year").format("YYYY-MM-DD"),endDate:(0,h.default)((0,l.default)()).format("YYYY-MM-DD"),ctCode:"",mode:5,size:20},dataTableList:[],barTopData:[],dataColumns:[],dataColumnsM1:[{key:"co_CustId",title:"客户编号",width:200,titleAlign:"left",columnAlign:"left"},{key:"ct_Desc",title:"客户名称",width:200,titleAlign:"left",columnAlign:"left"},{key:"co_Qty",title:"数量",width:145,titleAlign:"right",columnAlign:"right"},{key:"BMoney",title:"本币金额",width:200,titleAlign:"right",columnAlign:"right"}],dataColumnsM2:[{key:"w_Name",title:"业务员",width:250,titleAlign:"left",columnAlign:"left"},{key:"co_Qty",title:"数量",width:250,titleAlign:"right",columnAlign:"right"},{key:"BMoney",title:"本币金额",width:245,titleAlign:"right",columnAlign:"right"}],dataColumnsM3:[{key:"co_Date",title:"订单日期",width:400,titleAlign:"center",columnAlign:"center"},{key:"co_Qty",title:"数量",width:345,titleAlign:"center",columnAlign:"center"}]}},mounted:function(){var t=this;this.getDataSource(),this.getOtherContentHeight(),this.$nextTick(function(){setTimeout(function(){t.tableHeight=t.setTableHeight(!0),t.tableHeight=t.tableHeight+55},200)})},onLoad:function(t){r=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500)},methods:(0,c.default)({onChangeSwipe:function(t){var e=Number(t.detail.current);switch(e){case 0:this.canvasColumnId="canvasColumn",this.currentTitle="日期汇总",this.searchParams.mode=5;break;case 1:this.canvasColumnId="canvasColumn1",this.currentTitle="客户下单TOP20",this.searchParams.mode=0;break;case 2:this.canvasColumnId="canvasColumn2",this.currentTitle="业务员TOP20",this.searchParams.mode=1;break}this.getDataSource()},updateCanvasInWechat:function(){g.updateData({series:r.series,categories:r.categories,animation:!1})},handleSwichDataColumns:function(){switch(this.searchParams.mode){case 0:this.series=[{name:"数量",type:"column",data:[]},{name:"金额",type:"line",data:[]}],this.dataColumns=this.dataColumnsM1;break;case 1:this.series=[{name:"数量",type:"column",data:[]},{name:"金额",type:"line",data:[]}],this.dataColumns=this.dataColumnsM2;break;case 5:this.series=[{name:"数量",type:"column",data:[]}],this.dataColumns=this.dataColumnsM3;break}},handleFilterData:function(t){switch(this.currentFilterType=t,t){case"week":this.searchParams.startDate=(0,h.default)((0,l.default)()).startOf("week").format("YYYY-MM-DD"),this.searchParams.endDate=(0,h.default)((0,l.default)()).format("YYYY-MM-DD");break;case"month":this.searchParams.startDate=(0,h.default)((0,l.default)()).startOf("month").format("YYYY-MM-DD"),this.searchParams.endDate=(0,h.default)((0,l.default)()).format("YYYY-MM-DD");break;case"season":this.searchParams.startDate=(0,h.default)((0,l.default)()).subtract(3,"month").format("YYYY-MM-DD"),this.searchParams.endDate=(0,h.default)((0,l.default)()).format("YYYY-MM-DD");break}this.getDataSource()},cancelEvent:function(){this.showSearchForm=!1},searchComfirmEvent:function(t){this.currentFilterType="",this.searchParams=(0,o.default)(this.searchParams,t),this.showSearchForm=!1,null==this.searchParams.ctCode&&(this.searchParams.ctCode=""),this.getDataSource()},openSearchEventForm:function(){this.showSearchForm=!0,this.$refs.searchForm.isShowSearchForm=!0},getEchartData:function(t){var e=this.formatDataIntoEchart(t);this.categories=e.map(function(t){return null==t[0]?"-":t[0]}),this.series[0].data=e.map(function(t){return null==t[1]?"-":t[1]}),5!=this.searchParams.mode&&(this.series[1].data=e.map(function(t){return null==t[2]?"-":t[2]})),this.setChartDataConfig()},formatDataIntoEchart:function(t){var e=[],a={};for(var n in t){switch(this.searchParams.mode){case 0:a={cus_Name:t[n].ct_Desc,cus_Qty:(0,s.default)(t[n].co_Qty),cus_Amount:(0,s.default)(t[n].BMoney)};break;case 1:a={cus_Name:t[n].w_Name,cus_Qty:(0,s.default)(t[n].co_Qty),cus_Amount:(0,s.default)(t[n].BMoney)};break;case 5:a={cus_Name:t[n].co_Date,cus_Qty:(0,s.default)(t[n].co_Qty)};break}var o=(0,i.default)(a);e.push(o)}return e}},(0,f.mapActions)(["getPaperCOQueryAnaly_action"]),{getDataSource:function(){this.handleSwichDataColumns();var t=this.searchParams,e=this;this.getPaperCOQueryAnaly_action(t).then(function(t){e.dataTableList=t.orderData,e.getEchartData(t.topData),e.updateCanvasInWechat(),0==e.dataTableList.length&&(e.errorContent="暂无数据")}).catch(function(t){e.errorContent="暂无数据",uni.showToast({title:"获取数据失败:"+t,icon:"none",duration:2e3})})},setChartDataConfig:function(){var t={categories:[],series:[]};t.categories=r.categories,t.series=r.series,r.showColumn(this.canvasColumnId,t)},showColumn:function(t,e){g=new d.default({$this:r,canvasId:t,type:"mix",fontSize:11,padding:[5,15,15,15],legend:{show:!0,position:"top",float:"center",lineHeight:11,itemGap:30,padding:10,margin:5,borderWidth:1},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:r.pixelRatio,categories:e.categories,series:e.series,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{data:[{calibration:!0,position:"left",title:r.currentTitle,titleFontSize:12}],showTitle:!0,gridType:"dash",dashLength:4,splitNumber:5},width:r.cWidth*r.pixelRatio,height:r.cHeight*r.pixelRatio,extra:{column:{type:"group",width:r.cWidth*r.pixelRatio*.45/e.categories.length}}})},touchColumn:function(t){g.scrollStart(t)},moveColumn:function(t){g.scroll(t)},touchEndColumn:function(t){g.scrollEnd(t),g.touchLegend(t,{animation:!0}),g.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})}})};e.default=p},9240:function(t,e,a){"use strict";a.r(e);var n=a("7efb"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},c2d4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={LineA:{categories:["2012","2013","2014","2015","2016","2017"],series:[{name:"=柱图=",type:"column",data:[35,8,25,37,4,20]},{name:"=折线=",type:"line",data:[70,40,65,100,44,68]}]}};e.default=n},ff60:function(t,e,a){var n=a("7171");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("e831b460",n,!0,{sourceMap:!1,shadowMode:!1})}}]);