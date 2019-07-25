<template>
	<view class="content">
		<view class="image-list">
			<view class="image-item" v-for="(item,index) in array" :key="index">
				<view class="image-content">
					<image style="width: 350px; height: 350px;" :mode="item.mode" :src="src"
						@error="imageError"></image>
				</view>
			</view>
		</view>
		
		<view class="uni-padding-wrap uni-common-mt">
            <form>
                <view class="uni-form-item uni-column">
                        <input class="uni-input" maxlength="11" placeholder="用户名" />
                    </view>
                
                
                <view class="uni-form-item uni-column">
                    <input class="uni-input" password type="text" placeholder="密码" />
                </view>
				
				<view class="forgotPassword">
					<text>忘记密码？</text>
				</view>
				
                <view class="uni-btn-v">
                    <button type="primary" @tap="submit">登录</button>
                </view>
				
            </form>
        </view>

		<view class="register">
			<text>没有账户？</text>
			<text class="reg" @tap="register">注册</text>
		</view>
		
	</view>
</template>

<script>
	export default {
    data() {
        return {
            array: [{
                mode: 'scaleToFill',
            }],
            src: '../../static/login-logo.jpg'
        }
    },
    methods: {
        imageError: function(e) {
            console.error('image发生error事件，携带值为' + e.detail.errMsg)
        },
		submit() {
            uni.reLaunch({
				url: '/pages/home/info1/home_page'
			});
        },
		register(){
			uni.navigateTo({
				url: 'register/register'
			});
		}
    }
}

</script>

<style>
	.uni-input{
		border-bottom:1px solid #ccc;
	}
	
	.forgotPassword{
	  margin-top: 20upx;
	  color: #576B95;
    }
		
    .uni-btn-v{
		margin-top: 40upx;
	}
	
	.register{
		margin-left: 30upx;
		margin-top: 40upx;
	}
	
	.reg{
		color: #007AFF;
	}
</style>
