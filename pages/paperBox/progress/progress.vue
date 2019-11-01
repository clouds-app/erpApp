<template>
	<view>
		<cu-custom @searchEvent="openSearchEventForm" bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">纸箱进度查询</block>
				<block slot="right">查询</block>
		</cu-custom>
		
		<!-- ===纸箱面积报价=== -->
		<form v-show="0==TabCur">
			<zTable @onClick='onClickRowEvent' :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="TableData" :columns="Columns"></zTable>
		</form>
		
	<searchForm @comfirmEvent="searchComfirmEvent" ref='searchForm'></searchForm>	
	</view>
</template>

<script>
	import * as eventType from '@/libs/eventBusType'
	import searchForm from '@/components/searchForm/paperboardSF.vue'
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
				searchParams:{
					DateFr:'',//(起始日期)
					DateTo:'',// (起始日期)
					Spec:'',// (规格，未填写的时候，传入空字符串， 格式为 宽*长)
					Qty:'',// (数量, 未填写的时候，传入空字符串)
					PO:'',// (客户PO, 未填写的时候，传入空字符串)
					NoDeli:'',// (0:全部，1:已完成,2:未完成)
					SizeL:'',// (纸长)
					SizeW:'',// (纸宽)
					ArtID:'',// (纸质)
				},
				TabCur: '0',
				scrollLeft: 0,
				errorContent:'暂无数据',//数据加载中...
				tableHeight:0,//表格高度
				TableData: [],
				Columns:[
				{
					key: 'ct_Desc',
					title: '客户',
					width: 200
				}, 
				{
					key: 'co_No',
					title: '订单号',
					width: 200
				}, 
				{
					key: 'co_ArtId',
					title: '纸质',
					width: 110
				},
				{
					key: 'Spec',
					title: '规格',
					width: 200
				},
				{
					key: 'co_Qty',
					title: '数量',
					width: 120
				},
				
			    {title:'操作',listenerClick:true, width: 130,titleAlign:'center',columnAlign:'center',
				format: {
					template: "<button class='cu-btn round line-green sm'>详细</uni-button>",
					names: []
				}
				},
				
				],
			
			}
		},
		// #ifdef H5
		mounted () {
			uni.$off(eventType.BackToPage_Refresh,function(data){
				        //console.log('destroyed 移除 eventType.BackToPage_Refresh 自定义事件');
				    })
			//this.loadData()
			//this.getDataSource()
		},
		  
		// #endif
		// #ifndef H5
		onReady () {
			
		},
		// #endif
		methods: {
			loadData(){
				this.TableData = this.$store.getters.progressList_getters;
			},
			//查看详细 获取对应行的数据
			onClickRowEvent(rowItem){
				console.log('====onClickRowEvent=rowItem==:'+JSON.stringify(rowItem))
				uni.navigateTo({
					url: './progressDetail?id=' + rowItem.co_No
				});
			},
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
				//debugger
				this.searchParams =Object.assign(this.searchParams,params)
			   //(起始日期)
				if(this.searchParams.DateFr==null){
					this.searchParams.DateFr=''
				}
				// (起始日期)
				if(this.searchParams.DateTo==null){
					this.searchParams.DateTo=''
				}
			
				// (数量, 未填写的时候，传入空字符串)
				if(this.searchParams.Qty==null){
					this.searchParams.Qty=''
				}
				// (客户PO, 未填写的时候，传入空字符串)
				if(this.searchParams.PO==null){
					this.searchParams.PO=''
				}
				//纸长 
				if(this.searchParams.SizeL==null){
					this.searchParams.SizeL=''
				}
				//纸宽
				if(this.searchParams.SizeW==null){
					this.searchParams.SizeW=''
				}
				//纸质
				if(this.searchParams.ArtID==null){
					this.searchParams.ArtID=''
				}
				//订单类型  (0:全部，1:已完成,2:未完成)
				if(this.searchParams.NoDeli==null){
					this.searchParams.NoDeli=''
				}
				// (规格，未填写的时候，传入空字符串， 格式为 宽*长)
				if(this.searchParams.SizeW=='' || this.searchParams.SizeL==''){
					this.searchParams.Spec=''
				}
				this.getDataSource()
			},
			//查询数据
			getDataSource(){
				switch (this.TabCur){
					case '0':
					//原纸报价--查询
					this.getProgressData()
					break;
					default:
					//原纸报价--查询
					this.getProgressData()
						break;
				}
			},
			//进度--查询
			getProgressData(){
				// if(this.TableData.length!=0){
				// 	return
				// }
				let params = {
					DateFr:this.searchParams.DateFr,//(起始日期)
					DateTo:this.searchParams.DateTo,// (起始日期)
					Spec:this.searchParams.Spec,// (规格，未填写的时候，传入空字符串， 格式为 宽*长)
					Qty:this.searchParams.Qty,// (数量, 未填写的时候，传入空字符串)
					PO:this.searchParams.PO,// (客户PO, 未填写的时候，传入空字符串)
					NoDeli:this.searchParams.NoDeli,// (0:全部，1:已完成,2:未完成)
					SizeL:this.searchParams.SizeL,// (纸长)
					SizeW:this.searchParams.SizeW,// (纸宽)
					ArtID:this.searchParams.ArtID,// (纸质)
				}
				this.$store.dispatch('getProgress_action',params).then(res=>{
					//debugger
					this.TableData = res.data.records
				}).catch(err=>{
					uni.showToast({
						title:'错误:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
		
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
