<template>
	<view>
		<view class="footer">
			<view class="footer_item" @tap="openhome">
				
				
			</view>
			
			<view class="footer_item"  @tap="openfind">
				
				
			</view>
			
			<view class="footer_item"  @tap="openme">
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			openhome(){
				uni.switchTab({
					url: '/pages/home/info1/home_page'
				});
			},
			openfind(){
				uni.switchTab({
					url: '/pages/home/info2/info2'
				});
			},
			openme(){
				uni.switchTab({
					url: '/pages/home/info3/info3'
				});
			}
			
				
		}
			
	}
</script>

<style>

</style>
