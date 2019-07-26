<template>
	<view>
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
	
	import uniCard from "@/components/uni-card/uni-card"
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			uniCard,
			
		}
	}
</script>

<style>
.card{
	width: 50%;
	float: left;
}
</style>
