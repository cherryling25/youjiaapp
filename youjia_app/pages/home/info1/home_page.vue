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
		
		<!--九宫格-->
		<uni-grid :column="3" :show-border="false"  :square="false">
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
		</uni-grid>
		
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
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
				
			}
		},
		methods: {
			
		},
		components: {
			uniGrid,
			uniGridItem,
			footerNav
		}
		
	}
</script>

<style>

</style>
