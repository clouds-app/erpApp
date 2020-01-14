<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">备货出仓</block>
		</cu-custom>

		<!-- ===备货扫描=== -->
		<form>
		    <view ref="elForm" class="elForm" >
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">装车单号:</view>
						<input disabled  v-model="formItem.carGoodsNo" placeholder="暂无单号" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">码ㅤ头:</view>
						<input disabled v-model="formItem.hoverport" placeholder="暂无码头" name="input"></input>
					</view>
				</view>
			</view>
		   	<view class="cu-form-group border-top">
		   		<view class="title">卡板号:</view>
		   		<input ref="kuWeiInput" v-model="formItem.cardBoardNo" @blur="spFreshCarListForAPP" placeholder="请扫描卡板号" name="input"></input>
		   		<button :loading="false" :disabled="canScanCode" type="" @click="turnOnScanCode('cardBoardNo')" class='cu-btn bg-green shadow'>扫描</button>
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
		<!--  // 领取装车单 -->
		 <view>
		  	<uni-popup ref="popup" type="bottom">
		  		<form>
		  			<view>
						<view class="cu-form-group ">
					<view class="cl-tableDesc">
选择码头</view>
						</view>
		  				<view class="cu-form-group border-top">
		  					<view class="title">装车单号:</view>
		  					<input disabled v-model="editItem.loadCarNo"  placeholder="装车单号" name="input"></input>
		  				</view>
							<view class="cu-form-group border-top border-bottom-line">
								<view class="title">码头:</view>
								<input disabled  @click="setSearchDataListSource('hoverport')"  v-model="editItem.hoverport" placeholder="请选择装车码头" name="input"></input>
								<text @click="setSearchDataListSource('hoverport')" class='cuIcon-rounddown text-green'></text>
							</view>
		  				

			<view class="margin-text-center margin-top-sm">
											<view  class="flex  p-xs margin-bottom-sm mb-sm">
												
												<view  class="flex-twice  radius">
													<button @click="closePopup()" class="cu-btn block round line-blue margin-tb-sm lg" >取消</button>
												</view> 
												
														<view  class="flex-twice  margin-left  radius"> 
														<button @click="preSelectHoverport()" :loading="false" :disabled="canSubmitHoverport" type="" class="cu-btn block bg-green margin-tb-sm lg" >确认</button>
														</view>
												
											</view>
								</view>
		  			</view>
		  		</form>
		  	</uni-popup>
		</view>
		<!-- 操作 按钮 -->
	<view ref="elBtn"  class="elBtn margin-text-center">
					<view  class="flex  p-xs ">
						
						<view  class="flex-sub radius">
							<button  :loading="false" type="" class="cu-btn block bg-green lg" :disabled="canGetloadCarNo" @click="preCompetitionForOrders()">抢单</button>
						</view> 
						<view  class="flex-sub margin-left margin-right radius">
							<button  :loading="false" type="" class="cu-btn block bg-green lg" :disabled="canSelectHoverport" @click="openCarNolist()">码头</button>	
						</view>
						<view  class="flex-sub  radius"> 
								<button @tap="preSubmitDataList()" :loading="false" :disabled="canSaveData" type="" class="cu-btn block bg-green lg" >{{saveBtnTitle}}</button>
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
	import baseMixin from '@/mixins'
	import {mapActions} from 'vuex'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	const defaultformItem={
					cardBoardNo:'',//卡板号
					carGoodsNo:'',//装车单号
					hoverport:'', // 装车码头
				}
	export default {
		name:'loadGoodsUp',//纸板入库卡板、工单扫描
		mixins:[baseMixin],
		components:{zTable,uniPopup,searchForm,uniIcon,alertBox},
		data() {
			return {
				hasLoadGoodsDone:false,// 是否备货完成
				saveBtnTitle:'未完成',
				carNoList:[], // 装车单号列表
				carNoItem:{}, // 当前默认第一个装车
				// 领取装车单 实体
				editItem:{
					loadCarNo:'', // 装车单号
					hoverport:'', // 装车码头
					hoverportID:'' // 装车码头ID
				},
				hoverportList:[],// 码头列表
				scanCard:{}, // 卡板号缓存列表
				currentAction:'', // 当前操作弹框 类型
				currentSelect:'hoverportList',// 当前选择的弹框 回调类型
				dataSource:[],//搜索列数据原
				toShowModal:false,// 是否显示确认弹框
				msgContent:'',//弹框内容信息
				scanType:'',//当前扫描类型
				tableHeight:400,//表格高度
				errorContent:'暂无数据',//数据为空时 显示内容
				cardBoardNoInfoData:[], // 纸板明细清单 列表
				cardBoardNoInfoClone:{},//数组转换,转换成{工单号:数据的格式}
				// 表格列头格式和类型
				cardBoardNoInfoColumns: 
				[
					{
						key: 'OrderNo',
						title: '工单号',
						width: 180
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
						key: 'StationNo',
						title: '库位',
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
				// 表单实体
				formItem:Object.assign({},defaultformItem),
				catchFlag:false,
				cardScanQtyItems:{}
			}
		},
		watch: {
			cardBoardNoInfoData: {
				handler(newVal, oldVal) {
					this.checkIsDoneOrNot()
				},
				immediate: true, //刷新加载 立马触发一次handler
				deep: true // 可以深度检测到 person 对象的属性值的变化
			},
		},
		computed:{
			// 是否可以扫描
			canScanCode(){
				return !(this.cardBoardNoInfoData.length > 0 && this.formItem.hoverport!='')
			},
			// 是否可以提交码头
			canSubmitHoverport(){
				return !(this.editItem.loadCarNo !='' && this.editItem.hoverport!='')
			},
			// 是否可以抢单
			canGetloadCarNo(){
				return !(this.cardBoardNoInfoData.length == 0)
			}, 
			// 是否可以点击保存/完成
			canSaveData(){
				return (this.cardBoardNoInfoData.length == 0)
			},
			// 是否可以选择码头
			canSelectHoverport(){
				return !(this.formItem.carGoodsNo !='' && this.formItem.hoverport=='')
				
			}
			
		},
		
		// #ifdef H5
		mounted () {
			this.messageRegister()
			this.getTableHeight()
		},
		// #endif
		// #ifndef H5
		onReady () {
			this.messageRegister()
			this.getTableHeight()
		},
		// #endif
		methods: {
			preSelectHoverport(){
				this.currentAction='preSelectHoverport'
				this.msgContent ='选择码头后不可更改,确定选择吗?'
				this.toShowModal =true
			},
			// 抢单确认提示
			preCompetitionForOrders(){
				this.currentAction='preCompetitionForOrders'
				this.msgContent ='抢单后不可回退,确定抢单吗?'
				this.toShowModal =true
			},
			// 准备--提交提交工单列表信息
			preSubmitDataList(){
				this.currentAction='preSubmitDataList'
				this.msgContent ='确定提交数据吗?'
				this.toShowModal =true
			},
			//页面通讯,事件注册
			messageRegister(){
			  // 初始化数据
			  this.loadDataByUser()
			},
			// 首次加载 领取的备货 列表
			loadDataByUser(){
				let params = {
					procName:'spGetChoiceInfo' ,
					params:{
						 UserID:this.$store.getters.userInfo_getters, 
						}
				}
				let _self =this
				this.$store.dispatch('getMultipleResultsAction',params).then(res=>{
				   // debugger
					if(res!=null){
						_self.cardBoardNoInfoData= res.cardDetailList
						_self.editItem.loadCarNo=res.master.CarListNo
						_self.formItem.carGoodsNo=res.master.CarListNo
						_self.formItem.hoverport=res.master.PierName
						
					}
				}).catch(err=>{
					uni.showToast({
						title:'加载备货列表失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},		
			// 验证是否备货完成
			checkIsDoneOrNot(){
				//debugger
				let _self = this
				this.hasLoadGoodsDone=false
				if(this.cardBoardNoInfoData.length>0){
				 //every（）方法必须所有都返回true才会返回true，哪怕有一个false，就会返回false
				 this.hasLoadGoodsDone=	this.cardBoardNoInfoData.every((item)=>{
						return (item.Qty!=null && item.Qty==item.ScanQty)
					})
				}
				// 备货完成,修改提交按钮标题
				if(this.hasLoadGoodsDone){
					this.saveBtnTitle ='已完成'
				}
			},
			// 提交抢单单据
			competitionForOrders(){
				let params ={
					procName:'spGetLoadCarNoListForAPP',
					params:{
						UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
						carGoodsNo:this.editItem.loadCarNo, // 装车单号
						hoverport:this.editItem.hoverport, // 装车码头
					}
				}
				let _self =this
				this.$store.dispatch('getExecuteDropDownAction',params).then(res=>{
					if(res){
						uni.showToast({
							title:'抢单成功',
							icon:'none',
							duration:2000
						})
					}
				}).catch(err=>{
					uni.showToast({
						title:'抢单失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			// 加载首个装车单号
			loadFirstCarGoodsNo(){
				let params ={
					procName:'spGetGrabOrder',
					params:{
						UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
					}
				}
				let _self =this
				this.$store.dispatch('getBoardDetailsAction',params).then(res=>{
					if(res && res.list && res.list.length>0){
						_self.formItem.carGoodsNo =res.list[0].CarListNo
						//_self.getCardBoardNoInfo()
						_self.loadDataByUser() //重新查询 刷新界面
					}else{
						uni.showToast({
							title:'暂无装车单号!',
							icon:'none',
							duration:2000
						})
					}
				}).catch(err=>{
					uni.showToast({
						title:'获取装车单号失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			// 加载装车单号列表
			loadCarGoodsNoList(){
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
						// 设置默认值
						this.setEditItemDefaultValue()
					}
				}).catch(err=>{
					uni.showToast({
						title:'获取装车单号失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			// 设置装车单号默认值
			setEditItemDefaultValue(){
				if(this.carNoList.length>0){
					this.carNoItem= this.carNoList[0]
					//装车单号
					this.formItem.carGoodsNo=this.carNoItem.ct_Desc
					//码头 装车单号
					this.editItem.loadCarNo =this.carNoItem.ct_Desc
					//this.editItem.hoverportID =this.carNoItem.type
					// 加载纸板明细清单数据
					this.getCardBoardNoInfo()
					
				}
				
			},
			//查询 纸板明细清单 BY 装车单号
			getCardBoardNoInfo() {
				this.cardBoardNoInfoData= []
				if (this.formItem.carGoodsNo == '') {
					return;
				}
				let data = {
					procName:'spGetPaperCarListInfoForAPP',
					params:{
						UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
						CarListNo:this.formItem.carGoodsNo
					}
				}
				this.$store.dispatch('getExecuteDropDownDetailsAction',data).then(res => {
					if (res && res.list.length > 0) {
						this.cardBoardNoInfoData = res.list;
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
				}).catch(err => {
					uni.showToast({
						title:'获取清单数据失败:' + err,
						icon:'none',
						duration:2000
					})

				})
			},
			
			// 打开码头列表
			openCarNolist(){
				this.openPopup()
				// 加载码头列表
				this.loadHoverportList()
			},
			// 打开修改弹框
			openPopup(){
				this.$refs.popup.open()
			},
			// 关闭修改弹框
			closePopup(){
				this.$refs.popup.close()
			},
			// 暂存/完成出仓
			submitDataList(){
				// 服务器验证是否完成备货
				this.saveDataInToPenddingOrDone()
			},
			//保存数据-完成
			saveDataInToPenddingOrDone(){
				let params ={
					procName:'spSaveFinishForChoice',
					params:{
						// 当前登陆用户名称
						UserID:this.$store.getters.userInfo_getters, 
						CarListNo:this.formItem.carGoodsNo,
					}
				}
				let _self =this
				this.$store.dispatch('getBoardDetailsAction',params).then(res=>{
					// {"data":{"list":[{"Error":1,"Result":"更新失败"}],"outParams":null},"msg":"执行成功","status":0,"success":true
					// {list: [{Error: 1, Result: "备货扫描数与需装数对不上，请联系主管审核"}], outParams: null}
					if(res && res.list && res.list.length>0){
						
						if(res.list[0].Error===1){
							uni.showToast({
								title:'提交数据失败:'+res.list[0].Result,
								icon:'none',
								duration:2000
							})
						}else{
							_self.formItem=Object.assign({},defaultformItem)
							_self.cardBoardNoInfoData=[] // 数据重置
							uni.showToast({
								title:'提交数据成功',
								icon:'none',
								duration:2000
							})
						}
					}
					
				}).catch(err=>{
					uni.showToast({
						title:'获取装车单号失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			// 单钩单选框 触发事件
			onClickCheck(rowItem){
				//  debugger
							
			},
			//查看详细
			onClickRowEvent(rowItem){	
				uni.navigateTo({
				    url: `./loadGoodsUpDetail?detailId=${rowItem.ID1}&orderNo=${rowItem.OrderNo}&cardNo=${rowItem.CardNo}&scanQty=${rowItem.ScanQty}`
				});
			},
			
			//加载码头列表数据 
			loadHoverportList() {
				let params = {
				}
			  let _self = this
			  this.$store.dispatch('getHoverportListAction',params).then(res => {
				//debugger
				if(res && res.length>0){
					let resData=res.map(item=>{
						let formatData = {
							type:item.al_Code,
							ct_Desc:item.al_Name
						}
						return formatData
					})
					_self.hoverportList =resData
				}
				
				}).catch(err => {
					uni.showToast({
						title:'获取码头列表失败:' + err,
						icon:'none',
						duration:2000
					})
				
				})
			},
			// 选择  装车单号  数据回调事件
			getSelectDataInfo(item){
				//debugger
				switch (this.currentSelect){
					case 'hoverportList':
					    // 确认选择码头
						this.editItem.hoverport=item.ct_Desc 
						this.editItem.hoverportID=item.type 
						break;
					default:
						break;
				}
			
			},
			// 添加数据源 到 选择列表
			setSearchDataListSource(){
				this.$refs['searchForm'].isShowSearchList=true
				this.$refs['searchForm'].dataSourceList =this.hoverportList
				this.dataSource =this.hoverportList
			},
			// 确认选择码头后数据处理
			handleDataWhenGotHoverport(){
				// 码头
				// this.formItem.hoverport =this.editItem.hoverport
				// this.closePopup()
			    // 提交数据到服务
				this.confirmSelectHoverport()
			},
			// 确认选择码头后提交数据
			confirmSelectHoverport(){
				let params ={
					procName:'spSavePierInfo',
					params:{
						//UserID:this.$store.getters.userInfo_getters, // 当前登陆用户名称
						CarListNo:this.editItem.loadCarNo, // 装车单号
						PierNo:this.editItem.hoverportID, // 装车码头ID
					}
				}
				let _self =this
				this.$store.dispatch('getBoardDetailsAction',params).then(res=>{
					if (res  && res.list && res.list.length > 0){
						if( res.list[0].Error==0){
							_self.formItem.hoverport =_self.editItem.hoverport
							_self.closePopup()
							uni.showToast({
								title:'选择码头成功',
								icon:'none',
								duration:2000
							})
						}else{
							uni.showToast({
								title:'选择码头失败:'+res.list[0].Result,
								icon:'none',
								duration:2000
							})
						}
					
					}
				}).catch(err=>{
					uni.showToast({
						title:'选择码头失败:'+err,
						icon:'none',
						duration:2000
					})
				})
			},
			//确认弹框-提交工单列表信息
			comfirmModal(val){
				//debugger
				this.toShowModal =false
				switch (this.currentAction){
					case 'preSubmitDataList':
						this.submitDataList()
						break;	
					case 'preSelectHoverport':
						this.handleDataWhenGotHoverport()
						break;	
					case 'preCompetitionForOrders':
						 // 每次切换装车清单时,清空数据卡板号缓存列表
						 this.scanCard={}
						 // 加载装车单号列表
						 //this.loadCarGoodsNoList()
						 this.loadFirstCarGoodsNo()
						break;		
					default:
						break;
				}
			},
			// 取消弹框
			cancelModal(val){
				this.toShowModal =false
			},
	
			// 设置显示屏高度分配
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
			// 扫描卡板号 服务器 更新 扫描数量
		     spFreshCarListForAPP(){
				 if(this.formItem.hoverport ==''){
					 uni.showToast({
					 	title:`请先选择码头`,
					 	icon:'none',
					 	duration:2000
					 });
					 return
				 }
				// debugger
				 let _self=this
				 //存在说明已经扫过了,不能再扫了
				 if(this.formItem.cardBoardNo == ''){
				 	return;
				 }
				 let currentScan = ''+this.formItem.cardBoardNo;
				 if(this.scanCard[currentScan]){
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
				    procName:'spScanInfoForAPP',
				    params:{
				 	// 当前登陆用户名称
						UserID:this.$store.getters.userInfo_getters,
						CardNo:this.formItem.cardBoardNo,  // 卡板号
						CarListNo:this.formItem.carGoodsNo, // 装车单号
						Type:'A' // 类型 固定
				    }
				 }
				 this.$store.dispatch('getExecuteDropDownAction',params).then(res=>{
				 	//debugger
					// {Error: 1, Result: "卡板号已经扫描。"}
					if(res && res.list && res.list.length>0){
						if(res.list[0].Error===1){
							uni.showToast({
								title:'扫描失败:'+res.list[0].Result,
								icon:'none',
								duration:2000
							})
						}else{
							_self.loadDataByUser() //重新查询 刷新界面
							_self.formItem.cardBoardNo = '';
							_self.scanCard[currentScan] ='A';
							uni.showToast({
								title:`扫描成功`,
								icon:'none',
								duration:2000
							});
						}
						
					}
				 
				 }).catch(err=>{
				 	uni.showToast({
				 		title:'更新扫描数量失败:'+err,
				 		icon:'none',
				 		duration:2000
				 	})
				 })
			 },
			// 过期接口, 扫描卡板号 赋值 对应的 工单号 更新 扫描数量
			// 接口变更,数据改由服务接口处理扫描数量
			_spFreshCarListForAPP (){
					 let _self=this
					//存在说明已经扫过了,不能再扫了
					if(this.formItem.cardBoardNo == ''){
						return;
					}
					let currentScan = ''+this.formItem.cardBoardNo;
					if(this.scanCard[currentScan]){
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
						res.list.forEach((item,index)=>{
							let tempOrderNo =item.OrderNo
							// 修复对象为空或不存在时,报错
							if(_self.cardBoardNoInfoClone[tempOrderNo]!=null){
								let scanQty = _self.cardBoardNoInfoClone[tempOrderNo].ScanQty;
								 _self.cardBoardNoInfoClone[item.OrderNo].ScanQty = scanQty + item.Qty;
								  _self.cardBoardNoInfoClone[item.OrderNo]['CardNo']=_self.formItem.cardBoardNo ;
							}else{
								//_self.missingInsertList.push(item)
							}
						});
						_self.formItem.cardBoardNo = '';
						_self.scanCard[currentScan] ='A';
						// 验证是否备货完成,每次变更都要 重新验证
						_self.checkIsDoneOrNot()
						
					}).catch(err=>{
						
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
					       // console.log('条码内容：' + res.result);
							switch (type){
								case 'cardBoardNo': 
								    //卡板号
								    _self.formItem.cardBoardNo = res.result
									_self.spFreshCarListForAPP();
									break;
							
								default:
									break;
							}
						
					    }
					});
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
	.border-bottom-line{
		  border-bottom: 1px solid #eee;
	}
.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
