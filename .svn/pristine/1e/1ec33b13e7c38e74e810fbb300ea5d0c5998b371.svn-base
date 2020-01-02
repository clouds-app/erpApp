<template>
	<view>
		<view class="header">
			<view class="banner">
				<image src="../../static/index-banner3.jpg" style="width:100%;height: 400rpx;"></image>
			</view>
			<!-- <view class="radius solid-bottom bg-white notice">
				<view class="notice-content">
					通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。
				</view>
			</view> -->
		</view>
		<block v-for="(item,index) in allMenuList.function" :key="index">
			<view class="grid-warp">
				<view class="grid-title">{{item.title}}</view>
				<view class="grid-body">
					<view class="cu-list grid col-3 no-border">
					
							<block v-for="(subItem,subIndex) in item.children" :key="subIndex">
							<view class="cu-item" @tap="turnToPage(subItem.data.resLink,subIndex)">
								<image class="image" :src="getImgUrl(subItem.data.resIcon)" mode="aspectFill" />
								
								<!-- <block v-if="subItem.data!=null && subItem.data.resNotice!=null">
									<view  class="cu-tag badge" style="padding-top: 2px;">         <block v-show="false">{{getNotice(subIndex,subItem.data.resNotice)}}</block>
										<block >{{Number(subItem.data.resAuthMark)}}</block>
									</view>
								</block> -->
							
								<text class="text">{{subItem.title}}</text>
							</view>
						</block>
					</view>
				</view>
			</view>
		</block>
	<!-- 	<block v-for="(item,index) in allMenuList.function" :key="index">
			<view style="margin-top: 40rpx;" class="grid-warp">
				<view class="grid-title">快捷入口</view>
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
		</block> -->
		
	<!-- 	<view style="margin-top: 40rpx;" class="grid-warp">
			<view class="grid-title">快捷入口</view>
			<view class="grid-body">
				<view class="cu-list grid col-3 no-border">
					<view class="cu-item">
						<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="aspectFill" />
						<text class="text">微信</text>
					</view>
					
					<view class="cu-item">
						<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill" />
						<text class="text">微信</text>
					</view>
					
					<view class="cu-item">
						<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png" mode="aspectFill" />
						<text class="text">QQ</text>
					</view>
					<view class="cu-item">
						<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png" mode="aspectFill" />
						<text class="text">抖音</text>
					</view>
					<view class="cu-item">
						<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png" mode="aspectFill" />
						<text class="text">百度</text>
					</view>
					<view class="cu-item">
						<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png" mode="aspectFill" />
						<text class="text">支付宝</text>
					</view>
				
 				</view>
			</view>
		</view> -->
	
	
	</view>
</template>

