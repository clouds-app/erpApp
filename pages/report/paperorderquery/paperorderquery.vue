<template>
	<view>
		<cu-custom @searchEvent="openSearchEventForm" bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">订单查询</block>
			<block slot="right">查询</block>
		</cu-custom>
		<view class="bodyContentHeight">
			<!-- <view class="button-sp-area">
							<button @click="handleFilterData('week')" class="mini-btn" :type="currentFilterType==='week'? 'primary': 'default'" size="mini">周</button>
							<button @click="handleFilterData('month')" class="mini-btn" :type="currentFilterType==='month'? 'primary': 'default'" size="mini">月</button>
							<button @click="handleFilterData('season')" class="mini-btn" :type="currentFilterType==='season'? 'primary': 'default'" size="mini">季</button>
			</view> -->
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center" style="border-bottom: 1px solid #ccc;">
					<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="0">
						按日期汇总
					</view>
					<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="1">
						按客户汇总
					</view>
					<view class="cu-item flex-sub" :class="2==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="2">
						按业务员汇总
					</view>
				</view>
			</scroll-view>
			<form>
				<!-- 数据图表 -->
				<view class="qiun-columns">
					<view class="qiun-charts">
						<!--#ifdef MP-ALIPAY -->
						<canvas
							:canvas-id="canvasColumnId"
							:id="canvasColumnId"
							class="charts"
							:width="cWidth * pixelRatio"
							:height="cHeight * pixelRatio"
							:style="{ width: cWidth + 'px', height: cHeight + 'px' }"
							disable-scroll="true"
							@touchstart="touchColumn"
							@touchmove="moveColumn"
							@touchend="touchEndColumn"
						></canvas>
						<!--#endif-->
						<!--#ifndef MP-ALIPAY -->
						<canvas
							:canvas-id="canvasColumnId"
							:id="canvasColumnId"
							class="charts"
							disable-scroll="true"
							@touchstart="touchColumn"
							@touchmove="moveColumn"
							@touchend="touchEndColumn"
						></canvas>
						<!--#endif-->
					</view>
				</view>
			</form>
		
	
		<!-- 表格数据 -->
		<zTable :tableHeight="tableHeight" :showLoading="false" :emptyText="errorContent" :tableData="dataTableList" :columns="dataColumns"></zTable>
		</view>
		<searchForm @cancelEvent="cancelEvent"  @comfirmEvent="searchComfirmEvent" ref="searchForm"></searchForm>
	</view>
</template>

