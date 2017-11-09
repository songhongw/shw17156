<template>
 	<div class="ticket">
 		<h2 class="ticket-title">— 北京热门景点门票 —</h2>
 		<div class="ticket-content">
 			<ul class="ticket-content-lists">
 				<li class="ticket-content-list" v-for="item in ticketInfo">
 					<img class="ticket-content-img" :src="item.imgUrl" :alt="item.alt">
 					<dl class="ticket-content-dlist">
 						<dt class="ticket-content-title">{{item.title}}</dt>
 						<dd class="ticket-content-sale">
 							<span class="ticket-content-picture iconfont icon-xing1"></span>
 							<span class="ticket-content-picture iconfont icon-xing1"></span>
 							<span class="ticket-content-picture iconfont icon-xing1"></span>
 							<span class="ticket-content-picture iconfont icon-xing1"></span>
 							<span class="ticket-content-picture iconfont icon-xing1"></span>
 							<span class="ticket-content-comment">{{item.comment}}</span>
 						</dd>
 						<dd>
 							<p class="ticket-content-place">{{item.place}}</p>
 							<p class="ticket-content-price-start">
 								<span class="ticket-content-price"><b class="ticket-content-price-sign">{{item.sign}}</b>{{item.price}}</span>{{item.start}}
 							</p>
 						</dd>
 					</dl>
 				</li>
 			</ul>
 			<div class="ticket-check">
 				<p class="ticket-checking">查看全部景点 〉</p>
 			</div>
 		</div>
 	</div>
</template>

<script>
	export default {
		
		computed: {
    		ticketInfo() {
    			return this.$store.state.daytour.ticketInfo;
    		}
    	}
		
	}
</script>

<style scoped>

	.ticket{
		background: #fff;
		margin-top: .3rem;
	}
	.ticket-title{
		width: 3.4rem;
		height: .5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: .3rem 0 0.2rem 2rem;
		font-size: .32rem;
	}
	.ticket-content{
		padding-left: .2rem;
	}
	.ticket-content-lists{
		overflow: hidden;
	}
	.ticket-content-list{
		overflow: hidden;
		padding: 0.3rem 0;
		border-bottom: 1px solid #f2f2f2;
	}
	.ticket-content-img{
		width: 2rem;
		height: 2rem;
		margin-right: .2rem;
		float: left;
		background: url(bgimg4.jpg)  ;
	}
	.ticket-content-dlist{
		padding-right: .2rem;
	}
	.ticket-content-title{
		width: 3rem;
		height: .65rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #212121;
   		font-size: .32rem;
    	line-height: .38rem;
    	padding-bottom: .1rem;
	}
	.ticket-content-sale{
		color: gray;
		font-size: .26rem;
		padding-top: .45rem;
		padding-bottom: .45rem;
	}
	.ticket-content-picture{
		width: .35rem;
		height: .3rem;
		float: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
		color: #00BCD4;
		
	}
	.ticket-content-comment{
		float: left;
		display: inline-block;
		width: 1.8rem;
		height: .3rem;
		line-height: .34rem;
		padding-left: .05rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}
	.ticket-content-place{
		width: 1.8rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .4rem;
		font-size: .24rem;
		float: left;
		color: #999999;
	}
	.ticket-content-price-start{
		float: right;
		width: 1.35rem;
		padding-right: .06rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: right;
		color: #999999;
		font-weight: bold;
	}
	.ticket-content-price{
		color: orange;
		font-size: .4rem;
	}
	.ticket-content-price-sign{
		font-size: .1rem;
	}
	.ticket-check{
		color: #616161;
	    font-size: .3rem;
	    line-height: .9rem;
	    padding-left: 2.7rem;
	}
	.ticket-checking{
	    width: 2.2rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
</style>
