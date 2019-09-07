<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
				<block slot="content">我的</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// #ifdef H5
		mounted () {
			uni.setNavigationBarTitle({
			    title: '新的标题'
			});
		
		},
		// #endif
		// #ifndef H5
		onReady () {
			uni.setNavigationBarTitle({
			    title: '新的标题'
			});
		
		},
		// #endif
		methods: {
			
		}
	}
</script>

<style>

</style>
