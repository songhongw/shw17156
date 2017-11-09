<template>
 	<div class="hotcity">
 		<div class="hot-title">
 			<h2 class="hot-title-name"><span></span>热门城市</h2>
 			<ul class="hot-title-lists">
 				<li class="hot-title-list1">全部城市</li>
 				<li class="hot-title-list2">〉</li>
 			</ul>
 		</div>
 		<div class="hot-content">
 			<ul class="hot-content-lists">
 				<li class="hot-content-list" v-for="item in hotcityInfo">
 					{{item}}
 				</li>
 			</ul>
 		</div>
 		<div class="hot-discount">
 			<img class="hot-discount-img" alt="5折" src="http://img1.qunarzz.com/piao/fusion/1710/9f/571beeb8cd8b7902.png_80x80_a45309d8.png">
 			<p class="hot-discount-content1">优质温泉</p>
 			<p class="hot-discount-content2">5折开泡</p>
 		</div>
 	</div>
</template>

<script>
	export default {
		
		computed: {
    		hotcityInfo() {
    			return this.$store.state.daytour.hotcityInfo;
    		}
    	}
		
	}
</script>

<style scoped>
	.hotcity{
		margin-top: .3rem;
		overflow: hidden;
	}
	.hot-title{
		padding-left: .3rem;
		padding-bottom: .75rem;
		line-height: .6rem;
		background: #fff;
	}
	.hot-title-name{
		width: 1.6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		float: left;
		font-size: .34rem;
	}
	.hot-title-lists{
		float: right;
		padding-right: .2rem;
	}
	.hot-title-list1{
		width: 1.3rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		float: left;
	}
	.hot-title-list2{
		float: left;
	}
	.hot-content-lists{
		background: #fff;
		overflow: hidden;
		padding-left: .3rem;
	}
	.hot-content-list{
		width: 22%;
		height: .6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		float: left;
		margin-right: .2rem;
		margin-bottom: .2rem;
		line-height: .6rem;
		text-align: center;
		background: #f0fbfd;
		font-size: .3rem;
		color: #000000;
	}
	.hot-discount{
		position: relative;
		width: 100%;
		height: 1.3rem;
		margin-top: .3rem;
		margin-bottom: .3rem;
		background: #fff;
		float: left;
		text-align: center;
	}
	.hot-discount-img{
		position: absolute;
		left: 2rem;
		width: 1.3rem;
		height: 1.3rem;
		text-align: center;
		line-height: 1.3rem;
		color: #00BCD4;
		font-size: .5rem;
	}
	.hot-discount-content1{
		position: absolute;
		left: 3.3rem;
		top: .48rem;
		width: 1.6rem;
		height: .5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .5rem;
		color: #000000;
		font-size: .32rem;
	}
	.hot-discount-content2{
		position: absolute;
		left: 4.8rem;
		top: .63rem;
		width: 1rem;
		height: .26rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .24rem;
	}
</style>
