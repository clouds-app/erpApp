<template>
	<!-- 数据图表 -->
	<view class="qiun-columns">
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas
				canvas-id="canvasColumn"
				id="canvasColumn"
				class="charts"
				:width="cWidth * pixelRatio"
				:height="cHeight * pixelRatio"
				:style="{ width: cWidth + 'px', height: cHeight + 'px' }"
				disable-scroll="true"
				@touchstart="touchColumn"
				@touchmove="moveColumn"
				@touchend="touchEndColumn"
			></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas
				canvas-id="canvasColumn"
				id="canvasColumn"
				class="charts"
				disable-scroll="true"
				@touchstart="touchColumn"
				@touchmove="moveColumn"
				@touchend="touchEndColumn"
			></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
    export default {
		name:'canvas-echart',
		data:{
			return {
				cWidth: '',
				cHeight: '',
			}
		},
		onLoad: function(option) {
			//图表配置
			_self = this;
			//#ifdef MP-ALIPAY
				uni.getSystemInfo({
					success: function(res) {
						if (res.pixelRatio > 1) {
							//正常这里给2就行，如果pixelRatio=3性能会降低一点
							//_self.pixelRatio =res.pixelRatio;
							_self.pixelRatio = 2;
						}
					}
				})
			//#endif
			//需要和样式的设置保存一致，不然就会变形了
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
		
		},
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #ffffff;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #ffffff;
	}
</style>
