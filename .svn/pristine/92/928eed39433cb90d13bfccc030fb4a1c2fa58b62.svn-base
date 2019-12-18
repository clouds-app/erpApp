<template>
	<view @tap="isShowSearchList=false" class="cu-modal drawer-modal justify-start" :class="isShowSearchList ?'show':''">
		
		<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
			
				<view :style="[{overflow:'scroll',  height:'calc(100vh - ' + CustomBar + 'px)'}]" class="cu-list menu text-left">
					    <view  class="cu-item">
					    	<!-- 搜索框 -->
					    	<view class="cu-bar bg-white search ">
					    		<view class="search-form round">
					    			<text class="cuIcon-search"></text>
					    			<input v-model="searchKeyword" type="text" placeholder="关键词" confirm-type="search"></input>
					    		</view>
					    		<view class="action">
					    			<button @click="filterDataSource()" class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
					    		</view>
					    	</view>
					    	<!-- 搜索框 -->
					    </view>
						<view @click="getSelectDataInfo(item)"  class="cu-item arrow" v-for="(item,index) in dataSourceList" :key="index">
							<view  style="overflow: scroll;" class="content">
								<view v-text="item.ct_Desc"></view>
							</view>
						</view>
					
				</view>
		
		</view>
		
	</view>
</template>

<script>
	export default {
			name:'searchDataList',
			// props:{
			// 	// 是否显示
			// 	isShowSearchList:{
			// 		type:Boolean,
			// 		default:false
			// 	},
			// 	// 需要循环的数据
			// 	dataSourceList:{
			// 		type:Array,
			// 		default(){
			// 			return []
			// 		}
			// 	}
			// },
			data(){
				return {
					searchKeyword:'',// 关键字
					isShowSearchList:false, //是否显示
					dataSourceList:[],//dataSourceList
				}
			},
			methods:{
				//过滤数据
				filterDataSource(){
					if(this.searchKeyword.length>0){
						this.customerList = this.customerList.filter(item=>{
							return item.ct_Desc.includes(this.searchKeyword)
						})
					}else{
						this.customerList = this.customerList_filter
					}
				},
				//获取选择的业务员信息
				getSelectDataInfo(val){
					this.isShowSearchList =false
					this.$emit('getSelectDataInfo',val)
					
					// this.SalesmanSearch.SalesmanItemText =val.w_Name
					// this.SalesmanSearch.SalesmanItemId =val.w_ID
					// this.SalesmanSearch.SalesmanItem =val
				},
			}
			
	}
</script>

<style>
</style>
