(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register/register"],{"009b":function(e,t,n){"use strict";n.r(t);var a=n("afd0"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=i.a},2875:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},4174:function(e,t,n){"use strict";n.r(t);var a=n("2875"),i=n("009b");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);n("c5cc");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},afd0:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[["camera"],["album"],["camera","album"]],a={data:function(){return{imageList:[],imageLength:3,sourceTypeIndex:2,sizeTypeIndex:2}},methods:{formSubmit:function(){e.navigateTo({url:"../login"})},chooseImage:function(){var t=this;e.chooseImage({sourceType:n[this.sourceTypeIndex],count:this.imageLength-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},previewImage:function(t){var n=t.target.dataset.src;e.previewImage({current:n,urls:this.imageList})},deleteImage:function(e){var t=e.target.dataset.index,n=this,a=n.imageList;a.splice(t,1),n.imageList=a}}};t.default=a}).call(this,n("6e42")["default"])},c5cc:function(e,t,n){"use strict";var a=n("f62c"),i=n.n(a);i.a},f62c:function(e,t,n){}},[["6a1f","common/runtime","common/vendor"]]]);