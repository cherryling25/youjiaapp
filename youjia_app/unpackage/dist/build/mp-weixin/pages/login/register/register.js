(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register/register"],{"009b":function(e,n,t){"use strict";t.r(n);var i=t("afd0"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);n["default"]=r.a},4174:function(e,n,t){"use strict";t.r(n);var i=t("8f99"),r=t("009b");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("c5cc");var s=t("2877"),o=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},"8f99":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return r})},afd0:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"3107"))},r=t("66c1"),a=[["camera"],["album"],["camera","album"]],s=[["compressed"],["original"],["compressed","original"]],o={data:function(){return{user:{phone:"17872981234",idCard:"431172867264536121",password:"1234",confirmedPassword:"1234"},imageList:[],imageLength:3,sourceTypeIndex:2,sizeTypeIndex:2}},components:{uniPopup:i},methods:{formSubmit:function(n){var t=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请输入正确的手机号"},{name:"idCard",checkType:"same",checkRule:"18",errorMsg:"请输入正确的身份证号"},{name:"password",checkType:"notnull",checkRule:"",errorMsg:"请输入正确的密码"},{name:"confirmedPassword",checkType:"notnull",checkRule:"",errorMsg:"请确认密码"}],i=n.detail.value,a=r.check(i,t),s=this;a?e.uploadFile({url:"http://192.168.1.104:8080/gongyv_manage/api/register.action",filePath:this.imageList[0],name:"files",formData:{phone:this.user.phone,idCard:this.user.idCard,password:this.user.password,confirmedPassword:this.user.confirmedPassword},success:function(n){if(n.data){var t=function(){e.navigateTo({url:"../login"})};s.$refs.popup.open(),setTimeout(t,3e3)}else s.$refs.popup2.open()}}):e.showToast({title:r.error,icon:"none"})},chooseImage:function(){var n=this;e.chooseImage({sourceType:a[this.sourceTypeIndex],sizeType:s[this.sizeTypeIndex],count:this.imageLength-this.imageList.length,success:function(e){n.imageList=n.imageList.concat(e.tempFilePaths)}})},previewImage:function(n){var t=n.target.dataset.src;e.previewImage({current:t,urls:this.imageList})},deleteImage:function(e){var n=e.target.dataset.index,t=this,i=t.imageList;i.splice(n,1),t.imageList=i}}};n.default=o}).call(this,t("543d")["default"])},c5cc:function(e,n,t){"use strict";var i=t("f62c"),r=t.n(i);r.a},f62c:function(e,n,t){}},[["6a1f","common/runtime","common/vendor"]]]);