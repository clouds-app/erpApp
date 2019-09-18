<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">全厂综合查询</block>
		</cu-custom>
		
		<view>
			<view class="grid-warp">
				<view class="grid-title">
					本月资金情况
				</view>
				<view class="grid-body" style="padding: 10rpx;">
					<uni-grid :column="2" :square="false" :highlight="false" :showBorder="false">
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">订单金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">送货金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">原纸入库金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">辅料送货金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">收入金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">生产面积</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">运费金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">原纸出库金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">辅料出库金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
						<uni-grid-item>
							<view class="price-mini-panel">
								<view>
									<text class="text">收支支出金额</text>
								</view>
								<view class="text-price">
									100,000
								</view>
							</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</view>
		
			<view class="grid-warp">
				<view class="grid-title">
					本月订单
				</view>
				<view class="grid-body">
					<view>
						<uni-grid :column="4" :square="false" :highlight="false" :showBorder="false">
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text"></text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">数量</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">面积</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">金额</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">月累计</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">1</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">2</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">3</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">月平均</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">1</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">2</text>
									</view>
								</view>
							</uni-grid-item>
							<uni-grid-item>
								<view class="price-mini-panel">
									<view>
										<text class="text">3</text>
									</view>
								</view>
							</uni-grid-item>
						</uni-grid>
					</view>
				</view>
			</view>
			
			<view class="grid-warp">
				<view class="grid-title">
					本月订单
				</view>
				<view class="grid-body">
					<view>
						<view></view>
						<view>
						</view>
					</view>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		components: {uniGrid,uniGridItem},
		data() {
			return {
				"chartData": {
				  "series": [{
					"name": "数量",
					"data": 50000
				  }, {
					"name": "面积",
					"data": 3000
				  }, {
					"name": "金额",
					"data": 200000
				  }]
				}
			}
		},
		methods: {
			openDeatil(){
				uni.navigateTo({
				    url: './bpDetail'
				});
			}
		},onLoad() {
			
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
	color:#0081ff;
	font-size: 40rpx;
}




</style>