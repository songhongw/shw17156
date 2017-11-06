<template>
 	<header class="header">
 		<div class="header-left iconfont icon-fanhui"></div>
 		<router-link to="/list">
	 		<input class="header-title" placeholder="输入城市或景点">
 		</router-link>
 		<div class="header-right1">
 			<div class="header-city-wrapper1">
 				<span class="header-city1">搜索</span>
 			</div>
 		</div>
 	</header>
</template>

<script>
	export default {
		 
	}
</script>  

<style>
	
	.header {
		height: .88rem;
		background: #00bcd4;
		overflow: hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		position: absolute;
		left: .8rem;
		right: 1.36rem;
		top: .14rem;
		width:4.3rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
		color: #000;
		border:none;
	}
	.header-right1 {
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	.header-city-wrapper1 {
		position: relative;
		padding-right: .3rem;
	}
	.header-city1 {
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		width: 1rem;
		text-overflow: ellipsis;
	}
</style>
