
<template>
 	<div class="hotList" id="hotList">
 		<div class="hotSearch-header">
 			<span class="search-title">热门搜索</span>
 			<span class="search-refresh">
 				<span class=" iconfont icon-refurbish"></span>	
 				<span class="search-refreshtext" @click = "handleSearch">换一批</span>
 			</span>
 			
 		</div>
 		<div class="hotSearch-con">
 				<div class="hotSearch-icon">
 					<span class="iconfontContent iconfont icon-jingdian"></span>
 				</div>
 				<div class="hotSearch-Sight" >
 					<div class="hotSearchList-group" v-if="0==i?true:false" >
 						<a href="#">宋城千古情</a>
 						<a href="#">故宫</a>
 						<a href="#">千山公园</a>
 						<a href="#">天门狐仙</a>
 						<a href="#">张家界大峡谷</a>
 					</div>
 					<div class="hotSearchList-group" v-if="1==i?true:false">
 						<a href="#">鼓浪屿往返轮渡</a>
 						<a href="#">鼓浪屿</a>
 						<a href="#">颐和园</a>
 						<a href="#">婺源</a>
 						<a href="#">上海迪士尼乐园</a>
 					</div>
 					<div class="hotSearchList-group" v-if="2==i?true:false">
 						<a href="#">北京欢乐谷</a>
 						<a href="#">八达岭长城</a>
 						<a href="#">雍和宫</a>
 						<a href="#">恭王府</a>
 						<a href="#">天坛公园</a>
 						<a href="#">华山</a>
 					</div>
 					<div class="hotSearchList-group" v-if="3==i?true:false">
 						<a href="#">玉龙雪山</a>
 						<a href="#">西岭雪山滑雪场</a>
 						<a href="#">乌镇西栅</a>
 						<a href="#">慈城古镇</a>
 						<a href="#">古北水镇</a>
 					</div>
 					<div class="hotSearchList-group" v-if="4==i?true:false">
 						<a href="#">都江堰</a>
 						<a href="#">泰山</a>
 						<a href="#">圆明园</a>
 						<a href="#">成都欢乐谷</a>
 						<a href="#">武汉欢乐谷</a>
 						<a href="#">泸沽湖</a>
 					</div>
 					<div class="hotSearchList-group" v-if="5==i?true:false">
 						<a href="#">常州环球动漫嬉戏谷</a>
 						<a href="#">深圳欢乐谷</a>
 						<a href="#">凤凰山海港乐园</a>
 					</div>
 				</div>
 		</div>
 		<div class="hotSearch-city">
 			<div class="hotSearch-cityicon">
 				<div class="hotSearch-cityiconfont iconfont icon-zhusu"></div>
 			</div>
 			<div class="hotSearch-cityList">
 				<div class="hotSearch-cityGroup" v-if="0==i?true:false" >
 					<a href="#">广州</a>
 					<a href="#">三亚</a>
 					<a href="#">上海</a>
 					<a href="#">苏州</a>
 				</div>
 				<div class="hotSearch-cityGroup"  v-if="1==i?true:false">
 					<a href="#">厦门</a>
 					<a href="#">成都</a>
 					<a href="#">重庆</a>
 					<a href="#">天津</a>
 				</div>
 				<div class="hotSearch-cityGroup" v-if="2==i?true:false">
 					<a href="#">西安</a>
 					<a href="#">南京</a>
 					<a href="#">深圳</a>
 					<a href="#">宁波</a>
 				</div>
 				<div class="hotSearch-cityGroup" v-if="3==i?true:false">
 					<a href="#">昆明</a>
 					<a href="#">桂林</a>
 					<a href="#">大连</a>
 					<a href="#">杭州</a>
 				</div>
 				<div class="hotSearch-cityGroup" v-if="4==i?true:false">
 					<a href="#">清远</a>
 					<a href="#">青岛</a>
 					<a href="#">福州</a>
 					<a href="#">惠州</a>
 				</div>
 				<div class="hotSearch-cityGroup" v-if="5==i?true:false">
 					<a href="#">西安</a>
 					<a href="#">南京</a>
 					<a href="#">深圳</a>
 					<a href="#">宁波</a>
 				</div>
 			</div>
 			
 		</div>
 		<div class="hotSearch-nearbyCon">
 				<div class="hotSearch-nearbyBtn">
 					搜索身边景点
 				</div>
 		</div>
 	</div>
</template>
<script>
	export default {
		 data(){
		 	return {
		 		i:0
		 	}
		 },
		 methods:{
		 	handleSearch:function( ){
		 		 this.i++;
		 			if( this.i>5 ){
		 				this.i=0;
		 			}
		 	}
		 }
	}
</script>  

<style scoped>
html,body{
	background: #F2F2F2;
}
.hotList{
	width:100%;
	overflow: hidden;
	background: #fff;
}
.hotList .hotSearch-header{
	height:0.64rem;
	padding:.2rem;
	line-height:0.64rem;
	background: #f0f5f6;
}
.hotList .search-title{
	font-size:.26rem;
	color:#888;
}	
.hotList .search-refresh{
	font-size:.26rem;
	color:#888;
	float:right;
	color:#00afc7;
}	
.hotSearch-icon{
	width:10%;
	float:left;
	height:1.8rem;
	line-height:1.8rem;
	text-align: center;
}
.hotSearch-con{
	width:100%;
	height:1.8rem;
}
.iconfontContent{
	padding:.5rem 0;
	padding-right:.2rem;
	border-right:1px solid #dce5e7;
}
.hotSearch-Sight{
	float:left;
	width:90%;
	max-height:1.8rem;
	overflow: hidden;
}
.hotSearch-Sight .hotSearchList-group a{
	float:left;
	height:.36rem;
	max-width:2.89rem;
	color:#333;
	padding:0 .4rem;
	margin:.25rem 0;
	border-right:1px dashed #c9cccd;
	font-size:.28rem;
}
.hotSearch-city{
	height:1rem;
	width:100%;
	overflow: hidden;
	border:1px solid #dce5e7;
}
.hotSearch-cityicon{
	width:9%;
	float:left;
	height:.8rem;
	line-height:.8rem;
	text-align: center;
}
.hotSearch-cityiconfont{
	padding-right:.2rem;
	margin-top:.1rem;
	border-right:1px solid #dce5e7;	
}
.hotSearch-cityList a{
	float:left;
	height:.36rem;
	max-width:2.89rem;
	color:#333;
	padding:0 .4rem;
	margin:.25rem 0;
	border-right:1px dashed #c9cccd;
	font-size:.28rem;
}
.hotSearch-nearbyCon{
	width:100%;
	height:.8rem;
	padding:.2rem;
}
.hotSearch-nearbyBtn{
	height:.72rem;
	width:90%;
	border:1px solid #dde1e3;
	text-align: center;
	line-height:.72rem;
	border-radius: 2px;
	color:#333;
	font-size:.26rem;
}
</style>
