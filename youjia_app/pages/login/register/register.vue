<template>
	<view class="register">
		<view class="uni-padding-wrap uni-common-mt">
		    <form @submit="formSubmit">
		        <view class="uni-form-item uni-column">
		            <input class="uni-input" maxlength="11" placeholder="请输入手机号码" />
		        </view>
		        
				<view class="uni-form-item uni-column">
				    <input class="uni-input" maxlength="11" placeholder="请输入身份证号码" />
				</view>
		        
		        <view class="uni-form-item uni-column">
		            <input class="uni-input" password type="text" placeholder="请输入登录密码(6-10位数字字母组合密码)" />
		        </view>
				
				<view>
					<camera device-position="front" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
					<button type="primary" @click="takePhoto">拍照</button>
					<view>预览</view>
					<image mode="widthFix" :src="src"></image>
				</view>
				
		        <view class="uni-btn-v">
		            <button formType="submit" type="primary">立即注册</button>
		        </view>
				
		    </form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 src:""
			}
		},
		methods: {
			formSubmit() {
			    uni.navigateTo({
					url: '../login'
				});
			},
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						this.src = res.tempImagePath
					}
				});
			},
			error(e) {
				console.log(e.detail);
			}
		}
	}
</script>

<style>
	.uni-input{
			border-bottom:1px solid #ccc;
		}

	
</style>
