<template>
	<view>
		<cu-custom @BackPageEvent="BackPageEvent()" bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">工单装车及库位详细</block>
		</cu-custom>
		<!-- ===卡板指定库位扫描=== -->
		<form>
		    <view ref="elForm" class="elForm" >
		   
		   </view>
		</form>
		<view class="bingStorage-zTable">
			<zTable :stickSide="true" :singleSelect="true" @onClick='onClickRowEvent' :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="cardBoardNoInfoData" :columns="cardBoardNoInfoColumns"></zTable>
		</view>
		<alertBox ref="alertBox" :msgContent="msgContent" :toShowModal="toShowModal" @cancelModal="cancelModal" @comfirmModal="comfirmModal"></alertBox>
	</view>
</template>

<script>
	import alertBox from '@/components/color-ui-dialog/color-ui-dialog.vue'
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
		components:{zTable,searchForm,uniPopup,uniIcon,alertBox},
		data() {
			return {
				msgContent:'',
				hasDeletedData:false,// 是否删除过数据
				currentRowItem:{},// 当前选择项目
				currentAction:'',//当前确认弹框类型
				toShowModal:false,// 是否显示确认弹出框
				sourceType:'prepare',//数据来源,区分 备货/装车 prepare/load
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
					{title:'操作',listenerClick:true, width: 80,titleAlign:'center',columnAlign:'center',
					format: {
						template: "删除",
						names: []
					}}
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
			//debugger
			this.CarListNo = option.carListNo;
			this.orderNo = option.orderNo; // 工单号
			this.detailId = option.detailId
			this.sourceType = option.sourceType
			
		},
		methods: {
			// 删除数据后,返回上一页时,需要重新加载数据
			BackPageEvent(){
				//uni.$emit('refreshPage_loadGoodsDown','刷新页面数据');
				if(this.hasDeletedData){
					this.hasDeletedData = false
					// 登陆页面  
					uni.$emit('refreshPage_loadGoodsDown','刷新页面数据');
				}
			},
			//确认弹框-提交工单列表信息
			comfirmModal(val){
				this.toShowModal =false
				switch (this.currentAction){
					case 'deleteDetailItem':
					     this.delCardOrderNo(this.currentRowItem)
						break;		
					default:
						break;
				}
			},
			// 取消弹框
			cancelModal(val){
				this.toShowModal =false
			},
			//删除数据
			onClickRowEvent(rowItem){
				this.currentRowItem = rowItem
				this.currentAction='deleteDetailItem'
				this.msgContent =`确定删除当前项【库位:${rowItem.StationNo}】?`
				this.toShowModal =true
			},
			delCardOrderNo(rowItem){
				//debugger
				if(!!!this.CarListNo){
					uni.showToast({
						title:'装车清单号不可为空!',
						icon:'none',
						duration:2000
					})
					return
				}
				let params = {
					UserID:this.$store.getters.userInfo_getters, 
					CarListNo:this.CarListNo, //-- 装车清单号
					CardNo:rowItem.CardNo, //-- 卡板号
					OrderNo:rowItem.OrderNo //-- 工单号
				}
				let _self = this
				this.$store.dispatch('delCardOrderNoAction',params).then(res=>{
					this.hasDeletedData = true
					if(res && res.list && res.list.length>0){
						let resData = res.list[0]
						if(resData.Error==0){
							uni.showToast({
								title:'删除成功',
								icon:'none',
								duration:2000
							})
							setTimeout(()=>{
								_self.spGetPaperCarListAppInfo()
							},300)
						}else{
							uni.showToast({
								title:'删除失败err',
								icon:'none',
								duration:2000
							})
						}
						
					}
				})
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
				let params = {
					ID1:this.detailId
				}
				this.dataIsLoadding = true;
				let _self = this;
				this.$store.dispatch('getPaperZCScanInfoAction',params).then(res => {
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
