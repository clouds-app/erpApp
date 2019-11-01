<template>
	<view>
		<cu-custom @searchEvent="openSearchEventForm" bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">报价查询</block>
				<block slot="right">查询</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="0">
					原纸报价
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="1">
					纸质报价
				</view>
				<view class="cu-item flex-sub" :class="2==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="2">
					配纸加价
				</view>
				<view class="cu-item flex-sub" :class="3==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="3">
					楞别加价
				</view>
			</view>
		</scroll-view>
		<!-- ===原纸报价=== -->
		<form v-show="0==TabCur">
			<zTable :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="TableData_basePaper" :columns="Columns_basePaper"></zTable>
		</form>
		
		<!-- ===纸质报价=== -->
		<form v-show="1==TabCur">
			<zTable :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="TableData_paperQuality" :columns="Columns_paperQuality">
			</zTable>
			
		</form>
		<!--=== 配纸加价 ===-->
		<form v-show="2==TabCur">
			<zTable :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="TableData_paperParts" :columns="Columns_paperParts"></zTable>
		</form>
		
		<!-- ===楞别加价=== -->
		<form v-show="3==TabCur">
			<zTable :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="TableData_LB" :columns="Columns_LB"></zTable>
		</form>
	<searchForm @comfirmEvent="searchComfirmEvent" ref='searchForm'></searchForm>	
	</view>
</template>

<script>
	import searchForm from '@/components/searchForm/quotationSF.vue'
	import baseMixin from '@/mixins'
	import {mapActions} from 'vuex'
	import dayjs from 'dayjs'
	import zTable from "@/components/z-table/z-table.vue"
	export default {
		name:'paperIn',
		mixins:[baseMixin],
		components:{searchForm,zTable},
		data() {
			return {
				searchParams:{  //初始化查询参数
				     // startDate:dayjs(Date.now()).subtract(1, 'year').format('YYYY-MM-DD'),//开始时间,
				     // endDate:dayjs(Date.now()).format('YYYY-MM-DD'),//结束时间
				     ctCode:'',
				},
				TabCur: '0',
				scrollLeft: 0,
				errorContent:'暂无数据',//数据加载中...
				tableHeight:0,//表格高度
				TableData_basePaper: [],
				TableData_paperQuality: [],
				TableData_paperParts: [],
				TableData_LB: [],
				Columns_basePaper:[{
					key: 'OrderNo',
					title: '原纸编号',
					width: 200
				},{
					key: 'Station',
					title: '面纸单位',
					width: 200
				}, {
					key: 'FNum',
					title: 'A瓦',
					width: 200
				}, 
				{
					key: 'State',
					title: 'C瓦',
					width: 145
				},
				{
					key: 'State',
					title: 'E瓦',
					width: 145
				},
				{
					key: 'State',
					title: 'E瓦',
					width: 145
				},
				{
					key: 'State',
					title: 'F瓦',
					width: 145
				},
				{
					key: 'State',
					title: 'G瓦',
					width: 145
				},
				{
					key: 'State',
					title: '备注',
					width: 145
				},
				],
				//纸质报价=======
				Columns_paperQuality: [{
					key: 'OrderNo',
					title: '纸质编号',
					width: 400
				}, 
				{
					key: 'Station',
					title: '报价',
					width: 400
				}, 
				],
				//配纸加价=======
				Columns_paperParts: [{
					key: 'OrderNo',
					title: '纸质',
					width: 200
				}, 
				{
					key: 'Station',
					title: '面纸',
					width: 200
				}, 
				{
					key: 'FNum',
					title: '底纸',
					width: 200
				}, 
				{
					key: 'State',
					title: 'A坑',
					width: 145
				},
				{
					key: 'State',
					title: 'B坑',
					width: 145
				},
				{
					key: 'State',
					title: 'C坑',
					width: 145
				},
				{
					key: 'State',
					title: 'E坑',
					width: 145
				},
				{
					key: 'State',
					title: 'F坑',
					width: 145
				},
				],
				//楞别加价=======
				Columns_LB: [{
					key: 'OrderNo',
					title: '楞别',
					width: 200
				}, 
				{
					key: 'Station',
					title: '层次',
					width: 200
				}, 
				{
					key: 'FNum',
					title: '加价',
					width: 200
				}, 
				{
					key: 'State',
					title: '优惠方式',
					width: 145
				},
				{
					key: 'State',
					title: '折扣系数',
					width: 145
				},],
			}
		},
		// #ifdef H5
		mounted () {
			
		},
		  
		// #endif
		// #ifndef H5
		onReady () {
			
		},
		// #endif
		methods: {
			//切换TAB查询数据
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				this.$nextTick(()=>{
					setTimeout(()=>{
						//验证执行,方便个别小程序兼容
						let tempHeight =  this.setTableHeight()
						this.tableHeight =tempHeight-50 //特别处理
					},200)
				})
				this.getDataSource()
			},
			//打开客户信息搜索框
			openSearchEventForm(){
				this.$refs.searchForm.isShowSearchForm =true
			},
			//确认查询
			searchComfirmEvent(params){
				debugger
				this.searchParams =Object.assign(this.searchParams,params)
				if(this.searchParams.ctCode==null){
					this.searchParams.ctCode=''
				}
				this.getDataSource()
			},
			//查询数据
			getDataSource(){
				switch (this.TabCur){
					case '0':
					//原纸报价--查询
					this.getQutation_basePaper()
					break;
					case '1':
					//纸质报价--查询
				    this.getQutation_paperQuality()
					break;
					case '2':
					// 配纸加价--查询
					this.getQutation_paperParts()
					break;
					case '3':
					// 楞别加价--查询
					this.getQutation_lb()
						break;
					default:
					//原纸报价--查询
					this.getQutation_basePaper()
						break;
				}
			},
			//原纸报价--查询
			getQutation_basePaper(){
				if(this.TableData_basePaper.length!=0){
					return
				}
				let params = {
					ct_ID:this.searchParams.ctCode
				}
				this.$store.dispatch('getQutation_basePaper_action',params).then(res=>{
					this.TableData_basePaper = res
				}).catch(err=>{
					uni.showToast({
						title:'错误:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			//纸质报价--查询
			getQutation_paperQuality(){
				if(this.TableData_paperQuality.length!=0){
					return
				}
				let params = {
					ct_ID:this.searchParams.ctCode
				}
				this.$store.dispatch('getQutation_paperQuality_action',params).then(res=>{
					this.TableData_paperQuality = res
				}).catch(err=>{
					uni.showToast({
						title:'错误:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			// 配纸加价--查询
			getQutation_paperParts(){
				if(this.TableData_paperParts.length!=0){
					return
				}
				let params = {
					ct_ID:this.searchParams.ctCode
				}
				this.$store.dispatch('getQutation_paperParts_action',params).then(res=>{
					this.TableData_paperParts = res
				}).catch(err=>{
					uni.showToast({
						title:'错误:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			// 楞别加价--查询
			getQutation_lb(){
				if(this.TableData_LB.length!=0){
					return
				}
				let params = {
					ct_ID:this.searchParams.ctCode
				}
				this.$store.dispatch('getQutation_lb_action',params).then(res=>{
					this.TableData_LB = res
				}).catch(err=>{
					uni.showToast({
						title:'错误:'+err,
						icon:'none',
						duration:2000
					})
				})
			}
		}
	}
</script>

<style>
	.margin-text-center{
		text-align: center;
		margin: 20rpx;
	}
	.border-top{
		  border-top: 1px solid #eee;
	}
.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
