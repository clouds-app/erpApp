<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">纸板出入库</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="0">
					入ㅤ库
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="1">
					寻ㅤ货
				</view>
				<view class="cu-item flex-sub" :class="2==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="2">
					出仓扫描
				</view>
			</view>
		</scroll-view>
		<!-- ===入 库=== -->
		<form v-show="0==TabCur">
			<view class="cu-form-group border-top">
				<view class="title">条ㅤ码:</view>
				<input placeholder="请输入条形码" name="input"></input>
				<button class='cu-btn bg-green shadow'>扫描</button>
			</view>
			<view class="cu-form-group">
				<view class="title">仓ㅤ位:</view>
				<input placeholder="请输入仓位" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">工单号:</view>
				<input placeholder="请输入工单号" name="input"></input>
				<button class='cu-btn bg-green shadow'>扫描</button>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">板ㅤ号:</view>
						<input placeholder="请输入板号" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">数ㅤ量:</view>
						<input placeholder="请输入数量" name="input"></input>
					</view>
				</view>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">线ㅤ别:</view>
						<input placeholder="请输入线别" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">班ㅤ别:</view>
						<input placeholder="请输入班别" name="input"></input>
					</view>
				</view>
			</view>
			<view class="cu-form-group border-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="请输入备注"></textarea>
			</view>
			<!-- <view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="输入框带个按钮" name="input"></input>
				<button class='cu-btn bg-green shadow'>验证码</button>
			</view> -->
			<!-- <view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="输入框带标签" name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view> -->
		</form>
		
		<!-- ===寻 货=== -->
		<form v-show="1==TabCur">
			<view class="cu-form-group border-top">
				<view class="title">工单号:</view>
				<input placeholder="请输入工单号" name="input"></input>
				<button class='cu-btn bg-green shadow'>扫描</button>
			</view>
			<zTable :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="dataTableList" :columns="findGoodsColumns"></zTable>
			<view class="margin-text-center">
			            <button type="primary">查ㅤ询</button>
			
			 </view>
		</form>
		<!--=== 出仓扫描 ===-->
		<form v-show="2==TabCur">
			<view class="cu-form-group border-top">
				<view class="title">车ㅤ次:</view>
				<input placeholder="请输入车次" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">工单号:</view>
				<input placeholder="请输入工单号" name="input"></input>
				<button class='cu-btn bg-green shadow'>扫描</button>
			</view>
			<zTable :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="dataTableList" :columns="findGoodsColumns"></zTable>
			<view class="margin-text-center">
			            <button type="primary">查ㅤ询</button>
			
			 </view>
		</form>
		
		<view v-show="0==TabCur" class="margin-text-center">
		            <button type="primary">入仓</button>

		 </view>
	</view>
</template>

<script>
	import zTable from "@/components/z-table/z-table.vue"
	export default {
		name:'paperIn',
		components:{zTable},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				dataTableList:[],
				errorContent:'数据加载中...',
				tableHeight:0,//表格高度
				findGoodsColumns: [{
					key: 'OrderNo',
					title: '工单号',
					width: 200
				}, {
					key: 'Station',
					title: '仓位',
					width: 200
				}, {
					key: 'FNum',
					title: '板号',
					width: 200
				}, {
					key: 'State',
					title: '状态',
					width: 145
				}],
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
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
