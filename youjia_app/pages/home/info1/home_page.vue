<template>
	<view>
		<!--轮播-->
		<view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" circular="true" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item>
                            <view class="swiper-item" style="100%">
								<image src="../../../static/switch.jpeg" mode=""></image>
							</view>
                        </swiper-item>
						
                        <swiper-item>
                            <view class="swiper-item" style="100%">
								<image src="../../../static/login-logo.jpg" mode=""></image>
							</view>
                        </swiper-item>
						
                        <swiper-item>
                            <view class="swiper-item" style="100%">
								<image src="../../../static/switch.jpeg" mode=""></image>
							</view>
                        </swiper-item>
						
                    </swiper>
                </view>
            </view>
        </view>
		
		<!--九宫格-->
		<view class="jiu">
			<uni-grid :column="5" :show-border="true"  :square="false">
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
					<text class="text">1.5</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">1.5</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">102度</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">200元</text>
				</uni-grid-item>
				
				
				<uni-grid-item>
					<text class="text">冷水费</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">5</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">1.5</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">1t</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">5元</text>
				</uni-grid-item>
				
				
				<uni-grid-item>
					<text class="text">热水费</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">10</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">1.5</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">2t</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">20元</text>
				</uni-grid-item>
			</uni-grid>
			
			<uni-grid :column="4" :show-border="true"  :square="false">
				<uni-grid-item>
					<text class="text">物管费 </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">100元 </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
			</uni-grid>
			
			<uni-grid :column="4" :show-border="true"  :square="false">
				<uni-grid-item>
					<text class="text">房租 </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">1000元 </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"> - </text>
				</uni-grid-item>
			</uni-grid>
			
			<uni-grid :column="1" :show-border="true"  :square="false">
				<uni-grid-item>
					<text class="text">合计 1400元</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		
		
		
		<!--在线交租按钮-->
		<view class="btn">
			<!--<navigator url="../../login/login"></navigator>-->
			<button type="primary">在线交租</button>
		</view>
		
		<!--tabbar-->
		<footerNav></footerNav>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import footerNav from "../../../components/footer/footer_nav.vue"
	
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500
				
			}
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
			footerNav
		}
		
	}
</script>

<style>
.jiu{
	margin-top: 35upx;
	
}

.btn button{
	width: 94%;
	margin-top: 7%;
	
}


</style>
