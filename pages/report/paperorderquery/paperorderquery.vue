<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">订单查询</block>
		</cu-custom>
		paperorderquery
	</view>
</template>

<script>
	/**
	 * @description  //订单查询 paperorderquery
	 */
	import { mapActions } from 'vuex';
	import baseMixin from '@/mixins'
	export default {
		name:'paperorderquery',
		mixins:[baseMixin],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
