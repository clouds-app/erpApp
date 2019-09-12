<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">送货查询</block>
		</cu-custom>
		deliveryquery
	</view>
</template>

<script>
	// /**
	//  * @description  //送货查询 deliveryquery
	//  */
	import { mapActions } from 'vuex';
	import baseMixin from '@/mixins'
	export default {
		name:'deliveryquery',
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
