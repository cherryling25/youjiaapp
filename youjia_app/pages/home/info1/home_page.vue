<template>
	<view>
		<!--轮播-->
		<view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item>
                            <view class="swiper-item">
								<image src="../../../static/switch.jpeg" mode=""></image>
							</view>
                        </swiper-item>
						
                        <swiper-item>
                            <view class="swiper-item">
								<image src="../../../static/switch.jpeg" mode=""></image>
							</view>
                        </swiper-item>
						
                        <swiper-item>
                            <view class="swiper-item">
								<image src="../../../static/switch.jpeg" mode=""></image>
							</view>
                        </swiper-item>
						
                    </swiper>
                </view>
            </view>
        </view>
		
		<!--table-->
		
		
		<!--tabbar-->
		<footerNav></footerNav>
	</view>
</template>

<script>
	
	import footerNav from "../../../components/footer/footer_nav.vue";
	
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
				
			}
		},
		methods: {
			
		},
		components: {
			
			footerNav
		}
		
	}
</script>

<style>

</style>
