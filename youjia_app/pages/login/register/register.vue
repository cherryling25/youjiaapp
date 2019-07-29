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
				
				<view class="uni-form-item uni-column">
				    <input class="uni-input" password type="text" placeholder="确认密码" />
				</view>
				
				<!-- 上传图片-->
				<view>
					<view class='upload-image-view'>
			<block v-for="(image,index) in imageList" :key="index">
				<view class='image-view'>
					<image :src="image" :data-src="image" @tap="previewImage"></image>
					<view class='del-btn' :data-index="index" @tap='deleteImage'>
						<view class='baicha'></view>
					</view>
				</view>
			</block>
			<view class='add-view' v-if="imageList.length < imageLength" @tap="chooseImage">
 
				<!-- 相机 -->
				<!--<view class="xiangji">
							<view class="tixing"></view>
							<view class='changfx'>
								<view class='yuan1'>
									<view class='yuan2'></view>
								</view>
							</view>
						</view>-->
 
				<!-- 十字架 -->
				<view class="cross">
					<view class="transverse-line"></view>
					<view class="vertical-line"></view>
				</view>
 
			</view>
			<view class='info'>上传身份证正反面，本人照，不超过{{imageLength}}张。(必填)</view>
		</view>


					
				</view>
				
		        <view class="uni-btn-v">
		            <button formType="submit" type="primary">立即注册</button>
		        </view>
				
		    </form>
		</view>
	</view>
</template>

<script>
	
	
	var sourceType = [
		['camera'], //拍照
		['album'], //相册
		['camera', 'album'] //拍照或相册
	]
	var sizeType = [
		['compressed'], //压缩
		['original'], //原图
		['compressed', 'original'] //压缩或原图
	]

	export default {
		data() {
			return {
				imageList: [], //保存图片路径集合
				imageLength: 3, //限制图片张数
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
			}
		},
		methods: {
			formSubmit() {
			    uni.navigateTo({
					url: '../login'
				});
			},
			chooseImage:  function() {
					uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						// #ifdef MP-WEIXIN
						sizeType: sizeType[this.sizeTypeIndex],
						// #endif
						count: this.imageLength - this.imageList.length,
						success: (res) => {
							this.imageList = this.imageList.concat(res.tempFilePaths);
						}
					})
				},
				//预览图片
				previewImage: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList
					})
				},
				//删除图片
				deleteImage: function(e) {
					var index = e.target.dataset.index;
					var that = this;
					var images = that.imageList;
					images.splice(index, 1);
					that.imageList = images;
				}



			}
			
			
		}
</script>

<style>
	.uni-input{
			border-bottom:1px solid #ccc;
		}
 
	/* 第一套图片上传样式（内部图标相机） */
	.upload-image-view {
		width: 100%;
		margin: 20upx 0 20upx 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	 
	.upload-image-view .title {
		width: 100%;
		font-family: PingFang-SC-Regular;
		font-size: 24upx;
		color: #4a4a4a;
		margin-bottom: 15upx;
		line-height: 100%;
	}
	 
	.upload-image-view .info {
		width: 100%;
		font-family: PingFang-SC-Regular;
		font-size: 24upx;
		color: #ff4259;
		height: 24upx;
		margin-top: 15upx;
		line-height: 24upx;
	}
	 
	.upload-image-view .image-view {
		height: 130upx;
		width: 130upx;
		position: relative;
		margin: 15upx 15upx 15upx 0upx;
		border-radius: 8upx;
	}
	 
	.upload-image-view .image-view image {
		height: 100%;
		width: 100%;
		border-radius: 8upx;
	}
	 
	.upload-image-view .image-view .del-btn {
		background-color: #f67371;
		border-radius: 50%;
		width: 25upx;
		height: 25upx;
		position: absolute;
		top: -12upx;
		right: -12upx;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	 
	.upload-image-view .image-view .del-btn .baicha {
		display: inline-block;
		width: 20upx;
		height: 5upx;
		background: #fff;
		line-height: 0;
		font-size: 0;
		vertical-align: middle;
		-webkit-transform: rotate(45deg);
	}
	 
	.upload-image-view .image-view .del-btn .baicha:after {
		content: '/';
		display: block;
		width: 20upx;
		height: 5upx;
		background: #fff;
		-webkit-transform: rotate(-90deg);
	}
	 
	.upload-image-view .add-view {
		height: 115upx;
		width: 115upx;
		margin: 15upx 15upx 15upx 0upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.00);
		border: 3upx dashed #979797;
		border-radius: 8upx;
	}
	 
	/* 相机 */
	 
	.upload-image-view .add-view .xiangji {
		height: 40upx;
		width: 48upx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		
	}
	 
	.upload-image-view .add-view .xiangji .tixing {
		width: 10upx;
		height: 7upx;
		background-color: #fff;
		border-right: 10upx solid #fff;
		border-bottom: 7upx solid #b2b2b2;
		border-left: 10upx solid #fff;
	}
	 
	.upload-image-view .add-view .xiangji .changfx {
		height: 32upx;
		width: 48upx;
		border-radius: 5%;
		background-color: #b2b2b2;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	 
	.upload-image-view .add-view .xiangji .changfx .yuan1 {
		height: 20upx;
		width: 20upx;
		border-radius: 50%;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	 
	.upload-image-view .add-view .xiangji .changfx .yuan2 {
		height: 10upx;
		width: 10upx;
		border-radius: 50%;
		background-color: #b2b2b2;
	}
	 
	/* 第二套图片上传样式（内部图标 十字架）*/
	 
	/* 十字架 */
	.upload-image-view .add-view .cross {
		height: 48upx;
		width: 48upx;
		display: flex;
		flex-wrap: wrap;
		position: relative;
		
	}
	 
	.upload-image-view .add-view .cross .transverse-line {
		height: 100%;
		width: 48%;
		position: absolute;
		border-right: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
	 
	.upload-image-view .add-view .cross .vertical-line {
		height: 48%;
		width: 100%;
		position: absolute;
		border-bottom: 3upx solid #5A5A5A;
		top: 0;
		left: 0;
	}
</style>
