<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">原纸出退仓</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="0">
					出ㅤ仓
				</view>
				<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="1">
					退ㅤ仓
				</view>
				<view class="cu-item flex-sub" :class="2==TabCur?'text-orange cur':''"  @tap="tabSelect" data-id="2">
					存库查询
				</view>
			</view>
		</scroll-view>
		<!-- ===出ㅤ仓=== --> <!-- ===退ㅤ仓=== -->
		<form v-show="0==TabCur|| 1==TabCur">
			<view class="cu-form-group border-top">
				<view class="title">指ㅤ令:</view>
				<input placeholder="请扫描条形码" name="input"></input>
				<button class='cu-btn bg-green shadow'>扫描</button>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">线ㅤ别:</view>
						<input placeholder="请输入线别" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">班ㅤ别:</view>
						<input placeholder="请输入班别" name="input"></input>
					</view>
				</view>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">发ㅤ料:</view>
						<input placeholder="请输入发料" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">领ㅤ料:</view>
						<input placeholder="请输入领料" name="input"></input>
					</view>
				</view>
			</view>
			<view class="cu-form-group border-top">
				<view class="title">卷ㅤ号:</view>
				<input placeholder="请扫描条形码" name="input"></input>
				<button class='cu-btn bg-green shadow'>扫描</button>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">纸ㅤ类:</view>
						<input placeholder="请输入纸类" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">克ㅤ重:</view>
						<input placeholder="请输入克重" name="input"></input>
					</view>
				</view>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">纸ㅤ度:</view>
						<input placeholder="请输入纸度" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">重ㅤ重:</view>
						<input placeholder="请输入重重" name="input"></input>
					</view>
				</view>
			</view>
			<view class="cu-form-group border-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="请输入备注"></textarea>
			</view>
			
		</form>

		<!--=== 存库查询 ===-->
		<form v-show="2==TabCur">
			<view class="cu-form-group border-top">
				<view class="title">制造商:</view>
				<input placeholder="请输入制造商" name="input"></input>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">纸ㅤ类:</view>
						<input placeholder="请输入纸类" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">仓ㅤ位:</view>
						<input placeholder="请输入仓位" name="input"></input>
					</view>
				</view>
			</view>
			<view class="flex border-top">
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">纸ㅤ度:</view>
						<input placeholder="请输入纸度" name="input"></input>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-form-group">
						<view class="title">克ㅤ重:</view>
						<input placeholder="请输入克重" name="input"></input>
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">卷号:</view>
				<input placeholder="请输入卷号" name="input"></input>
				<button class='cu-btn bg-green shadow'>扫描</button>
			</view>
			<zTable :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="dataTableList" :columns="paperStoreColumns"></zTable>
			<view class="margin-text-center">
			            <button type="primary">查ㅤ询</button>
			
			 </view>
		</form>

	</view>
</template>

<script>

	import zTable from "@/components/z-table/z-table.vue"
	export default {
		name:'paperOB',	///原纸出退仓
		components:{zTable},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				dataTableList:[],
				errorContent:'数据加载中...',
				tableHeight:0,//表格高度
				paperStoreColumns:[{
					key: 'ss_Station',
					title: '仓位',
					width: 140,
				},{
					key: 'v_desc',
					title: '制造商',
					width: 150,
				},{
					key: 'ss_SPaperType',
					title: '纸类',
					width: 140,
				},{
					key: 'ss_Width',
					title: '纸宽',
					width: 140,
				},{
					key: 'ss_Gram',
					title: '克重',
					width: 140,
				},{
					key: 'ss_Ewt',
					title: '重量',
					width: 140,
				},{
					key: 'ss_Coil',
					title: '卷号',
					width: 180,
				}],
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	.margin-text-center{
		text-align: center;
		margin: 20rpx;
	}
	.border-top{
		  border-top: 1px solid #eee;
	}
.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
