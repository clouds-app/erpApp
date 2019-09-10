<template>
	<view>
		<cu-custom @BackPageEvent="BackPageEvent" bgColor="bg-gradual-blue" :isBack="true"><block slot="content">采购单详情</block></cu-custom>
		<view>
			<view class="grid-warp">
				<view class="grid-title">
						{{detailItems.poerName}}-{{detailItems.vendName}}
				</view>
				<view class="grid-body">
					
					<view class="grid-flex padding-10">
						<view>
							<span>单号:{{ detailItems.po_No }}</span>
						</view>
						<view>
							<span>供应商:{{ detailItems.vendName }}</span>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<span>金额(含税):{{detailItems.po_SumTax}}</span>
						</view>
						<view>
							<span>总数:{{detailItems.po_Qty}}</span>
						</view>
					</view>
					<view class="grid-flex padding-10">
						<view>
							<span>日期:{{ formatData(detailItems.po_PODate) }}</span>
						</view>
					</view>
					
				</view>
				<!-- <view class="grid-body">
				<z-table :columns="columns" :tableData="dataTableList"></z-table>
				</view> -->
				<block v-for="(item,index) in currentItemDetailList" :key="index">
					<view class="cu-list menu sm-border">
						<view class="grid-title">
							
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">名　　称:　　{{item.ProdName}}</text>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
							<!-- 	<text class="cuIcon-circlefill text-grey"></text> -->
								<text class="text-grey">规　　格:　　{{item.model}}</text>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">单　　位:　　{{item.unitName}}</text>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">数　　量:　　{{item.poi_PoQty}}</text>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">单　　价:　　{{item.poi_TaxPrice}}</text>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">价格(含税):　	￥{{item.TaxAmt}}</text>
							</view>
						</view>
					</view>
				</block>
			
			</view>
		</view>

		
<!-- =====对话框-弹出=====  -->	
		<view class="cu-modal" :class="idShowModal ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{ dialogTitle }}</view>
					<view class="action" @tap="cancelDialog"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="padding-xl"><textarea maxlength="60" @input="textareaAInput" placeholder="请输入审批说明..."></textarea></view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="cancelDialog">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="okDialog">确定</button>
					</view>
				</view>
			</view>
		</view>
<!-- =====对话框-弹出===== end -->
		<view class="button-group cu-bar bg-white tabbar border shop">
			<view class="btn-group">
				<button :disabled="btn_disabled" @click="openDialog('resolve')" class="cu-btn bg-blue round shadow-blur lg">同意</button>
				<button :disabled="btn_disabled" @click="openDialog('reject')" class="cu-btn bg-red round shadow-blur lg">驳回</button>
			</view>
		</view>
	</view>
</template>

<script>
import * as eventType from '@/libs/eventBusType'
import baseMixin from '@/mixins';
import { mapActions } from 'vuex';
//import zTable from "@/components/z-table/z-table.vue"
export default {
	name: 'originalPaperDetail', //原纸采购详情
	mixins: [baseMixin],
	components: {},
	data() {
		return {
			btn_disabled: false,
			dialogTitle: '审批说明',
			idShowModal: false,
			dataSourceList: [], //数据源
			currentItemDetailList:[],//当前辅料详细列表
			currentIndex: 0,
			detailItems: {},
			dialogType: 'reject', //对话框类型 resolve:同意,reject:驳回
			formItems: {
				poId: '',
				approvalExplain: '',
				approveState: 0
			},
			dataTableList: [{
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park',
					id: "1",
					
				},
				{
					name: 'Jim Green',
					age: 25,
					address: 'London No. 1 Lake Park',
					id: "2"
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park',
					id: "3"
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					id: "4"
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					id: "5"
				},
			
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					id: "6"
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					id: "7"
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					id: "8"
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					id: "9"
				}
			],
			columns: [{
					title: "ID",
					key: "id"
				},
				{
					title: 'Name',
					key: 'name'
				},
				{
					title: 'Age',
					key: 'age'
				},
				{
					title: 'Address',
					key: 'address'
				}
			],
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
		
	},
	methods: {
		...mapActions(['approveProdPoAction','searchProdPODetailAction']),
		//点击返回时-回调事件
		BackPageEvent() {
			//审核成功后，才删除对应的数据
			if(this.btn_disabled){
				//触发全局的自定事件。附加参数都会传给监听器回调。
				 uni.$emit(eventType.BackToPage_Refresh,{itemIndex:this.currentIndex})
			}
			
		},
		//查询===当前辅料===详细列表
		searchCurrentItemDetailList(){
			let params ={
				poId: this.formItems.poId
			}
			this.searchProdPODetailAction(params).then(res=>{
				this.currentItemDetailList = res.data
			}).catch(err=>{
				uni.showToast({
					title: '查询详细列表失败 err:' + err,
					icon: 'none',
					duration: 2000
				});
			})
		},
		//提交审批
		submitContent() {
			this.btn_disabled = false;
			let params = this.formItems;
			this.approveProdPoAction(params)
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
			
			this.dataSourceList = this.$store.getters.materialList_getter;
			
			this.detailItems = this.dataSourceList[this.currentIndex];
			
			if (this.detailItems != null) {
				this.formItems.poId = this.detailItems.ID1;
				this.formItems.approvalExplain = '';
				//当前辅料详细列表
				this.searchCurrentItemDetailList()
			}
		}
	}
};
</script>

<style>
	t-th{
		width: 200rpx;
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
