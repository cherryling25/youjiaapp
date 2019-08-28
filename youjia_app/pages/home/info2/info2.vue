<template>
	<view>
		<!--选择器-->
		<view class="sel">
			<view @tap="showSinglePicker" v-if="shopList.length != 0"> &nbsp;&nbsp;&nbsp;当前选择: {{shopList[index].label}}</view>
			<mpvue-picker ref="mpvuePicker" :mode="mode" :pickerValueDefault="index" @onChange="onChange" @onConfirm="onConfirm"
			 @onCancel="onCancel" :pickerValueArray="shopList">
				<view class="uni-input">{{shopList[index].label}}</view>
			</mpvue-picker>
		</view>


		<!--房源信息-->
		
		<view class="card" v-for="room in rooms">
			<uni-card>
				<view class="uni-swiper-msg">
					<view class="uni-swiper-msg-icon">
						<image src="../../../static/footer_icon/a1.png" mode="widthFix"></image>
					</view>
					<view>
						<text>{{room.roomNo}}</text>
					</view>
				</view>
				 {{room.roomStatus}}
			</uni-card>
			<uni-popup ref="popup" type="center">
				注册成功
			</uni-popup>
		</view>


	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue'
	import uniCard from "@/components/uni-card/uni-card"

	export default {
		data() {
			return {
				shopList: [{
					label: '',
					value: ''
				}],
				index: [0],
				mode: 'selector',
				rooms: []
				
			}
		},

		onLoad() {
			var that = this;
			uni.request({
				url: 'http://192.168.1.104:8080/youjiabackend/api/fetchBuilding',
				data: {},
				method: "POST",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: function(res) {
					if (res.data) {
						that.shopList.pop();
						for (var i = 0; i < res.data.length; i++) {
							var item = {};
							item.label = res.data[i].buildingNo;
							item.value = res.data[i].id;
							item.rooms = res.data[i].roomList;
							that.shopList.push(item);
						}
						that.rooms = res.data[0].roomList;
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
				var buildingId = e.value;
				for (var i = 0; i < this.shopList.length; i++) {
					if (buildingId == this.shopList[i].value) {
						this.rooms = this.shopList[i].rooms;
						break;
					}
				}
			},
			onCancel(e) {},
			selectChange(e) {
				this.index = e.detail.value
			},
			showSinglePicker() {
				this.mode = 'selector'
				this.index = [0]
				this.$refs.mpvuePicker.show()
			}
		},
		components: {
			mpvuePicker,
			uniCard,
			uniPopup

		}
	}
</script>

<style>
	.card {
		width: 50%;
		float: left;
	}

	.sel {

		padding-top: 20upx;
	}
</style>
