<template>
	<view>
		<!--轮播-->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" circular="true" :autoplay="autoplay" :interval="interval"
					 :duration="duration">
						<swiper-item>
							<view class="swiper-item" style="100%">
								<image class="sw-img" src="../../../static/switch.jpeg" mode="widthFix"></image>
							</view>
						</swiper-item>

						<swiper-item>
							<view class="swiper-item" style="100%">
								<image class="sw-img" src="../../../static/login-logo.jpg" mode="widthFix"></image>
							</view>
						</swiper-item>

						<swiper-item>
							<view class="swiper-item" style="100%">
								<image class="sw-img" src="../../../static/switch.jpeg" mode="widthFix"></image>
							</view>
						</swiper-item>

					</swiper>
				</view>
			</view>
		</view>

		<!--九宫格-->
		<view class="jiu">
			<uni-grid :column="5" :show-border="true" :square="false">
				<uni-grid-item>
					<text class="text">项目</text>
				</uni-grid-item>

				<uni-grid-item>
					<text class="text">单价</text>
				</uni-grid-item>

				<uni-grid-item>
					<text class="text">上月读表</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">本月读表</text>
				</uni-grid-item>

				<uni-grid-item>
					<text class="text">金额</text>
				</uni-grid-item>

				<uni-grid-item>
					<text class="text">电费</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.electricityPrice}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.lastMonthElectricity}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.currentElectricity}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.electricityFee}}</text>
				</uni-grid-item>


				<uni-grid-item>
					<text class="text">冷水费</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.waterPrice}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.lastMonthWater}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.currentWater}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.waterFee}}</text>
				</uni-grid-item>


				<uni-grid-item>
					<text class="text">热水费</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.hotWaterPrice}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.lastMonthHotWater}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.currentHotWater}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.hotWaterFee}}</text>
				</uni-grid-item>
			</uni-grid>

			<uni-grid :column="5" :show-border="true" :square="false">
				<uni-grid-item>
					<text class="text">管理费</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.manageFee}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
			</uni-grid>

			<uni-grid :column="5" :show-border="true" :square="false">
				<uni-grid-item>
					<text class="text">房租 </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">{{chargeObject.rent}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
			</uni-grid>

			<uni-grid :column="1" :show-border="true" :square="false">
				<uni-grid-item>
					<text class="text">合计 {{chargeObject.total}}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<uni-popup ref="popup" type="center">
			信息加载失败
		</uni-popup>


		<!--在线交租按钮-->
		<view class="btn">
			<button type="primary">在线交租</button>

		</view>

		<!--tabbar-->
		<footerNav></footerNav>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import footerNav from "../../../components/footer/footer_nav.vue"

	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				chargeObject: {
					electricityPrice: "",
					lastMonthElectricity: "",
					currentElectricity: "",
					electricityFee: "",

					waterPrice: "",
					lastMonthWater: "",
					currentWater: "",
					waterFee: "",

					hotWaterPrice: "",
					lastMonthHotWater: "",
					currentHotWater: "",
					hotWaterFee: "",

					manageFee: "",
					rent: "",
					total: ""

				},

			}
		},

		onLoad() {
			var that = this;
			var loginName = uni.getStorageSync('loginName');
			uni.request({
				url: 'http://192.168.1.104:8080/youjiabackend/api/fetchRent',
				data: {
					loginName: loginName
				},
				method: "POST",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: function(res) {
					if (res.data) {
						that.chargeObject = res.data;
					} else {
						that.$refs.popup.open();
					}
				},
			});
		},

		methods: {
			/*openbtn(){
				uni.requestPayment({
					provider: 'alipay',
					orderInfo: 'orderInfo', //微信、支付宝订单数据
					success: function (res) {
						console.log('success:' + JSON.stringify(res));
					},
					fail: function (err) {
						console.log('fail:' + JSON.stringify(err));
					}
				});
			}*/

		},
		components: {
			uniGrid,
			uniGridItem,
			footerNav,
			uniPopup
		}

	}
</script>

<style>
	.uni-padding-wrap {
		width: 750upx;
		padding: 0;
	}

	.sw-img {
		width: 750upx;
	}

	.jiu {
		margin-top: 35upx;

	}

	.btn button {
		width: 94%;
		margin-top: 7%;

	}
</style>
