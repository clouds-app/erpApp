<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">备货出仓</block>
		</cu-custom>
		
		
		<view class="cu-modal show" v-if="appendModalShow" style="z-index: 100;">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">追加工单</view>
					<view class="action" @tap="closeAppendModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<form>
						<view class="cu-form-group ">
							<input ref="kuWeiInput" v-model="appendModel.OrderNo" placeholder="请输入或扫描工单号" name="input" style="text-align: left;" @blur="getStorageOrderDetail"></input>
							<button :loading="false" type="" @tap="turnOnScanCode('OrderNo')" class='cu-btn bg-green shadow'>扫描</button>
						</view>
					</form>
					<view v-if="!appendOkBtnDisabled">
						客户:{{appendRow.CustName}}
						工单:{{appendRow.OrderNo}}
						纸质:{{appendRow.ArtID}}
						库位:{{appendRow.StationNo}}
					</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="closeAppendModal">取消</button>
						<button class="cu-btn bg-green margin-left" :disabled="appendOkBtnDisabled" @tap="appendRowToList">确定</button>
		
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		<!-- ===卡板指定库位扫描=== -->
		<form>
		    <view ref="elForm" class="elForm" >
		   	<view  class="cu-form-group border-top">
		   		<view class="title">装车单号:</view>
		   		<input @click="getCarGoodsNo()" disabled v-model="formItem.carGoodsNo"  placeholder="请选择装车单号" name="input"></input>
		   		<text @click="getCarGoodsNo()" class='cuIcon-rounddown text-green'></text>
		   	</view>
		   	<view class="cu-form-group border-top">
		   		<view class="title">卡板号:</view>
		   		<input ref="kuWeiInput" v-model="formItem.cardBoardNo" @blur="spFreshCarListForAPP" placeholder="请扫描卡板号" name="input"></input>
		   		<button :loading="false" :disabled="false" type="" @click="turnOnScanCode('cardBoardNo')" class='cu-btn bg-green shadow'>扫描</button>
		   	</view>
			<!-- <view class="cu-form-group border-top">
				<view class="cl-tableDesc">纸板明细清单</view>
				
			</view> -->
		   </view>
		</form>
		<view class="bingStorage-zTable">
			<!-- -->
			<zTable :showSelect="false" :singleSelect="true" onClickCheck='onClickCheck'  :stickSide="true"  @onClick="onClickRowEvent"    :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="cardBoardNoInfoData" :columns="cardBoardNoInfoColumns"></zTable>
		</view>
		<!--  侧边搜索列表 -->
		<searchForm @getSelectDataInfo="getSelectDataInfo" :dataSource="dataSource" ref='searchForm'></searchForm>
		<alertBox ref='alertBox' :msgContent="msgContent" :toShowModal="toShowModal" @cancelModal="cancelModal" @comfirmModal="comfirmModal"></alertBox>
		<!-- 操作 按钮 -->
				<view ref="elBtn"  class="elBtn margin-text-center">
					<view  class="flex  p-xs ">
						
						<view  class="flex-twice radius">
							<button  :loading="false" type="" class="cu-btn block bg-green  lg" :disabled="formItem.carGoodsNo == ''" @click="appendModalShow=true">追加工单</button>
						</view> 
						<view  class="flex-sub radius">
								
								</view>
								<view  class="flex-twice  radius"> 
								<button @tap="goToOtherPage()" :loading="false" :disabled="formItem.carGoodsNo == ''" type="" class="cu-btn block bg-green  lg" > 出仓界面</button>
								</view>
						
					</view>
		</view>
	</view>
	
</template>

