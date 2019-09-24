<template>
	<view>
		<cu-custom @BackPageEvent="BackPageEvent" bgColor="bg-gradual-blue" :isBack="true"><block slot="content">纸箱详情</block></cu-custom>
		<view>
			<view class="grid-warp">
				<view class="grid-title">
					纸箱详情
					<!-- 	<view  class="cu-tag bg-red radius">未审核</view> -->
				</view>
				<view class="grid-body">
					<view class="grid-flex padding-10">
						<view>
							<text>客户名称:{{ detailItems.bc_CustID_name }}</text>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<text>单号:{{ detailItems.bc_No }}</text>
						</view>
						<view>
							<text>日期:{{ formatData(detailItems.bi_DeDate) }}</text>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<text>纸质:{{ detailItems.bp_CArtID }}</text>
						</view>
						<view>
							<text>愣别:{{ detailItems.bp_ArtLB }}</text>
						</view>
					</view>
					
					<view class="grid-flex padding-10">
						<view>
							<text>纸长:{{ detailItems.bp_CSizeL }}</text>
						</view>
						<view>
							<text>纸宽:{{ detailItems.bp_CSizeW }}</text>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<text>数量:{{ detailItems.bi_OrderQty }}</text>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view><text>&nbsp;</text></view>
						<view>
							<text></text>
							<text class="text-price">{{ detailItems.bi_Price }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="idShowModal ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{ dialogTitle }}</view>
					<view class="action" @tap="cancelDialog"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="text-left padding-sm"><textarea maxlength="60" @input="textareaAInput" placeholder="请输入审批说明..."></textarea></view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="cancelDialog">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="okDialog">确定</button>
					</view>
				</view>
			</view>
		</view>

		<view class="button-group cu-bar bg-white tabbar border shop">
			<view class="btn-group">
				<button :disabled="btn_disabled" @click="openDialog('resolve')" class="cu-btn bg-blue round shadow-blur lg">同意</button>
				<button :disabled="btn_disabled" @click="openDialog('reject')" class="cu-btn bg-red round shadow-blur lg">驳回</button>
			</view>
		</view>
	</view>
</template>

<script>
//import colorUiDialog from '@/components/color-ui-dialog/color-ui-dialog.vue'
//import uniPopup from "@/components/uni-popup/uni-popup.vue"
import * as eventType from '@/libs/eventBusType'
import baseMixin from '@/mixins';
import { mapActions } from 'vuex';
export default {
	name: 'boxDetail', //特价详情
	mixins: [baseMixin],
	components: {},
	data() {
		return {
			//textareaAValue: '',
			btn_disabled: false,
			dialogTitle: '备注',
			idShowModal: false,
			dataSourceList: [], //数据源
			currentIndex: 0,
			detailItems: {},
			dialogType: 'reject', //对话框类型 resolve:同意,reject:驳回
			formItems: {
				Id: '',
				approvalExplain: '',
				approveState: 0
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
		//uni-app内置：option为object类型，会序列化上个页面传递的参数
		this.currentIndex = option.id;
		//console.log('onLoad option:'+this.currentIndex); //打印出上个页面传递的参数。
	},
	methods: {
		//点击返回时-回调事件
		BackPageEvent() {
			//console.warn('=====点击返回时-回调事件=====');
			//审核成功后，才删除对应的数据
			if(this.btn_disabled){
				//触发全局的自定事件。附加参数都会传给监听器回调。
				 uni.$emit(eventType.BackToPage_Refresh,{itemIndex:this.currentIndex})
			}
			
		},
		...mapActions(['boxDetailApprovalAction']),
		//提交审批
		submitContent() {
			this.btn_disabled = false;
			let params = this.formItems;
			this.boxDetailApprovalAction(params)
				.then(res => {
					uni.showToast({
						title: '审核成功',
						duration: 2000
					});
					this.btn_disabled = true;
				})
				.catch(err => {
					uni.showToast({
						title: '审核失败 err:' + err,
						icon: 'none',
						duration: 2000
					});
				});
		},
		//打开对话框，提交备注
		openDialog(type) {
			//对话框类型 resolve:同意,reject:驳回
			if (type === 'resolve') {
				this.dialogTitle = '审批说明(同意)';
				this.formItems.approveState = 1;
			} else {
				this.dialogTitle = '审批说明(驳回)';
				this.formItems.approveState = 0;
			}
			this.dialogType = type;
			this.idShowModal = true;
		},
		//备注填写-回调事件
		textareaAInput(e) {
			//this.textareaAValue = e.detail.value
			this.formItems.approvalExplain = e.detail.value;
		},
		//确认对话框-回调事件
		okDialog() {
			//审核不通过的，需要填写备注内容
			if (this.dialogType === 'reject' && this.formItems.approvalExplain === '') {
				this.idShowModal = false;
				uni.showToast({
					title: '请填写备注内容！',
					icon: 'none',
					duration: 2000
				});
			} else {
				this.submitContent();
				this.idShowModal = false;
			}
		},
		//取消对话框-回调事件
		cancelDialog() {
			this.idShowModal = false;
		},
		//加载数据-获取==参数==对应下标-数据
		loadData() {
			//debugger
			this.dataSourceList = this.$store.getters.boxList_getter;
			this.detailItems = this.dataSourceList.records[this.currentIndex];
			if (this.detailItems != null) {
				this.formItems.Id = this.detailItems.ID1;
				this.formItems.approvalExplain = '';
			}

			// console.log('this.detailItems:'+ JSON.stringify(this.detailItems));
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
.button-group {
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
