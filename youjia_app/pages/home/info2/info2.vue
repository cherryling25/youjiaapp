<template>
	<view>
		<!--选择器-->
		<view class="sel">
			<view @tap="showSinglePicker" v-if="shopList.length != 0"> &nbsp;&nbsp;&nbsp;当前选择: {{shopList[index]}}</view>
			 <mpvue-picker ref="mpvuePicker" :mode="mode" :pickerValueDefault="index" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="shopList">
				<view class="uni-input">{{shopList[index]}}</view>
			 </mpvue-picker>
		</view>
        
		
		<!--房源信息-->
		
		<view class="card">
			<uni-card title="102室(一室一厅)" thumbnail="../../../static/footer_icon/a1.png">
				已租
			</uni-card>
		</view>
		<view class="card">
			<uni-card title="102室(一室一厅)" thumbnail="../../../static/footer_icon/a1.png">
				已租
			</uni-card>
		</view>
		<view class="card">
			<uni-card title="103室 (单间)" thumbnail="../../../static/footer_icon/a1.png">
				空置
			</uni-card>
		</view>
		<view class="card">
			<uni-card title="104室 (单间)" thumbnail="../../../static/footer_icon/a1.png">
				已租
			</uni-card>
		</view>
		<view class="card">
			<uni-card title="105室(一室一厅)" thumbnail="../../../static/footer_icon/a1.png">
				已租
			</uni-card>
		</view>
	</view>
</template>

<script>
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue'
	import uniCard from "@/components/uni-card/uni-card"
	
	export default {
		data() {
			return {
				shopList:[1,2,3],
				index:[0],
				mode: 'selector',
				
			}
		},
		
		onLoad() {
			var that = this;
			
			uni.request({
				url: 'http://192.168.1.104:8080/gongyv_manage/api/fetchBuilding.action',
				data: {},
				method:"POST",
				header : {'content-type':'application/x-www-form-urlencoded'},
				success: function (res) {
						if(res.data) {
							//that.shopList = res.data;
						} else {
							that.$refs.popup.open();
						}
					},
			});
		},
		
		
		methods: {
			showPicker() {
			  this.$refs.mpvuePicker.show();
			},
			onConfirm(e) {
				this.index = e.index
			},
			onChange(e) {
			  this.index = e.index
			},
			onCancel(e) {
				console.log('onCancel')
			  console.log(e);
			},
			selectChange(e){
				this.index = e.detail.value
			},
			showSinglePicker() {
				console.log(this.shopList)
				this.mode = 'selector'
				this.index = [0]
				this.$refs.mpvuePicker.show()
			}

        
		},
		components: {
			mpvuePicker,
			uniCard
			
		}
	}
</script>

<style>
.card{
	width: 50%;
	float: left;
}

.sel{
	
	padding-top: 20upx;
}
</style>