<script>
	import alertBox from '@/components/color-ui-dialog/color-ui-dialog.vue'
	import zTable from "@/components/z-table/z-table.vue"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import searchForm from '@/components/searchForm/searchDataList.vue.vue'
	//纸板入库卡板、工单扫描 P191221002
	import baseMixin from '@/mixins'
	import {mapActions} from 'vuex'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	const defaultformItem={
					cardBoardNo:'',//卡板号
					carGoodsNo:'',//装车单号
				}
	export default {
		name:'inStorage',//纸板入库卡板、工单扫描
		mixins:[baseMixin],
		components:{zTable,searchForm,uniPopup,uniIcon,alertBox},
		data() {
			return {
				missingInsertList:[],//缺少的添加的工单数据列表
				appendModel:{
					OrderNo:''
				},
				appendRow:{},
				appendModalShow:false,
				appendOkBtnDisabled:true,
				scanCard:{},
				currentAction:'',
				currentSelectId:'',// 当前选择勾选单据
				currentSelectItem:{},
				currentSelect:'carNoList',// 当前选择线别/班别
				dataSource:[],//搜索数据原
				toShowModal:false,// 是否显示确认弹框
				msgContent:'',//弹框内容信息
				scanType:'',//当前扫描类型
				tableHeight:400,//表格高度
				carNoList:[],// 装车单好列表,
				errorContent:'暂无数据',//数据加载中...
				cardBoardNoInfoData:[],
				cardBoardNoInfoClone:{},//数组转换,转换成{工单号:数据的格式}
				cardBoardNoInfoColumns: [
				
				{
					key: 'OrderNo',
					title: '工单号',
					width: 180
				}, 
				{
					key: 'StationNo',
					title: '库位',
					width: 100
				}, 
				{
					key: 'Qty',
					title: '需装数',
					width: 100
				}, 
				{
					key: 'ScanQty',
					title: '扫描数',
					width: 100
				}, 
				{
					key: 'CustName',
					title: '客户',
					width: 180
				}, 
				{
					key: 'ArtID',
					title: '纸质',
					width: 160
				}, 
				{
					key: 'Size',
					title: '规格',
					width: 160
				}, 
				{
					key: 'MinSize',
					title: '小尺寸',
					width: 160
				}, 
				{
					key: 'ZoneName',
					title: '地区',
					width: 100
				}, 
				{title:'操作',listenerClick:true, width: 80,titleAlign:'center',columnAlign:'center',
				format: {
					template: "详细",
					names: []
				}}
				],
				formItem:Object.assign({},defaultformItem),
				catchFlag:false,
				cardScanQtyItems:{}
			}
		},
		watch:{
			cardBoardNoInfoData:{
				 handler(n,o){
				  
				},
				deep:true//对象内部的属性监听，也叫深度监听
			}
		},
		mounted () {
			let _self = this;
			 uni.$on('outInCarListUpdate',function(data){
					if(_self.cardBoardNoInfoClone[data.orderNo]){
						_self.cardBoardNoInfoClone[data.orderNo].ScanQty = data.scanQty;
					}
			    })
			this.messageRegister()
			this.getTableHeight()
		},
		// #ifndef H5
		onReady () {
			this.messageRegister()
			this.getTableHeight()
		},
		// #endif
		methods: {
			// 获取工单号+扫描数
			getWorkNoInfo(){
			
			},
			// 跳转到保存出仓界面
			goToOtherPage(){
				if(this.formItem.carGoodsNo==''){
					uni.showToast({
						title:'请先选择需要操作的装车单号',
						icon:'none',
						duration:2000
					})
				}else{
					//每次数据发生了变化,就将数据缓存起来
					let key = 'outInCarList';
					//同步删除
						try{
							uni.removeStorageSync(key);
						}catch(e){
							this.catchFlag = false;
							console.log(e);
							return;
						}
						try{
							let _self = this;
							uni.setStorage({
								key: key,
								data:_self.cardBoardNoInfoData,
								success: function () {
									_self.catchFlag = true;
								}
							});
						}catch(e){
							this.catchFlag = false;
						}
						if(!this.catchFlag){
							uni.showToast({
								title:'数据缓存失败,请稍后再试!',
								icon:'none',
								duration:2000
							});
							return;
						}
					uni.navigateTo({
						url: './outStorageEdit?carListNo=' + this.formItem.carGoodsNo
					});
				}
				
			},
			// 查看更多详细
			moreDetail(){
				//跳转之前,缓存数据
				
				uni.navigateTo({
					url: './outStorageDetail?carListNo='+this.formItem.carGoodsNo
				});
			},
			// 单钩单选框 触发事件
			onClickCheck(rowItem){
				//  debugger
							
			},
			//确定删除当前数据吗获取对应行的数据
			onClickRowEvent(rowItem){
				console.log(rowItem);
				//debugger
				//this.currentSelectItem = rowItem
				// this.currentAction='deleteDetailItem'
				// this.msgContent ='确定删除当前数据吗?'
				// this.toShowModal =true
				let cacheKey = 'cardQtyListCache';
				//debugger;
				//同步删除
					try{
						uni.removeStorageSync(cacheKey);
					}catch(e){
						this.catchFlag = false;
						console.log(e);
						return;
					}
					try{
						let _self = this;
						uni.setStorage({
							key: cacheKey,
							data:JSON.stringify(_self.cardScanQtyItems),
							success: function () {
							}
						});
					}catch(e){
						console.log(e);
					}				
				uni.navigateTo({
				    url: `./outStorageDetail?orderNo=${rowItem.OrderNo}&cardNo=${rowItem.CardNo}&scanQty=${rowItem.ScanQty}&cacheKey=${cacheKey}`
				});
			},
			// 删除备货出仓 明细
			deleteDetailItem(_id){
				let params ={
					id :_id
				}
				this.$store.dispatch('delateStockUpDetailedAction',params).then(res=>{
					uni.showToast({
						title:'删除成功!',
						icon:'none',
						duration:2000
					})
				}).catch(err=>{
					uni.showToast({
						title:'删除失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			//查询卡板信息列表BY 卡板号
			getCardBoardNoInfo() {
				this.cardBoardNoInfoData= []
				if (this.formItem.carGoodsNo == '') {
					uni.showToast({
						title:'请选择装车单号',
						icon:'none',
						duration:2000
					})
					return;
				}
				let data = {
					procName:'spGetPaperCarListInfoForAPP',
					params:{
						UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
						CarListNo:this.formItem.carGoodsNo
					}
				}
				this.dataIsLoadding = true;
				this.getExecuteDropDownDetailsAction(data).then(res => {
					//debugger
					if (res && res.list.length > 0) {
						this.cardBoardNoInfoData = res.list;
						this.formItem.originalKuNo = this.cardBoardNoInfoData[0].ap_StationNo;
						this.cardBoardNoInfoData.forEach((item,index)=>{
							this.cardBoardNoInfoClone[item.OrderNo] = item;
						})
						
					}else{
						uni.showToast({
							title:'没有该卡板对应的数据',
							icon:'none',
							duration:2000
						})
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
			},
			// 选择  装车单号  数据回调事件
			getSelectDataInfo(item){
				//debugger
				switch (this.currentSelect){
					case 'carNoList':
						this.formItem.carGoodsNo=item.ct_Desc
						this.getCardBoardNoInfo()
						break;
					default:
						break;
				}
				// 每次切换装车清单时,清空数据卡板号缓存列表
				this.scanCard={}
				// 清除  当前装车清单 丢失的数据 
				this.missingInsertList=[]

			},
			// 添加数据源 到 选择装车单号
			getCarGoodsNo(){
				//debugger
					this.$refs['searchForm'].isShowSearchList=true
					this.$refs['searchForm'].dataSourceList =this.carNoList
					this.dataSource =this.carNoList
					//清除卡板号 缓存
					
			},
			// 加载装车单好列表
			loadCarGoodsNoList(){
				this.carNoList=[]
				let params ={
					procName:'spGetLoadCarNoListForAPP',
					params:{
						UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
					}
				}
				let _self =this
				this.$store.dispatch('getExecuteDropDownAction',params).then(res=>{
					if(res && res.list && res.list.length>0){
						//debugger
						let resData=res.list.map(item=>{
							let formatData = {
								type:item.LoadNo,
								ct_Desc:item.LoadNo
							}
							return formatData
						})
						_self.carNoList =resData
					}
				}).catch(err=>{
					uni.showToast({
						title:'加载装车单号列表失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			//确认弹框-提交工单列表信息
			comfirmModal(val){
				this.toShowModal =false
				switch (this.currentAction){
					case 'preSubmitDataList':
					     this.submitAddList()
						break;	
					case 'deleteDetailItem':
						this.deleteDetailItem(this.currentSelectItem.ap_OrderNo)
						break;				
					default:
						break;
				}
			},
			// 取消弹框
			cancelModal(val){
				this.toShowModal =false
				// switch (this.currentAction){
				// 	case 'cardBoardNotNull':
				// 	    this.formItem.cardBoardNo =this.tempScanCode
				// 	    this.getCardBoardNoInfo()
				// 		break;			
				// 	default:
				// 		break;
				// }
			},
			// 准备--提交提交工单列表信息
			preSubmitDataList(){
				this.currentAction='preSubmitDataList'
				this.msgContent ='确定提交数据吗?'
				this.toShowModal =true
			},
			// 提交添加卡板工单信息列表
			submitAddList(){
			  let params = {
				   newStationNo:this.formItem.kuNo,
				   StationNo:this.cardBoardNoInfoData[0].ap_StationNo
			  }
			  this.$store.dispatch('setStationNoAction',params).then(res=>{
				  // 清空数据
				  this.formItem = Object.assign({},defalutformItem)
				  this.cardBoardNoInfoData =[]
				  uni.showToast({
				  	title:'操作成功',
				  	icon:'none',
				  	duration:2000
				  })
			  }).catch(err=>{
					uni.showToast({
						title:'操作失败:'+err,
						icon:'none',
						duration:2000
					})
			  })
			},
			async getTableHeight(){
						 // debugger
						  let _self=this
						  let tempHeight =  _self.setTableHeight()
						  let otherHeight= await _self.getOtherContentHeight("elForm") 
						  let otherHeight2 = await _self.getOtherContentHeight("elBtn")
						  if(otherHeight!=null && otherHeight2!=null){
						  	
						  	_self.tableHeight =tempHeight-otherHeight-otherHeight2-20
						  }
					
						},
				//映射方法
			...mapActions(['getExecuteDropDownDetailsAction','getStorageOrderDetailAction']),
			//页面通讯,事件注册
			messageRegister(){
			 this.$store.commit('setOutStorageDetailsList',[])
			  // 初始化数据
			  this.loadCarGoodsNoList()
			},
			// 获取纸板明细数量
			getcardBoarDetailList(){
				let params ={
					procName:'spFreshCarListForAPP',
					params:{
						CardNo:this.formItem.cardBoardNo,
						UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
						CarListNo:this.formItem.carGoodsNo
					}
				}
				this.$store.dispatch('getExecuteDropDownAction',params).then(res=>{
					//this.getCardBoardNoInfo()
					//debugger
					//console.log(res);
					uni.showToast({
						title:'更新明细成功,请稍后...',
						icon:'none',
						duration:2000
					})
				}).catch(err=>{
					uni.showToast({
						title:'抱歉,更新明细失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			   //===打开扫描===
			turnOnScanCode(type){
					this.scanType = type
					let _self =this
					// 调起条码扫描
					uni.scanCode({
					    scanType: 'barCode', // 固定条形码
					    success: function (res) {
					        console.log('条码内容：' + res.result);
							switch (type){
								case 'cardBoardNo': 
								    //卡板号
								    _self.formItem.cardBoardNo = res.result
									//_self.getcardBoarDetailList() //工单号验证查询
									_self.spFreshCarListForAPP();
									break;
								case 'OrderNo':
										_self.appendModel.OrderNo = res.result;
									break;
								default:
									break;
							}
						
					    }
					});
				},
			getStorageOrderDetail(){
					//this.cardBoardNoInfoData
					//this.$refs.appendRow.open();
					if(this.appendModel.OrderNo == ''){
						return;
					}
					this.$store.dispatch('getStorageOrderDetailAction',this.appendModel).then(res=>{
						if(res.list.length > 0){
							this.appendRow = res.list[0];
							this.appendOkBtnDisabled = false;
						}else{
							this.appendModel.OrderNo = '';
							uni.showToast({
								title:'该工单没有对应的信息',
								icon:'none',
								duration:2000
							});
						}
						
					}).catch(err=>{
						uni.showToast({
							title:'抱歉,工单明细获取失败,请稍后再试',
							icon:'none',
							duration:2000
						}) 
					})
				},
			// 追加工单	
			appendRowToList(){
					if(Object.keys(this.appendRow).length == 0){
						uni.showToast({
							title:'请输入工单号,稍等片刻',
							icon:'none',
							duration:2000
						})
						return;
					}
					
					let findData = this.cardBoardNoInfoData.find(res=>{
						return res.OrderNo == this.appendModel.OrderNo;
					});
					
					if(findData){
						uni.showToast({
							title:'工单已在当前列表中存在',
							icon:'none',
							duration:2000
						});
					}else{
						this.bindingMissingDataToAppendList()
						//FIX 修复单据先追加后 扫描卡板号 导致追加扫描数为 空
						this.cardBoardNoInfoClone[this.appendRow.OrderNo] = this.appendRow
						this.cardBoardNoInfoData.push(this.appendRow)
					}
					this.closeAppendModal();
				},
			// 追加清单 丢失 的扫描数 	
			bindingMissingDataToAppendList(){
				//debugger
				let _self=this
				if(this.missingInsertList.length>0){
					this.missingInsertList.map(item=>{
						if(item.OrderNo == _self.appendRow.OrderNo){
							_self.appendRow.ScanQty = item.Qty
						}
					})
				}
				
			},	
			closeAppendModal(){
					this.appendRow={};
					this.appendModel.OrderNo = '';
					this.appendOkBtnDisabled = true;
					this.appendModalShow = false;
				},
			spFreshCarListForAPP (){
				//debugger
				     let _self=this
					//存在说明已经扫过了,不能再扫了
					if(this.formItem.cardBoardNo == ''){
						return;
					}
					let currentScan = ''+this.formItem.cardBoardNo;
					if(this.scanCard[currentScan]){
						//this.scanCard[currentScan]++;
						uni.showToast({
							title:`${this.formItem.cardBoardNo}卡板号已经被扫描了`,
							icon:'none',
							duration:2000
						});
						this.formItem.cardBoardNo = '';
						return;
					}
					//获取该卡板上每	个订单的扫描数，前端根据工单号更新相应的扫描数
					let params = {
					   procName:'spFreshCarListForAPP',
					   params:{
						// 当前登陆用户名称
						UserID:this.$store.getters.userInfo_getters,
						CardNo:this.formItem.cardBoardNo 
					   }
					}
					this.$store.dispatch('getExecuteDropDownAction',params).then(res=>{
						 _self.cardScanQtyItems[_self.formItem.cardBoardNo] = JSON.parse(JSON.stringify(res.list));
					//debugger
						res.list.forEach((item,index)=>{
							let tempOrderNo =item.OrderNo
					//debugger
							// 修复对象为空或不存在时,报错
							if(_self.cardBoardNoInfoClone[tempOrderNo]!=null){
								let scanQty = _self.cardBoardNoInfoClone[tempOrderNo].ScanQty;
								 _self.cardBoardNoInfoClone[item.OrderNo].ScanQty = scanQty + item.Qty;
								  _self.cardBoardNoInfoClone[item.OrderNo]['CardNo']=_self.formItem.cardBoardNo ;
							}else{
								_self.missingInsertList.push(item)
							}
						});
						_self.formItem.cardBoardNo = '';
						_self.scanCard[currentScan] ='A';
						
					}).catch(err=>{
						
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
