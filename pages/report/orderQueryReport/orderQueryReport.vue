<template>
	<view>
			<!--订单查询-->
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
					<block slot="content">
						
					</block>
			</cu-custom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleItems:[
					{
						title:'订单汇总',
						value:'OC'
					},{
						title:'下单汇总',
						value:'BC'
					},{
						title:'业务员汇总',
						value:'SC'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
