<template>
	<view>
		<cu-custom @searchEvent="openSearchEventForm" bgColor="bg-gradual-blue" :isBack="true">
				<block slot="content">客户欠款</block>
				<block slot="right">查询</block>
		</cu-custom>
		<view class="bodyContent">
			<zTable @onClick='onClickRowEvent' :tableHeight="tableHeight"  :showLoading="false" :emptyText="errorContent" :tableData="dataTableList" :columns="dataColumns"></zTable>
			<searchForm @comfirmEvent="searchComfirmEvent" ref='searchForm'></searchForm>
		</view>
		
	</view>
</template>

<script>
	/**
	 * @description  //客户欠款汇总表 SumOfCustArrears
	 */
	import zTable from "@/components/z-table/z-table.vue"
	import searchForm from '@/components/searchForm/searchForm.vue'
	import { mapActions } from 'vuex';
	import baseMixin from '@/mixins'
	export default {
		name:'SumOfCustArrears',
		mixins:[baseMixin],
		components:{searchForm,zTable},
		data() {
			return {
				//dataWindowH: window.innerHeight || document.body.clientHeight,
				errorContent:'数据加载中...',
				tableHeight:0,//表格高度
				searchParams:{
				     startDate:'2018-01-01',
				     endDate:'2019-07-10',
				     ctCode:'',
				},
				dataTableList: [],
					//数据列描述，格式化
				dataColumns: [
					           {key: 'vnct_name', title:'客户名称', width: 200,titleAlign: 'left',columnAlign:'left'},
					           {key: 'init_amt', title:'期初金额', width: 200,titleAlign: 'right',columnAlign:'right'},
					           {key: 'de_amt', title:'送货金额', width: 200,titleAlign: 'right',columnAlign:'right'},
					           {key: 'am_amt', title:'收款金额', width: 200,titleAlign: 'right',columnAlign:'right'},
					           {key: 'amt', title:'期末额', width: 200,titleAlign:'right',columnAlign:'right'},
						// 	  {title:'操作',listenerClick:true, width: 200,titleAlign:'center',columnAlign:'center',format: {
						// 	template: "<button class='cu-btn round line-green sm'>详细</uni-button>",
						// 	names: []
						// },},
					         ]
				
			}
		},
		// #ifdef H5
		mounted() {
			//console.warn('getSystemInfo:'+JSON.stringify(uni.getSystemInfo))
			this.getDataSource();
			this.$nextTick(()=>{
				this.tableHeight =  this.setTableHeight(false)
				//console.log('now this.tableHeight:'+this.tableHeight)
			})
			
		},
		// #endif
		// #ifndef H5
		onReady() {
			this.getDataSource();
			this.$nextTick(()=>{
				this.tableHeight =  this.setTableHeight(false)
			})
		},
		// #endif
		methods: {
			onClickRowEvent(item){
				debugger
				console.log('onClickRowEvent'+JSON.stringify(item))
			},
			...mapActions(['getAccRAnalyzer_action']),
			//确认查询回调事件
			searchComfirmEvent(params){
				//debugger
				this.searchParams =Object.assign(this.searchParams,params)
				if(this.searchParams.ctCode==null){
					this.searchParams.ctCode=''
				}
				this.getDataSource()
			},
			
			//获取客户欠款汇总数据
			getDataSource(){
			    //根据开始日期(startDate)，结束日期(endDate)，客户(ctCode)来汇总客户欠款
			    let params= this.searchParams
			    let _self =this
			    this.getAccRAnalyzer_action(params).then(res=>{
			      //debugger
			        _self.dataTableList =res
			        if(_self.dataTableList.length==0){
			           _self.errorContent='暂无数据'
			        }
			    }).catch(err=>{
			         _self.errorContent='暂无数据'
			        uni.showToast({
			        	title:'查询数据失败 err'+err,
						icon:'none',
						duration:2000
			        })
			    })
			},
			//打开客户信息搜索框
			openSearchEventForm(){
				this.$refs.searchForm.isShowSearchForm =true
			}
			
		}
	}
</script>

<style>

</style>
