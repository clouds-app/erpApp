<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">纸板进度详情</block></cu-custom>
		<view>
			<view class="grid-warp">
				<view class="grid-title">
					纸板进度详情
				</view>
				<view class="grid-body">
					<view class="grid-flex padding-10">
						<view>
							<text>客户名称:{{ formItems.ct_Desc }}</text>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<text>单号:{{ formItems.co_No }}</text>
						</view>
						<view>
							<text>数量:{{ formItems.co_Qty }}</text>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<text>纸质:{{ formItems.co_ArtId }}</text>
						</view>
						<view>
							<text>规格:{{ formItems.Spec }}</text>
						</view>
					</view>

					<view id='cl-textarea' class="grid-flex padding-10">
						<view class="text-left padding-sm">
							<textarea  :value='textareaAValue' placeholder="进度说明..."></textarea>
						</view>
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
import * as eventType from '@/libs/eventBusType'
import baseMixin from '@/mixins';
import { mapActions } from 'vuex';
export default {
	name: 'barginPriceDetail', //特价详情
	mixins: [baseMixin],
	components: {},
	data() {
		return {
			textareaAValue: '',
			dataSourceList: [], //数据源
			currentIndex: '0',
			detailItems: {},
			formItems: {
				ct_Desc: '',//客户
				co_No: '',//订单号
				co_ArtId:'',//纸质
				Spec:'',//规格
				co_Qty:'',//数量
		
			}
		};
	},
	// #ifdef H5
	mounted() {
		this.loadData();
	},
	// #endif
	// #ifndef H5
	onReady() {
		this.loadData();
	},
	// #endif
	onLoad(option) {
		//debugger
		//uni-app内置：option为object类型，会序列化上个页面传递的参数
		this.currentIndex = option.id;
	},
	methods: {
		//加载数据-获取==参数==对应下标-数据
		loadData() {
			//debugger
			this.dataSourceList = this.$store.getters.progressList_getters;
			this.detailItems = this.dataSourceList.filter(item=>{
				if(item.co_No ===this.currentIndex){
					return item
				}
			})
			if (this.detailItems && this.detailItems.length>0) {
				this.formItems.ct_Desc = this.detailItems[0].ct_Desc//客户
				this.formItems.co_No = this.detailItems[0].co_No//订单号
				this.formItems.co_ArtId = this.detailItems[0].co_ArtId//纸质
				this.formItems.Spec = this.detailItems[0].Spec//规格
				this.formItems.co_Qty = this.detailItems[0].co_Qty//数量

			}
			if(this.currentIndex !=""){
				this.getProgressDetail()
			}
		},
		//获取详细步骤信息
		getProgressDetail(){
			let params = {
				coNo:this.currentIndex
			}
			this.$store.dispatch('getProgressDetail_action',params).then(res=>{
				console.log('==detail:==='+res.data.List)
				this.textareaAValue = res.data.List
			}).catch(err=>{
				uni.showToast({
					title:'错误:'+err,
					icon:'none',
					duration:2000
				})
			})
		}
	}
};
</script>

<style>
#cl-textarea .uni-textarea {
	width: 300px;
	height: 200px;
	display: block;
	position: relative;
	font-size: 14px;
	line-height: normal;
	}
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
.button-group {
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
