<template>
	<view>
		<cu-custom @searchEvent="openSearchEventForm" bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">纸箱面积报价</block>
				<block slot="right">查询</block>
		</cu-custom>
		
		<!-- ===纸箱面积报价=== -->
		<form v-show="0==TabCur">
			<zTable  :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="TableData_boxArea" :columns="Columns_boxArea"></zTable>
		</form>
		
	<searchForm :isBoxArea="true" @comfirmEvent="searchComfirmEvent" ref='searchForm'></searchForm>	
	</view>
</template>

<script>
	// (bp_CustID)客户编号
	// (ct_Desc)客户名称
	// (bi_SalerPrice)生效日期
	// (bi_ArtID)纸质
	// (h_Name)坑别
	// (bi_SalerPrice)报价
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
				     bp_CustID:'',//客户编号
					 bi_ArtID:'',//纸质
				},
				TabCur: '0',
				scrollLeft: 0,
				errorContent:'暂无数据',//数据加载中...
				tableHeight:0,//表格高度
				TableData_boxArea: [],
				Columns_boxArea:[{
					key: 'bp_CustID',
					title: '客户编号',
					width: 200
				},{
					key: 'ct_Desc',
					title: '客户名称',
					width: 200
				}, {
					key: 'bi_SalerPrice',
					title: '生效日期',
					width: 200
				}, 
				{
					key: 'bi_ArtID',
					title: '纸质',
					width: 145
				},
				{
					key: 'h_Name',
					title: '坑别',
					width: 145
				},
				{
					key: 'bi_SalerPrice',
					title: '报价',
					width: 145
				},
				],
			
			}
		},
		// #ifdef H5
		mounted () {
			this.getDataSource()
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
				//debugger
				this.searchParams =Object.assign(this.searchParams,params)
				if(this.searchParams.ctCode==null){
					this.searchParams.ctCode=''
				}
				if(this.searchParams.bp_CustID==null){
					this.searchParams.bp_CustID=''
				}
				if(this.searchParams.bi_ArtID==null){
					this.searchParams.bi_ArtID=''
				}
				this.getDataSource()
			},
			//查询数据
			getDataSource(){
				switch (this.TabCur){
					case '0':
					//原纸报价--查询
					this.getQutation_boxArea()
					break;
					default:
					//原纸报价--查询
					this.getQutation_boxArea()
						break;
				}
			},
			//原纸报价--查询
			getQutation_boxArea(){
				//debugger
				// if(this.TableData_boxArea.length!=0){
				// 	return
				// }

				let params = {
					bp_CustID:this.searchParams.ctCode,//(客户编号)
					bi_ArtID:this.searchParams.bi_ArtID,//(纸质)
				}
				this.$store.dispatch('getQutation_boxArea_action',params).then(res=>{
					//debugger
					this.TableData_boxArea = res.data.records
				}).catch(err=>{
					this.TableData_boxArea=[]
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
