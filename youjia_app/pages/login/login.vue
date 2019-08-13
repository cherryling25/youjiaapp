<template>
	<view class="content">
		<view class="image-list">
			<view class="image-item" v-for="(item,index) in array" :key="index">
				<view class="image-content">
					<image style="width: 350px; height: 300px;" :mode="item.mode" :src="src"
						@error="imageError"></image>
				</view>
			</view>
		</view>
		
		<view class="uni-padding-wrap uni-common-mt">
            <form :model="user" :rules="rules2">
                <view class="uni-form-item uni-column">
                        <input class="uni-input" v-model="user.loginName" maxlength="11" placeholder="用户名" />
                    </view>
                
                
                <view class="uni-form-item uni-column">
                    <input class="uni-input" v-model="user.password" type="password" placeholder="密码" />
                </view>
				
				<!--<view class="forgotPassword">
					<text>忘记密码？</text>
				</view>-->
				
                <view class="uni-btn-v">
                    <button type="primary" @tap="login">登录</button>
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
			user: {
			  loginName: '',
			  password: ''
			},
			rules2: {	//没有生效
			  loginName: [
				{ required: true, message: '请输入账号', trigger: 'blur' },
				
			  ],
			  password: [
				{ required: true, message: '请输入密码', trigger: 'blur' },
				
			  ]
			},
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
		
		login(){
			uni.request({
				url: 'http://192.168.1.104:8080/gongyv_manage/api/login.action',
				data: {loginName: this.user.loginName,password : this.user.password},
				method:"POST",
				header : {'content-type':'application/x-www-form-urlencoded'},
				success: function (res) {
						if(res.data) {
							uni.reLaunch({
								url: '/pages/home/info1/home_page'
							});
						} else {
							alert('LoginName or password incorrect'); //弹出框
						}
					},
				
			})
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
		margin-top: 30upx;
	}
	
	.reg{
		color: #007AFF;
	}
</style>
