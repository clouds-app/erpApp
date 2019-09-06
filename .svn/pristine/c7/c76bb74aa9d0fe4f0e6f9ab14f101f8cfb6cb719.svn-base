<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">特价审批</block>
		</cu-custom>
		<view>
			<view class="grid-warp" @click="openDeatil">
				<view class="grid-title">
					深圳晨龙包装自动化有限公司
					<view  class="cu-tag bg-red radius">未审核</view>
				</view>
				<view class="grid-body">
					<view class="grid-flex padding-10">
						<view>
							<span>订单编号:2019005855</span>
						</view>
						<view>
							<span>订单日期:2019-09-06</span>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<span>纸质:A3A</span>
						</view>
						<view>
							<span>愣别:B</span>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<span>&nbsp;</span>
						</view>
						<view>
							<span></span>
							<span class="text-price">20.09</span>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openDeatil(){
				uni.navigateTo({
				    url: './bpDetail'
				});
			}
		}
	}
</script>

<style>
.card{
	width:90%;
	margin-left: 5%;
	border-radius: 10rpx;
	padding: 30rpx;
}
.status{
	
}
.grid-title{
	display: flex;
	justify-content: space-between;
}
.text-price{
	color:#4AECDB;
	font-size: 50rpx;
}
</style>
