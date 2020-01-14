<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">工单装车及库位详细</block>
		</cu-custom>
		<!-- ===卡板指定库位扫描=== -->
		<form>
		    <view ref="elForm" class="elForm" >
		   
		   </view>
		</form>
		<view class="bingStorage-zTable">
			<zTable :stickSide="false" :singleSelect="true" @onClick='onClickRowEvent' :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="cardBoardNoInfoData" :columns="cardBoardNoInfoColumns"></zTable>
		</view>
	</view>
</template>

<script>
	import zTable from "@/components/z-table/z-table.vue"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import searchForm from '@/components/searchForm/searchDataList.vue.vue'
	//纸板入库卡板、工单扫描
	import baseMixin from '@/mixins'
	import {mapActions} from 'vuex'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		name:'inStorage',//纸板入库卡板、工单扫描
		mixins:[baseMixin],
		components:{zTable,searchForm,uniPopup,uniIcon},
		data() {
			return {
				dataIsLoadding:false,
				CarListNo:'',//装车单号,
				currentSelectItem:{},// 当前选择对象
				tableHeight:400,//表格高度
				errorContent:'暂无数据',//数据加载中...
				cardBoardNoInfoData:[],
				cardBoardNoInfoColumns: 
				[
					{
						key:'StationNo',
						title:'库位'
					},
					{
						key: 'Qty',
						title: '本板数'
					}, 
					{
						key: 'BHNum',
						title: '备货扫描数'
					},
					{
						key: 'ZCNum',
						title: '装车扫描数'
					},
					{
						key: 'CardNo',
						title: '卡板号'
					},
				],
				itemDetailID:'',//详细内容的ID
				orderNo:'',//工单号
				cardNo:'',
				scanQty:0,
				cacheKey:'',
				cardScanQtyItems:{},
			}
		},
	 // #ifdef H5
		mounted () {
			this.messageRegister();
			this.getTableHeight();
			this.spGetPaperCarListAppInfo();
		},
		// #endif
		// #ifndef H5
		onReady () {
			this.messageRegister()
			this.getTableHeight()
			this.spGetPaperCarListAppInfo();
		},
		// #endif
		onLoad(option) {
			this.CarListNo = option.carListNo;
			this.orderNo = option.orderNo; // 工单号
			this.detailId = option.detailId
			
		},
		methods: {
			//查看详细 获取对应行的数据
			onClickRowEvent(rowItem){
				this.currentSelectItem = JSON.parse(JSON.stringify(rowItem));
				this.openPopup()
			},
			// 打开修改弹框
			openPopup(){
				this.$refs.popup.open()
			},
			// 关闭修改弹框
			closePopup(){
				this.$refs.popup.close()
			},
			 async getTableHeight(){
			 			  let _self=this
			 			  let tempHeight =  _self.setTableHeight()
			 			  let otherHeight= await _self.getOtherContentHeight("elForm") 
			 			 
			 			  if(otherHeight!=null){
			 			  	
			 			  	_self.tableHeight =tempHeight-otherHeight
			 			  }
			 		
			 			},
			
			//页面通讯,事件注册
			messageRegister(){
			  // 初始化数据
			},
			spGetPaperCarListAppInfo(){
				//加载工单列表
				let data = {
					procName:'spGetPaperScanInfo',
					params:{
						//UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
						ID1:this.detailId
					}
				}
				this.dataIsLoadding = true;
				let _self = this;
				this.$store.dispatch('getExecuteDropDownDetailsAction',data).then(res => {
					//debugger
					if (res.list && res.list.length > 0) {
						this.cardBoardNoInfoData = res.list;
					}
					this.dataIsLoadding = false;
					
				}).catch(err => {
					uni.showToast({
						title:'获取清单数据失败:' + err,
						icon:'none',
						duration:2000
					})
					this.dataIsLoadding = false;
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
