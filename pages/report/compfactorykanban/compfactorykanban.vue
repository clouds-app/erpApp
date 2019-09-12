<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">全厂综合查询</block>
		</cu-custom>
		
		<view class="cu-list menu sm-border card-menu margin-top">
			
		<!-- 	<view class="cu-item arrow" >
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">图标 + 标题</text>
				</view>
			</view> -->
			
			<view class="cu-item" >
				<view class="content padding-tb-sm">
					<view>
						<text class="cuIcon-clothesfill text-blue margin-right-xs"></text> 本月简报</view>
					<view class="text-gray text-sm">
						<view class="cu-list grid col-2 no-border">
							<view class="cu-item" v-for="(item,index) in 10" :key="index">
								<view>
									啊啊啊啊{{index}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- <view class="action">
					<text class="text-grey text-sm">小目标还没有实现！</text>
				</view> -->
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	/**
	 * @description  //全厂综合查询 compfactorykanban
	 */
	import { mapActions } from 'vuex';
	import baseMixin from '@/mixins'
	export default {
		name:'compfactorykanban',
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
