<template>
	<view>
		<!--选择器-->
		<view class="sel">
			<view class="uni-list">
			    <view class="uni-list-cell">
			        <view class="uni-list-cell-left">
			            当前选择
			        </view>
			        <view class="uni-list-cell-db">
			            <picker @change="bindPickerChange" :value="index" :range="array">
			                <view class="uni-input">{{array[index]}}</view>
			            </picker>
			        </view>
			    </view>
			</view>
		</view>
        
		
		<!--房源信息-->
		<view class="card">
			<uni-card title="101室 (一室一厅)" thumbnail="../../../static/footer_icon/a1.png">
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
	import Picker from "@/components/mpvue-picker/mpvuePicker.vue"
	import uniCard from "@/components/uni-card/uni-card"
	
	export default {
		data() {
			return {
				array: ['有家青年社区一栋', '有家青年社区二栋', '有家青年社区三栋'],
				index: 0
			}
		},
		methods: {
			bindPickerChange(e) {
            console.log('picker发送选择改变，携带值为', e.target.value)
            this.index = e.target.value
        }
		},
		components: {
			Picker,
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
	margin-top: 10upx;
	padding: 12upx;
}
</style>
