<template>
 	<div class="hotroute">
 		<div>
 			<h2 class="hotroute-title">— 北京热门线路推荐 —</h2>
 			<ul class="hotroute-title-lists">
 				<li class="hotroute-title-list">铁定成团</li>
 				<li class="hotroute-title-list">无自费</li>
 				<li class="hotroute-title-list">无购物</li>
 			</ul>
 		</div>
 		<div class="hotroute-content">
 			<ul class="hotroute-content-lists">
 				<li class="hotroute-content-list" v-for="item in hotrouteInfo">
 					<img class="hotroute-content-img" :src="item.imgUrl" :alt="item.alt">
 					<dl class="hotroute-content-dlist">
 						<dt class="hotroute-content-title">{{item.title}}</dt>
 						<dd class="hotroute-content-sale">
 							<span class="hotroute-content-sale-out">{{item.sale}}</span>
 							<span class="hotroute-content-line">|</span>
 							<span class="hotroute-content-sale-score">{{item.score}}</span>
 						</dd>
 						<dd>
 							<p class="hotroute-content-place">{{item.place}}</p>
 							<p class="hotroute-content-price-start">
 								<span class="hotroute-content-price"><b class="hotroute-content-price-sign">{{item.sign}}</b>{{item.price}}</span>{{item.start}}
 							</p>
 						</dd>
 					</dl>
 				</li>
 			</ul>
 			<div class="hotroute-check">
 				<p class="hotroute-checking">查看全部一日游 〉</p>
 			</div>
 		</div>
 	</div>
</template>

<script>
	export default {
		
		computed: {
    		hotrouteInfo() {
    			return this.$store.state.daytour.hotrouteInfo;
    		}
    	}
		
	}
</script>

<style scoped>
	.hotroute{
		background: #fff;
	}
	.hotroute-title{
		width: 3.4rem;
		height: .5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: .3rem 0 0.2rem 2rem;
		font-size: .32rem;
	}
	.hotroute-title-lists{
		overflow: hidden;
		padding-left: 1rem;
		padding-bottom: .37rem;
		border-bottom: 1px solid #ccc;
	}
	.hotroute-title-list{
		width: 1.5rem;
		height: .5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		float: left;
		margin-right: .4rem;
		text-align: center;
		line-height: .5rem;
		border: 1px solid #ccc;
		border-radius: 5rem;
	}
	.hotroute-content{
		padding-left: .2rem;
	}
	.hotroute-content-lists{
		overflow: hidden;
	}
	.hotroute-content-list{
		overflow: hidden;
		padding: 0.3rem 0;
		border-bottom: 1px solid #f2f2f2;
	}
	.hotroute-content-img{
		width: 2rem;
		height: 2rem;
		margin-right: .2rem;
		float: left;
		background: url(bgimg4.jpg)  ;
	}
	.hotroute-content-dlist{
		padding-right: .2rem;
	}
	.hotroute-content-title{
		width: 4.9rem;
		height: .65rem;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
		color: #212121;
   		font-size: .3rem;
    	line-height: .38rem;
    	padding-bottom: .1rem;
	}
	.hotroute-content-sale{
		color: gray;
		font-size: .26rem;
		padding-top: .1rem;
		padding-bottom: .79rem;
	}
	.hotroute-content-sale-out{
		width: 1.36rem;
		height: .3rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
		float: left;
	}
	.hotroute-content-sale-score{
		width: .9rem;
		height: .3rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-left: .24rem;
		display: inline-block;
		float: left;
	}
	.hotroute-content-line{
		color: #f2f2f2;
		float: left;
	}
	.hotroute-content-place{
		width: 1.8rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .4rem;
		float: left;
	}
	.hotroute-content-price-start{
		width: 1.35rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: right;
		padding-right: .06rem;
		float: right;
		color: gray;
		font-weight: bold;
	}
	.hotroute-content-price{
		color: orange;
		font-size: .4rem;
	}
	.hotroute-content-price-sign{
		font-size: .1rem;
	}
	.hotroute-check{
		color: #616161;
	    font-size: .3rem;
	    line-height: .9rem;
	    padding-left: 2.5rem;
	}
	.hotroute-checking{
	    width: 2.5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
