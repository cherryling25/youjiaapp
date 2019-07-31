<template>
	<view>
		<view class="image-content">
			<image src="../../../static/login-logo.jpg" mode="aspectFill"></image>
			
		</view>
		
		<view class="collapse">
			<uni-collapse accordion="true">
				<uni-collapse-item title="合约租期">
					<view style="padding: 30upx;">
						2019-01-01 到 2019-06-06
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="社区编号">
					<view style="padding: 30upx;">
						青年社区一栋
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="押金">
					<view style="padding: 30upx;">
						200元
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		
		<view class="btn">
			<navigator url="../../login/login">
                <button type="warn">退出登录</button>
            </navigator>
		</view>
		
		<view class="btn2">
		        <button type="default" @tap="open">在线退租</button>
		</view>
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			open(){
				uni.showModal({
					title: '提示',
					content: '确认退房？',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style>
.btn button{
	width: 94%;
	margin-top: 20%;
	
}

.btn2 button{
	color: #007AFF;
	margin-top: 9upx;
	width: 94%;
}
</style>