<script>
	import { mapActions } from 'vuex';
	import baseMixin from '@/mixins'
	export default {
		name:'indexMenu',
		mixins:[baseMixin],
		data() {
			return {
				 idShowModal:false,
				 loading:80,
			     allMenuList:[],//功能菜单列表
			}
		},
		// #ifdef H5
		mounted () {
			this.allMenuList = this.menuList
			  
			//console.warn('allMenuList.function:'+JSON.stringify(this.allMenuList.function))
		},
		// #endif
		// #ifndef H5
		onReady () {
			this.allMenuList = this.menuList
		},
		// #endif
		methods: {
			//獲取通知信息
			getNotice(index,_url){
			       if(_url.length<10 || this.hasUpdate){
			          return
			       }
				   //console.log('==getNotice==:'+_url)
			       let params ={
			           url:_url
			       }
			       let _self=this
			       this.$store.dispatch('getNoticeInfoAction',params).then(res=>{
					    //  console.log('getNoticeInfoAction:'+res.data)
			             _self.hasUpdate =true //已經更新
			             if(Number(res.data)>0){
			                let updateParams ={
			                    resAuthMark:res.data
			                }
			            _self.allMenuList.function[0].children[index].data = Object.assign({}, _self.allMenuList.function[0].children[index].data, updateParams)

			             }
			       }).catch(err=>{
			            _self.hasUpdate =true
			            uni.showToast({
			            	title:'获取NoticeInfo失败:'+err,
							icon:'none',
							duration:2000
			            })
			       })
			      // return '1'
			   },
			//跳转到指定页面
			turnToPage(_url){
				//debugger
				if(_url.includes('/pages')){
					uni.navigateTo({
						url: _url
					});
				}else{
					switch (_url){
							case 'zx':
								uni.navigateTo({
									url: '/pages/verify/boxApproval/boxApproval'
								});
								break;
							case 'tax':
								uni.navigateTo({
									url: '/pages/verify/bargainPrice/bargainPrice'
								});
								break;
							case 'material':
							uni.navigateTo({
								url: '../verify/material/material'
							});
								break;
							case 'purchases':
							uni.navigateTo({
								url: '../verify/originalPaper/originalPaper'
							});
								break;
							case 'paperIn':
							uni.navigateTo({
								url: '../warehouse/paperIn/paperIn'
							});
							break;
							case 'boxIn':
							uni.navigateTo({
								url: '../warehouse/boxIn/boxIn'
							});
							break;
							case 'paperOB':
							uni.navigateTo({
								url: '../warehouse/paperOB/paperOB'
							});
								break;
							default:
							    uni.showToast({
							    	title:'找不到指定路径，请确认！'+_url,
									icon:'none',
									duration:2000
							    })
								break;
						}
					// switch (_url){
					// 	case 'compfactorykanban':
					// 		uni.navigateTo({
					// 			url: '../report/compfactorykanban/compfactorykanban'
					// 		});
					// 		break;
					// 	case 'deliveryQuery':
					// 	uni.navigateTo({
					// 		url: '../report/deliveryquery/deliveryquery'
					// 	});
					// 		break;
					// 	case 'PaperOrderQuery':
					// 	uni.navigateTo({
					// 		url: '../report/paperorderquery/paperorderquery'
					// 	});
					// 		break;
					// 	case 'SumOfCustArrears':
					// 	uni.navigateTo({
					// 		url: '../report/sumofcustarrears/sumofcustarrears'
					// 	});
					// 		break;
					// 	default:
					// 	    uni.showToast({
					// 	    	title:'找不到指定路径，请确认！',
					// 			icon:'none',
					// 			duration:2000
					// 	    })
					// 		break;
					// }
								
				}
				
			}

		}
	}
</script>

<style>
	.header{
		position: relative;
	}
	.notice{
		width: 80%;
		margin-left: 10%;
		position: absolute;
		bottom: -30rpx;
		color: #333333;
		padding: 15rpx;
		font-size: 32rpx;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.notice-content {
		animation: 10s wordsLoop linear infinite normal;
	}
	
	@keyframes wordsLoop {
	            0% {
	                transform: translateX(200px);
	                -webkit-transform: translateX(200px);
	            }
	            100% {
	                transform: translateX(-100%);
	                -webkit-transform: translateX(-100%);
	            }
	        }
	 
	        @-webkit-keyframes wordsLoop {
	            0% {
	                transform: translateX(200px);
	                -webkit-transform: translateX(200px);
	            }
	            100% {
	                transform: translateX(-100%);
	                -webkit-transform: translateX(-100%);
	            }
		}
		
		
	.example-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32upx;
			color: #464e52;
			padding: 30upx;
			margin-top: 20upx;
			position: relative;
			background-color: #fdfdfd
		}
		
		
		.example-title:after {
			content: '';
			position: absolute;
			left: 0;
			margin: auto;
			top: 0;
			bottom: 0;
			width: 20upx;
			height: 40upx;
			border-top-right-radius: 20upx;
			border-bottom-right-radius: 20upx;
			background-color: #0081ff
		}
		
		.example .example-title {
			margin: 40upx 0
		}
		
		.example-body {
			border-top: 1px #f5f5f5 solid;
			background: #fff
		}
		
		.example-info {
			padding: 30upx;
			color: #3b4144;
			background: #fff
		}
		
		.image {
			width: 50upx;
			height: 50upx;
		}
		
		.text {
			font-size: 26upx;
			margin-top: 10upx;
			color: #000000 !important;
		}
		.cu-item{
			display: flex;
			align-items: center;
			padding-bottom: 20px;
		}
		.no-border{
			padding: 0;
		}
</style>