<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
				<block slot="content">报表</block>
		</cu-custom>
		
		<block v-for="(item,index) in allMenuList.report" :key="index">
			<view class="grid-warp">
				<view class="grid-title">{{item.title}}</view>
				<view class="grid-body">
					<view class="cu-list grid col-3 no-border">
						<block v-for="(subItem) in item.children" :key="subItem.data.resLink">
							<view class="cu-item" @tap="turnToPage(subItem.data.resLink)">
								<image class="image" :src="getImgUrl(subItem.data.resIcon)" mode="aspectFill" />
								<text class="text">{{subItem.title}}</text>
							</view>
						</block>
					</view>
				</view>
			</view>
		</block>
	
	</view>
</template>

<script>
	import { mapActions } from 'vuex';
	import baseMixin from '@/mixins'
	export default {
		name:'reportMenu',
		mixins:[baseMixin],
		data() {
			return {
			     allMenuList:[],//功能菜单列表
			}
		},
		// #ifdef H5
		mounted () {
			this.allMenuList = this.menuList
			//console.warn('allMenuList.report:'+JSON.stringify(this.allMenuList.report))
		},
		// #endif
		// #ifndef H5
		onReady () {
			this.allMenuList = this.menuList
		},
		// #endif
		methods: {
			//跳转到指定页面
			turnToPage(_url){
				//debugger
				switch (_url){
					case 'compfactorykanban':
						uni.navigateTo({
							url: './compfactorykanban/compfactorykanban'
						});
						break;
					case 'deliveryQuery':
					uni.navigateTo({
						url: './deliveryquery/deliveryquery'
					});
						break;
					case 'PaperOrderQuery':
					uni.navigateTo({
						url: './paperorderquery/paperorderquery'
					});
						break;
					case 'SumOfCustArrears':
					uni.navigateTo({
						url: './sumofcustarrears/sumofcustarrears'
					});
						break;
					default:
					    uni.showToast({
					    	title:'找不到指定路径，请确认！',
							icon:'none',
							duration:2000
					    })
						break;
				}
			}

		}
	}
</script>

<style>

</style>
