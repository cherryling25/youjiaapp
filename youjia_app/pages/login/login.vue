<template>
	<view class="content">
		<view class="image-content">
			<image class="img" :src="src" mode="aspectFill"></image>
		</view>
		
		<view class="uni-padding-wrap uni-common-mt">
            <form :model="user" @submit="formSubmit">
                <view class="uni-form-item uni-column">
                        <input class="uni-input" name="loginName" v-model="user.loginName" maxlength="11" placeholder="手机号码" />
                    </view>
                
                
                <view class="uni-form-item uni-column">
                    <input class="uni-input" name="password" v-model="user.password" type="password" placeholder="密码" />
                </view>
				
				<view class="forgotPassword">
					<text @click="openPopup">忘记密码？</text>
					<uni-popup ref="popup" type="center">
						请联系管理员
					</uni-popup>
					<uni-popup ref="popup2" type="center">
						用户名或密码错误
					</uni-popup>
				</view>	
				
                <view class="uni-btn-v">
                    <button type="primary" formType="submit">登录</button>
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
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	//来自 graceUI 的表单验证， 使用说明见手册 http://grace.hcoder.net/doc/info/73-3.html
	var  graceChecker = require("../../common/graceChecker.js");
	
	export default {
    data() {
        return {
			title:"",
			user: {
			  loginName: '17872981234',
			  password: '12345678'
			},
            src: '../../static/login-logo.jpg',
			
        }
    },
	
	components: {
		uniPopup
		},
		
    methods: {
		openPopup(e){
            this.$refs.popup.open();
        },
		
		formSubmit (e) {
			//将下列代码加入到对应的检查位置
			//定义表单规则
			var rule = [
				{name:"loginName", checkType : "phoneno", checkRule:"",  errorMsg:"请输入正确的手机号"},
				{name:"password", checkType : "notnull", checkRule:"",  errorMsg:"请输入正确密码"}
			];
			//进行表单检查
			var formData = e.detail.value;
			var checkRes = graceChecker.check(formData, rule);
			var that = this;
			if(checkRes){
				uni.request({
					url: 'http://192.168.1.104:8080/youjiabackend/api/login',
					data: {loginName: this.user.loginName,password : this.user.password},
					method:"POST",
					header : {'content-type':'application/x-www-form-urlencoded'},
					success: function (res) {
							if(res.data) {
								try {
									uni.setStorageSync('loginName', that.user.loginName);
								} catch (e) {
									
								}
								uni.reLaunch({
									url: '/pages/home/info1/home_page'
								});
							} else {
								that.$refs.popup2.open();
							}
						},
				});
			}else{
				uni.showToast({ title: graceChecker.error, icon: "none" });
			}
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
	.image-content {
		width: 100%;
	}
	
	.img{
		width: 750upx;
	}
	
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