<script>
// /**
//  * @description  //订单查询 paperOrderQuery
//  */
import searchForm from '@/components/searchForm/searchForm.vue'
import dayjs from 'dayjs'
import uCharts from '@/components/u-charts/u-charts.js';
import { isJSON } from '@/common/checker.js';
import zTable from '@/components/z-table/z-table.vue';
import mockData from '@/mock';
import { mapActions } from 'vuex';
import baseMixin from '@/mixins';
var _self;
var canvaColumn = null;
export default {
	name: 'paperOrderQuery',
	mixins: [baseMixin],
	components:{searchForm,zTable},
	data() {
		return {
			TabCur: '0',
			scrollLeft: 0,
			canvasColumnId:'canvasColumn',
			currentFilterType:'',//当前查询类型：周 week 月 month 季 season 是否选择，选中为 primary
			errorContent: '数据加载中...',
			tableHeight: 0, //表格高度
			currentTitle:'日期汇总',
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			categories: [], //类别 X 轴 下标数据
			series: [], //实体数据，series:[{data:{客户名称}}，{data:{数量}}]
			searchParams:{  //初始化查询参数
			     startDate:dayjs(Date.now()).subtract(1, 'year').format('YYYY-MM-DD'),//开始时间,
			     endDate:dayjs(Date.now()).format('YYYY-MM-DD'),//结束时间
			     ctCode:'',
				 mode:5 ,//汇总方式:0客户汇总 1 业务员汇总 5日期汇总
				 size:20
			},
			dataTableList: [],//表格数据
			barTopData:[],//图表数据
			//数据列描述，格式化
			dataColumns:[],//动态列原型
			     //按客户员汇总
		    dataColumnsM1: [
		                   {key: 'co_CustId', title:'客户编号', width: 200, titleAlign: 'left',columnAlign:'left'},
		                    {key: 'ct_Desc', title:'客户名称', width: 200, titleAlign: 'left',columnAlign:'left'},
		                   {key: 'co_Qty', title:'数量', width: 145, titleAlign: 'right',columnAlign:'right'},
		                    {key: 'BMoney', title:'本币金额', width: 200, titleAlign: 'right',columnAlign:'right'},
		                  ],
		   
		       //按业务员汇总
		    dataColumnsM2: [
		                   {key: 'w_Name', title:'业务员', width: 250, titleAlign: 'left',columnAlign:'left'},
		                    {key: 'co_Qty', title:'数量', width: 250, titleAlign: 'right',columnAlign:'right'},
		                      {key: 'BMoney', title:'本币金额', width: 245, titleAlign: 'right',columnAlign:'right'},
		                  ],
		   
		     //按日期汇总 5
		    dataColumnsM3: [
			                   {key: 'co_Date', title:'订单日期', width: 400, titleAlign: 'center',columnAlign:'center'},
			                    {key: 'co_Qty', title:'数量', width: 345, titleAlign: 'center',columnAlign:'center'},

			                  ]

		}
	},
	// #ifdef H5
	mounted() {
		this.getDataSource();
		this.getOtherContentHeight()
		this.$nextTick(()=>{
			setTimeout(()=>{
				//验证执行,方便个别小程序兼容
				this.tableHeight =  this.setTableHeight(true)
				this.tableHeight =this.tableHeight+55 //特别处理
			},200)
			
		})
	},
	// #endif
	// #ifndef H5
	onReady() {
		this.getDataSource();
		this.getOtherContentHeight()
		this.$nextTick(()=>{
			setTimeout(()=>{
				//验证执行,方便个别小程序兼容
				this.tableHeight =  this.setTableHeight(true)
				this.tableHeight =this.tableHeight+55 //特别处理
			},200)
			
		})
	},
	// #endif
	onLoad: function(option) {
		//图表配置
		_self = this;
		//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			})
		//#endif
		//需要和样式的设置保存一致，不然就会变形了
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(500);

	},
	methods: {
			//切换TAB查询数据
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.onChangeSwipe(this.TabCur)
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				this.$nextTick(()=>{
					// setTimeout(()=>{
					// 	//验证执行,方便个别小程序兼容
					// 	let tempHeight =  this.setTableHeight()
					// 	this.tableHeight =tempHeight-50 //特别处理
					// },200)
				})
			},
		//切换图层事件
		onChangeSwipe(value){
		       //汇总方式:默认方式 日期汇总5  客户汇总0  业务员汇总 1
		      let currentMode =Number(value)//Number(value.detail.current)
		        switch(currentMode){
		          case 0:
				   //this.canvasColumnId ='canvasColumn'
				   this.currentTitle='TOP20',
		           this.searchParams.mode = 5 //日期汇总5
		           break;
		          case 1:
				   //this.canvasColumnId ='canvasColumn1'
					this.currentTitle='TOP20',
		             this.searchParams.mode = 0 //客户汇总0
		           break;
		          case 2:
					//this.canvasColumnId ='canvasColumn2'
					this.currentTitle='TOP20',
		            this.searchParams.mode = 1  //业务员汇总
		           break;
		      }
		      this.getDataSource()
			  
		},
		//更新图表事件
		updateCanvasInWechat(){
			canvaColumn.updateData({
				series: _self.series,
				categories: _self.categories,
				//scrollPosition: 'right',
				animation: false
			});
		},
		//更加汇总模式改变，显示的列也做相应的变化
		handleSwichDataColumns(){
		        //汇总方式:0客户汇总 1 业务员汇总 5日期汇总
		      switch(this.searchParams.mode){
		         case 0:
				 this.series = [{ name: '数量', type: 'column', data: [] },{ name: '金额', type: 'line', data: [] }];
		           this.dataColumns = this.dataColumnsM1
		           break;
		          case 1:
				  this.series = [{ name: '数量', type: 'column', data: [] },{ name: '金额', type: 'line', data: [] }];
		           this.dataColumns = this.dataColumnsM2
		           break;
		          case 5:
				  this.series = [{ name: '数量', type: 'column', data: [] }];
		           this.dataColumns = this.dataColumnsM3
		           break;
		      }
		},
		//切換按鈕事件 周 月 季
		handleFilterData(type){
			//debugger
		    this.currentFilterType =type
		    switch(type){
		      case 'week':
		        this.searchParams.startDate =dayjs(Date.now()).startOf('week').format('YYYY-MM-DD')
		        this.searchParams.endDate =dayjs(Date.now()).format('YYYY-MM-DD')
		         break
		      case 'month':
		        this.searchParams.startDate =dayjs(Date.now()).startOf('month').format('YYYY-MM-DD')
		        this.searchParams.endDate =dayjs(Date.now()).format('YYYY-MM-DD')
		        break 
		      case 'season':
		        this.searchParams.startDate =dayjs(Date.now()).subtract(3, 'month').format('YYYY-MM-DD')
		        this.searchParams.endDate =dayjs(Date.now()).format('YYYY-MM-DD')
		        break
		    }
		   this.getDataSource() 
		},
		//取消查询--回调事件
		cancelEvent(){
			this.showSearchForm=false
		},
		//确认查询--回调事件
		searchComfirmEvent(params){
			//debugger
			this.currentFilterType = ''
			this.searchParams =Object.assign(this.searchParams,params)
			this.showSearchForm=false
			if(this.searchParams.ctCode==null){
				this.searchParams.ctCode=''
			}
			this.getDataSource()
		},
		//打开客户信息搜索框
		openSearchEventForm(){
		    this.showSearchForm=true
			this.$refs.searchForm.isShowSearchForm =true
		},
		//获取图表所需数据
		getEchartData(itemList){
			//debugger
			let  orderDataList = this.formatDataIntoEchart(itemList);
			//名称列表
			this.categories = orderDataList.map(item=>{
				if(item[0]==null){
					return '-'
				}
				return item[0]
			});
			//数量列表
			this.series[0].data = orderDataList.map(item=>{
				if(item[1]==null){
					return '-'
				}
				return item[1]
			});
			if(this.searchParams.mode!=5){
				//金额列表
				this.series[1].data = orderDataList.map(item=>{
					if(item[2]==null){
						return '-'
					}
					return item[2]
				});
			}
		 this.setChartDataConfig();
		},
		//格式化数据成功图表所需数据
		formatDataIntoEchart(itemList){
			let tempList = []
			let params ={}
			for(let item in itemList){
				 //汇总方式:0客户汇总 1 业务员汇总 5日期汇总
				switch(this.searchParams.mode){
				   case 0:
					params = {
						       cus_Name:itemList[item].ct_Desc,
						       cus_Qty:Number.parseFloat(itemList[item].co_Qty),
							   cus_Amount:Number.parseFloat(itemList[item].BMoney),
						       }
				     break;
				    case 1:
					params = {
							 cus_Name:itemList[item].w_Name,
							 cus_Qty:Number.parseFloat(itemList[item].co_Qty),
							 cus_Amount:Number.parseFloat(itemList[item].BMoney),
					       }
				     break;
				    case 5:
					params = {
					      cus_Name:itemList[item].co_Date,
					      cus_Qty:Number.parseFloat(itemList[item].co_Qty),
					       }
				     break;
				}
			  

			   let seriesData = Object.values(params)
			   //debugger
			   tempList.push(seriesData)
			 }
			 return tempList
		},
		 ...mapActions(['getPaperCOQueryAnaly_action']),
		 //获取送货数据
		 getDataSource(){
		   //根据开始日期(startDate)， 结束日期(endDate) ，客户编号(ctCode)查询送货信息。
		   //入参：startDate,endDate,ctCode,token;
			this.handleSwichDataColumns()
		     let params= this.searchParams
		     let _self =this
		     this.getPaperCOQueryAnaly_action(params).then(res=>{
		         _self.dataTableList =res.orderData
				 //_self.barTopData =res.topData
				 _self.getEchartData(res.topData)
				 _self.updateCanvasInWechat()
				 //console.log('res.topData'+JSON.stringify(res.topData))
		           if(_self.dataTableList.length==0){
		            _self.errorContent='暂无数据'
		         }

		     }).catch(err=>{
		        _self.errorContent='暂无数据'
				uni.showToast({
					title:'获取数据失败:'+err,
					icon:'none',
					duration:2000
				})

		     })
			
		 },
		//设置图表配置
		setChartDataConfig() {
			//debugger
			let Column = { categories: [], series: [] }
			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			Column.categories = _self.categories; //mockData.LineA.categories;//
			Column.series = _self.series; //mockData.LineA.series;//

			_self.showColumn(this.canvasColumnId, Column);
		},
		showColumn(canvasId, chartData) {
			canvaColumn = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'mix',
				fontSize: 11,
				padding: [5, 15, 15, 15],
				legend: {
					show: true,
					position: 'top',
					float: 'center',
					lineHeight: 11,
					itemGap: 30,
					padding: 10,
					margin: 5,
					//backgroundColor:'rgba(41,198,90,0.2)',
					//borderColor :'rgba(41,198,90,0.5)',
					borderWidth: 1
				},

				dataLabel: false,
				dataPointShape: true,
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				categories: chartData.categories,
				series: chartData.series,
				animation: true,
				enableScroll: true,
				xAxis: {
					disableGrid: false,
					type: 'grid',
					gridType: 'dash',
					itemCount: 4,
					scrollShow: true,
					scrollAlign: 'left'
				},
				// yAxis: {
				// 	disabled:true,
				// 	gridType:'dash',
				// 	splitNumber:4,
				// 	 min:10,
				// 	 max:180,
				// },
				yAxis: {
					data: [
						{
							calibration: true,
							position: 'left',
							title:_self.currentTitle,//柱状图
							titleFontSize: 12
						}
						// {
						//   calibration:true,
						//   position:'right',
						//   min:0,
						//   max:200,
						//   title:'金额',//折线
						//   titleFontSize:12,
						// 
						// }
					],
					showTitle:true,
					gridType: 'dash',
					dashLength: 4,
					splitNumber: 5
				},
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				extra: {
					column: {
						type: 'group',
						width: (_self.cWidth * _self.pixelRatio * 0.45) / chartData.categories.length
					}
				}
			});
		},
		touchColumn(e) {
			canvaColumn.scrollStart(e);
		},
		moveColumn(e) {
			canvaColumn.scroll(e);
		},
		touchEndColumn(e) {
			canvaColumn.scrollEnd(e);
			canvaColumn.touchLegend(e, {
				animation: true
			});
			canvaColumn.showToolTip(e, {
				format: function(item, category) {
					return category + ' ' + item.name + ':' + item.data;
				}
			});
		},

	}
};
</script>

<style>
	uni-swiper{
	    display: block;
		height: 500upx;
	}
	.button-sp-area{
		text-align: center;
		padding-top: 10rpx;
		background: #ffffff;
	}
	.button-sp-area button {
		margin-left: 40rpx;
	}
/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
.qiun-charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}

.charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
</style>
