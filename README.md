接口文档地址:
[](http://120.78.91.203:8083) 服务器地址
[](http://192.168.168.156:8080//clerp-app-api/swagger-ui.html#/)
[](http://120.78.91.203:8083/clerp-app-api/swagger-ui.html#/)
新需求UI设计文档说明:



第一个界面（纸板）：  
   CustName 客户 LB 楞别  Size 规格 ArtID 纸质 co_Qty 订单数，erp没有提供的那些数据，都是二维码扫描带出来的内容
   修改接口：/updateBoardNumber
   新增接口：/getWorkOrderDetails
   详情接口：/getBoardDetails


第二个界面（卡板）：
        1 卡板号扫描的内容
        2  库位
        3  纸板明细清单： /execute/{procName}
        4  保存库位（修改）

第三个界面（卡板挪位）：
         1 卡板号和原库位 扫描的结果
         2 纸板明细清单
         3 更改库位：/updateStationNo
第四个界面（App备货出仓）：
         1 装车单号下拉框： /executeDropDown/{procName}"  
         2 详情：/executeDropDownDetails/{procName}
         3 修改：

第五个界面（）：
         1忽略是第四个界面的详情

第六个界面（保存出仓界面）：
          1 车牌：/LicensePlate
          2 司机：/driver
          3 装车：/entrucking
          4 发货：/sendGoods"
          5 保存出仓：/saveWarehouses/{procName}
第七个界面（仓库货物整理）：
          1 库位号，卡板号，工单号  扫描的内容
          2 更改库位：
          3 删除明细：


	<!-- //标题 -->
		<!-- <view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 本板清单
			</view>
			<view class="action">
				<button class="cu-btn round line-red" @tap="showModal" data-target="menuModal">5</button>
			</view>
		</view> -->
		
	
	<!-- <view class="cu-form-group border-top">
				<view class="title">客ㅤ户:</view>
				<input @focus="setSearchDataListSource('guest')" v-model="inStorage.formItem.guest" placeholder="请选择户" name="input"></input>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">纸ㅤ质:</view>
						<input v-model="inStorage.formItem.paperQuality"  :disabled="true" placeholder="请输纸质" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">楞ㅤ别:</view>
						<input v-model="inStorage.formItem.Leng" :disabled="true" placeholder="请输楞别" name="input"></input>
					</view>
				</view>
			</view>
			<view class="cu-form-group border-top">
				<view class="title">规ㅤ格:</view>
				<input :disabled="true" v-model="inStorage.formItem.specs" placeholder="请输入规格" name="input"></input>
			</view>			
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">订单数:</view>
						<input v-model="inStorage.formItem.orderNum"  :disabled="true" placeholder="请输入订单数" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">本板数:</view>
						<input v-model="inStorage.formItem.banNum"  :disabled="true" placeholder="请输入本板数" name="input"></input>
					</view>
				</view>
			</view> -->
			
			
http://120.78.91.203/app
	<!-- 	<view  class="flex-sub padding-sm margin-xs radius"> 
				<button  class="cu-btn round line-red">5</button>
			</view>
			<view  class="flex-treble  padding-sm margin-xs radius"> <button @click="showDetail()" type="primary">本板清单</button>
			</view> -->
<!-- <view class="cu-list menu">
			<view class="cu-item margin-top" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 14" :key="index"
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">

				<view class="content">
					<view class="text-grey">客户123123 ㅤ[线:2/班别:3]</view>
					<view class="text-sm">
						<text class=" text-red  margin-right-xs"></text> 纸质:121ㅤ楞别:111ㅤ规格:300</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">订单数:200</view>
					<view class="cu-tag round bg-grey sm">本板数:300</view>
				</view>
				<view class="move">
					<view class="bg-red">删除</view>
				</view>
			</view>
		</view> -->