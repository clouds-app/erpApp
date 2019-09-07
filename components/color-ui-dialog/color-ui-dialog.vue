<template>
	<view>
		<view class="cu-modal" :class="idShowModal?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{title}}</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
				   <slot>内容</slot>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="showModal">确定</button>
		
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'colorUiDialog',
		props:{
			toShowModal:{
				type:Boolean,
				default:false
			},
			title:{
				type:String,
				default:'备注'
			}
		},
		watch:{
			toShowModal(newVal,oldVal){
				console.warn('====toShowModal=====:'+newVal,oldVal)
				this.idShowModal = newVal
			}
		},
		data() {
			return {
				idShowModal:false,
			}
		},
		methods:{
			showModal() {
				this.$emit('showDialog',this.toShowModal)
				//this.idShowModal = true
			},
			hideModal() {
				this.$emit('hideDialog',this.toShowModal)
				//this.idShowModal = false
			},
	}
}
</script>

<style>
 .textArea100{
	 height: 100%;
	 width: 100%;
 }
</style>
