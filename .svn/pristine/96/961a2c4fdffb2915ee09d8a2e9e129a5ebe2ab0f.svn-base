<template>
	<view class="content">
		<view class="login-bg">
			<view class="logo-box"><image src="../../static/clsoftLogo.png" style="width: 100px;height: 100px;"></image></view>
			<view class="login-card">
				<view class="login-head">请输入您的账户</view>
				<view class="login-input login-margin-b"><input type="text" v-model="loginForm.username" placeholder="请输入用户名" focus /></view>
				<view class="login-input"><input type="password" v-model="loginForm.password" :password="true" placeholder="请输入密码" /></view>
			</view>
		</view>
		<view class="login-btn"><button class="landing" @click="getUUID()" type="primary">登陆</button></view>
	<view  class="cu-bar foot input" :style="[{bottom:0+'px'}]">
		<view class="action">
			<text class=" text-grey ">深圳市晨龙包装自动化有限公司</text>
		</view>
		<view class="action">
			<text class=" text-grey ">当前版本:{{currentVersion}}</text>
		</view>
		
	</view>
	</view>
</template>

<script>
import md5 from 'js-md5';
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			currentVersion:'1.0',
			isLoading: false,
			disabledLoginBtn: false,
			loginForm: {
				username: '',
				password: ''
			},
			currentUUId: '',
			currentMenuList: [],
			redirectPage: 'index' //登陸成功后跳轉頁面
		};
	},
	onLoad() {},
	// #ifdef H5
	mounted () {
		this.getCurrentVersion()
		this.loginForm.username = this.$store.getters.userInfo_getters
	},
	// #endif
	// #ifndef H5
	onReady () {
		this.getCurrentVersion()
		this.loginForm.username = this.$store.getters.userInfo_getters
	},
	// #endif
	methods: {
		getCurrentVersion(){
			// uni.$on('systemUpdate',function(data){
			//      console.log('监听到事件来自 systemUpdate ，携带参数 update 为：' + data.update);
			// })
			let _self=this
			// #ifdef APP-PLUS
			plus.runtime.getProperty( plus.runtime.appid, function ( wgtinfo ) {
			  
			  _self.currentVersion = wgtinfo.version
			
			} );
			// #endif
		},
		//导入合并方法，然后可以直接使用，和methods中方法类似，但参数需要查看原始定义方法 = this.$store.dispatch('handleLogin',params)
		...mapActions(['getValidatorToken_action', 'Login_action', 'getMenuByToken_action']),
		//获取用户随机码
		getUUID() {
			//debugger
			this.isLoading = true;
			this.disabledLoginBtn = true;
			let params = {
				userId: this.loginForm.username
			};
			let _self = this;
			this.getValidatorToken_action(params)
				.then(res => {
					// debugger
					_self.currentUUId = res.data;
					_self.handleLogin();
				})
				.catch(err => {
					uni.showToast({
						title: '获取Validator Token失败:' + err,
						icon: 'none',
						duration: 2000
					});
					this.disabledLoginBtn = false;
					this.isLoading = false;
				});
		},
		//user login
		handleLogin() {
			//this.$store.commit('setCurrentSelectdMenuIndex',0)
			if (this.loginForm.username != '' && this.loginForm.password != '') {
				//加密规则为md5(md5（用户密码+UUID）+UUID)
				//debugger
				let md5Pwd = md5(md5(this.loginForm.password + this.currentUUId) + this.currentUUId);
				let params = {
					userId: this.loginForm.username,
					pwd: md5Pwd
				};
				let _self = this;
				this.Login_action(params)
					.then(res => {
						// debugger
						let token = res.data.token;
						this.$store.commit('setUserObjInfo', res.data);
						this.$store.commit('setLoginToken', token);
						this.$store.commit('setUserInfo', this.loginForm.username);
						_self.getMenuList(token);
					})
					.catch(err => {
						// debugger
						uni.showToast({
							title: '登陆失败:' + err,
							icon: 'none',
							duration: 2000
						});
						this.disabledLoginBtn = false;
						this.isLoading = false;
					});
			} else {
				// _self.$toast('用户名和密码必填')
				uni.showToast({
					title: '用户名和密码必填！！',
					icon: 'none',
					duration: 2000
				});
				this.disabledLoginBtn = false;
				this.isLoading = false;
			}
		},
		//查询获取菜单BY TOKEN
		getMenuList(currentToken) {
			let params = {
				token: currentToken
			};
			let _self = this;
			this.getMenuByToken_action(params)
				.then(res => {
					//debugger
					//let tempMenu = _self.addNoticeInfoIntoArray(res);
					//_self.currentMenuList = tempMenu;
					//_self.getMenuListFirst();
					uni.switchTab({
						url: '../index/index'
					});
					this.disabledLoginBtn = false;
					this.isLoading = false;
				})
				.catch(err => {
					this.disabledLoginBtn = false;
					this.isLoading = false;
					//_self.$toast('获取菜单失败:'+err)
					uni.showToast({
						title: '获取菜单失败:' + err,
						duration: 2000,
						icon: 'none'
					});
				});
		},
		//動態添加新字段-通知信息個數
		addNoticeInfoIntoArray(retData) {
			let newDataList = [];
			if (retData.length > 0) {
				newDataList = retData.map((item, index, arr) => {
					if (item.children.length > 0) {
						let newSubDataList = item.children.map((_item, _index, _arr) => {
							_arr[_index].noticeCount = '';
							return _arr[_index];
						});
						arr[index].noticeCount = '';
						return arr[index];
					}
				});
			}
			return newDataList;
		},

	}
};
</script>

<style>
.landing {
	height: 84rpx;
	line-height: 84rpx;
	border-radius: 44rpx;
	font-size: 32rpx;
	background: linear-gradient(left, #0081ff, #1cbbb4);
}
.login-btn {
	padding: 10rpx 20rpx;
	margin-top: 350rpx;
}
.login-function {
	overflow: auto;
	padding: 20rpx 20rpx 30rpx 20rpx;
}
.login-forget {
	float: left;
	font-size: 26rpx;
	color: #999;
}
.login-register {
	color: #666;
	float: right;
	font-size: 26rpx;
}
.login-input input {
	background: #f2f5f6;
	font-size: 28rpx;
	padding: 10rpx 25rpx;
	height: 80rpx;
	line-height: 80rpx;
	border-radius: 8rpx;
}
.login-margin-b {
	margin-bottom: 25rpx;
}
.login-input {
	padding: 10rpx 20rpx;
}
.login-head {
	font-size: 34rpx;
	text-align: center;
	padding: 25rpx 10rpx 55rpx 10rpx;
}
.login-card {
	background: #fff;
	border-radius: 12rpx;
	padding: 10rpx 25rpx 40rpx;
	box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.12);
	position: relative;
	margin-top: 380rpx;
}
.login-bg {
	height: 500rpx;
	padding: 25rpx;
	background: linear-gradient(#0081ff, #1cbbb4);
	border-radius: 0 0 10% 10%;
}

.logo-box {
	width: 100px;
	position: fixed;
	left: 50%;
	margin-left: -50px;
	top: 50px;
	height: 100px;
}
</style>
