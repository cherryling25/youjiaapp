<template>
	<view>
		<view class="image-content">
			<image class="img" src="../../../static/login-logo.jpg" mode="aspectFill"></image>

		</view>

		<view class="collapse">
			<uni-collapse accordion="true">
				<uni-collapse-item title="合约租期">
					<view style="padding: 30upx;">
						{{myInfo.effetiveDateString}} 到 {{myInfo.expiredDateString}}
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="社区编号">
					<view style="padding: 30upx;">
						{{myInfo.buildingNumber}}
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="押金">
					<view style="padding: 30upx;">
						{{myInfo.deposit}}
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>

		<view class="btn">

			<button type="default" @tap="open" v-if="myInfo.leaseStatus == 'AVAILABEL'">退租申请</button>
			<button type="default" v-if="myInfo.leaseStatus == 'WITHDRAWREQUEST'" disabled>退租审核中</button>
			<button type="default" v-if="myInfo.leaseStatus == 'WITHDRAWED'" disabled>已退租</button>
		</view>

		<uni-popup ref="popup" type="center">
			退租申请已发送至管理员
		</uni-popup>

		<view class="btn2">
			<navigator url="../../login/login">
				<button type="warn">退出登录</button>
			</navigator>
		</view>


	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"

	export default {
		
		
		data() {
			return {
				myInfo: {
					effetiveDateString: "",
					expiredDateString: "",
					buildingNumber: "",
					deposit: "",
					leaseStatus: ""
				}

			}
		},
		
		onLoad() {
			var that = this;
			var loginName = uni.getStorageSync('loginName');
			uni.request({
				url: 'http://192.168.1.104:8080/youjiabackend/api/fetchLease',
				data: {
					loginName: loginName
				},
				method: "POST",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: function(res) {
					if (res.data) {
						that.myInfo = res.data;
					}
				},
			});
		},

		methods: {
			open() {
				var that = this;
				var loginName = uni.getStorageSync('loginName');
				uni.showModal({
					title: '提示',
					content: '确认退房？',
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: 'http://192.168.1.104:8080/youjiabackend/api/withdrawLease',
								data: {
									loginName: loginName
								},
								method: "POST",
								header: {
									'content-type': 'application/x-www-form-urlencoded'
								},
								success: function(res) {
									if (res.data) {
										that.$refs.popup.open();
										that.myInfo.leaseStatus = 'WITHDRAWREQUEST';

										function out() {
											that.$refs.popup.close();

										}
										setTimeout(out, 1500); //   在1500毫秒后只执行一次


									}
								},
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
			uniPopup
		}
	}
</script>

<style>
	.image-content {
		width: 100%;
	}
	
	.img{
		width: 750upx;
	}

	.btn button {
		color: #007AFF;
		width: 94%;
		margin-top: 15%;

	}

	.btn2 button {

		margin-top: 3%;
		width: 94%;
	}
</style>
