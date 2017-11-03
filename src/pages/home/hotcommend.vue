<template>
	<div>	
		<div class='hotCommend-top'>
			<p class="hotCommend-title">热销推荐</p>
		</div>	
		<ul class="hotCommend-ul">
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫" class="hotCommend-img">
				<dl>
					<dt>故宫</dt>
					<dd class="hotCommend-outline">东方宫殿建筑代表，世界宫殿建筑典范</dd>
					<dd class="hotCommend-price"><span><b>￥</b>40</span>起</dd>
				</dl>
			</li>
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫" class="hotCommend-img">
				<dl>
					<dt>故宫</dt>
					<dd class="hotCommend-outline">东方宫殿建筑代表，世界宫殿建筑典范</dd>
					<dd class="hotCommend-price"><span><b>￥</b>40</span>起</dd>
				</dl>
			</li>
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫" class="hotCommend-img">
				<dl>
					<dt>故宫</dt>
					<dd class="hotCommend-outline">东方宫殿建筑代表，世界宫殿建筑典范</dd>
					<dd class="hotCommend-price"><span><b>￥</b>40</span>起</dd>
				</dl>
			</li>
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫" class="hotCommend-img">
				<dl>
					<dt>故宫</dt>
					<dd class="hotCommend-outline">东方宫殿建筑代表，世界宫殿建筑典范</dd>
					<dd class="hotCommend-price"><span><b>￥</b>40</span>起</dd>
				</dl>
			</li>
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫" class="hotCommend-img">
				<dl>
					<dt>故宫</dt>
					<dd class="hotCommend-outline">东方宫殿建筑代表，世界宫殿建筑典范</dd>
					<dd class="hotCommend-price"><span><b>￥</b>40</span>起</dd>
				</dl>
			</li>
		</ul>
		<div class="hotCommend-check">查看所有产品</div>
	</div>
	
</template>

<script>
  	export default {
    	data() {
			return {
				
      		} 
    	}
	}
</script>

<style>
	.hotCommend-top{
		background: #f2f2f2;
		padding: .3rem 0;
		padding-left: .2rem;
	}
	.hotCommend-title {
		overflow: hidden;
	}
	.hotCommend-introduce .hotCommend-img{
		width: 1.5rem;
		height: 1.5rem;
		margin: .2rem;
	}
	.hotCommend-introduce{
		float: left;
		border-bottom: 1px solid #f2f2f2;
		background: #FFFFFF;
	}
	.hotCommend-introduce dl{
		float: right;
		margin-top: .2rem;
		color: #ccc;
	}
	.hotCommend-introduce dl dt{
		font-size: .36rem;
		padding-bottom: .15rem;
		color: #000000;
	}
	.hotCommend-introduce dl .hotCommend-outline{
		font-size: 0.3rem;
		padding-bottom: .24rem;
	}
	.hotCommend-introduce dl .hotCommend-price span{
		color: orange;
		font-size: 0.4rem;
		padding-right: .1rem;
	}
	.hotCommend-introduce dl .hotCommend-price span b{
		font-size: .1rem;
	}
	.hotCommend-check{
		clear: both;
		color: #00BCD4;
		padding: 0.35rem 0;
		text-align: center;
	}
</style>