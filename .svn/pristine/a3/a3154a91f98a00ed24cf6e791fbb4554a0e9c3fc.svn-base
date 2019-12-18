<template>
	<view>
		<scroll-view  class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="false">
				<block slot="content">我的</block>
			</cu-custom>

			<view class="cu-list menu-avatar margin-top">
				<view class="cu-item ">
					
					<!-- <uni-icon class="cu-avatar radius lg margin-top5" type="contact" size="50" color="#0081ff"></uni-icon> -->
					<text  class="cuIcon-peoplefill  cu-avatar radius lg margin-top5 color-main-cl"></text>
					<view class="content">
						<view class="text-black text-sm"><view class="text-cut">{{currenUserName}}</view></view>
						<view class="text-gray text-sm flex"> <view class="text-cut">深圳市晨龙包装自动化有限公司</view></view>
					</view>
					<!-- <view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-red sm">5</view>
					</view> -->
				</view>
				</view>
			
			<!-- <view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 菜单列表
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button>
				</view>
			</view> -->
			
			
			<!-- card-menu -->
			<view class="cu-list menu sm-border margin-top ">
				<view class="cu-item " >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">偏好设置</text>
					</view>
				</view>
			</view>
			<view class="cu-list menu sm-border margin-top ">
				<!-- 可用状态 -->
				<!-- <view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill color-main-cl"></text>
						<text class="text-black">新手指南</text>
					</view>
				</view> -->
				<view class="cu-item " >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">新手指南</text>
					</view>
				</view>
				<view class="cu-item " >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">帮助与反馈</text>
					</view>
				</view>
			</view>
			<view class="cu-list menu sm-border margin-top ">
				<view class="cu-item " >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">关于晨龙ERP</text>
					</view>
				</view>
			</view>

			<view class="padding flex flex-direction">
				<button @click="showComfirmModal=true" class="cu-btn bg-red margin-tb-sm lg">退出</button>
			</view>
		<view class="cu-modal" :class="showComfirmModal==true?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">提 示</view>
					<view class="action" @tap="showComfirmModal=false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					确定退出当前登陆吗?
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="showComfirmModal=false">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="logout()">确定</button>
		
					</view>
				</view>
			</view>
		</view>
			
			
		</scroll-view>
	</view>
</template>

<script>
	import baseMixin from '@/mixins'
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		name:'about-me',
		mixins:[baseMixin],
		components: {uniIcon},
		data() {
			return {
				showComfirmModal:false,
				currenUserName:''
			}
		},
		// #ifdef H5
		mounted () {
			this.currenUserName = this.$store.getters.userInfo_getters
		},
		// #endif
		// #ifndef H5
		onReady () {
			this.currenUserName = this.$store.getters.userInfo_getters
		},
		// #endif
		methods: {
			logout(){
				this.showComfirmModal =false
				uni.removeStorageSync('TOKEN')
				uni.removeStorageSync('menuList')
				//uni.clearStorage()
				uni.reLaunch({
				    url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style>
	
	.cu-avatar.lg {
	    width: 48px;
	    height: 48px;
	    font-size: 3em;
	    color: #0081ff;
	}
	.cu-avatar{
		background-color: #FFFFFF;
	}
	.margin-top5{
		margin-top: 10px;
	}
</style>
