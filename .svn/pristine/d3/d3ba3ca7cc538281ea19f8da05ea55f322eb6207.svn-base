<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">辅料审批</block></cu-custom>
		<view>
			<block v-for="(item, index) in dataList" :key="index">
				<view class="grid-warp" @click="openDeatil(index)">
					<view class="grid-title">
						{{item.poerName}}-{{item.vendName}}
						<view class="cu-tag bg-red radius">未审核</view>
					</view>
					<view class="grid-body">
						<view class="grid-flex padding-10">
							<view>
								<text>单号:{{ item.po_No }}</text>
							</view>
							<view>
								<text>供应商:{{ item.vendName }}</text>
							</view>
						</view>
						<view class="grid-flex padding-10">
							<view>
								<text>金额(含税):￥{{ item.po_SumTax }}</text>
							</view>
							<view>
								<text>总数:{{item.po_Qty}}</text>
							</view>
						</view>
						<view class="grid-flex padding-10">
							<view>
								<text>日期:{{ formatData(item.po_PODate) }}</text>
							</view>
							
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
import * as eventType from '@/libs/eventBusType';
import baseMixin from '@/mixins';
import { mapActions } from 'vuex';
export default {
	name: 'material', //辅料审批
	mixins: [baseMixin],
	data() {
		return {
			dataList: [] //数据列表
		};
	},
	// #ifdef H5
	mounted() {
		this.loadData();
		let _self = this;
		//监听全局的自定义事件。事件可以由 uni.$emit 触发，回调函数会接收所有传入事件触发函数的额外参数。
		uni.$on(eventType.BackToPage_Refresh, data => {
			// console.log('监听到事件来自 update ，携带参数 msg 为：' + data.itemIndex);
			_self.dataList.splice(data.itemIndex, 1);
		});
	},
	destroyed() {
		uni.$off(eventType.BackToPage_Refresh, function(data) {
			// console.log('destroyed 移除 eventType.BackToPage_Refresh 自定义事件');
		});
	},
	// #endif
	// #ifndef H5
	onReady() {
		this.loadData();
	},
	onUnload() {
		// uni.$emit、 uni.$on 、 uni.$once 、uni.$off 触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等
		// 使用时，注意及时销毁事件监听，比如，页面 onLoad 里边 uni.$on 注册监听，onUnload 里边 uni.$off 移除，或者一次性的事件，直接使用 uni.$once 监听
		uni.$off(eventType.BackToPage_Refresh, function(data) {
			// console.log('移除 eventType.BackToPage_Refresh 自定义事件');
		});
	},
	// #endif
	methods: {
		...mapActions(['searchProdPOAction']),
		//查询原纸审批 数据列表
		loadData() {
			let params = {};
			this.searchProdPOAction(params)
				.then(res => {
					//console.log(JSON.stringify(res))
					this.dataList = res.data;
				})
				.catch(err => {
					uni.showToast({
						title: '数据查询失败 err:' + err,
						icon: 'none',
						duration: 2000
					});
				});
		},
		//打开详细页面
		openDeatil(_id) {
			uni.navigateTo({
				url: './mtDetail?id=' + _id
			});
		}
	}
};
</script>

<style>
.card {
	width: 90%;
	margin-left: 5%;
	border-radius: 10rpx;
	padding: 30rpx;
}
.status {
}
.grid-title {
	display: flex;
	justify-content: space-between;
}
.text-price {
	color: #4aecdb;
	font-size: 50rpx;
}
</style>
