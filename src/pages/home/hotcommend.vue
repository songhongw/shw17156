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
				<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg" alt="八达岭长城" class="hotCommend-img">
				<dl>
					<dt>八达岭长城</dt>
					<dd class="hotCommend-outline">不到长城非好汉</dd>
					<dd class="hotCommend-price"><span><b>￥</b>25</span>起</dd>
				</dl>
			</li>
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg" alt="颐和园" class="hotCommend-img">
				<dl>
					<dt>颐和园</dt>
					<dd class="hotCommend-outline">保存完整的一座皇家行宫御苑</dd>
					<dd class="hotCommend-price"><span><b>￥</b>22</span>起</dd>
				</dl>
			</li>
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg" alt="北京欢乐谷" class="hotCommend-img">
				<dl>
					<dt>北京欢乐谷</dt>
					<dd class="hotCommend-outline">七大主题园区带你畅享北京欢乐谷</dd>
					<dd class="hotCommend-price"><span><b>￥</b>28</span>起</dd>
				</dl>
			</li>
			<li class="hotCommend-introduce">
				<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg" alt="慕田峪长城" class="hotCommend-img">
				<dl>
					<dt>慕田峪长城</dt>
					<dd class="hotCommend-outline">秀美长城，关键是人少</dd>
					<dd class="hotCommend-price"><span><b>￥</b>19.1</span>起</dd>
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
		padding: .35rem 0;
		padding-left: .2rem;
	}
	.hotCommend-title {
		overflow: hidden;
	}
	.hotCommend-introduce .hotCommend-img{
		width: 1.3rem;
		height: 1.3rem;
		margin: .24rem;
		float: left;
	}
	
	.hotCommend-introduce{
		float: left;
		border-bottom: 1px solid #f2f2f2;
		background: #FFFFFF;
		width: 100%;
	}
	.hotCommend-introduce dl{
		float: left;
		margin-top: .24rem;
		color: #ccc;
	}
	.hotCommend-introduce dl dt{
		font-size: .32rem;
		padding-bottom: .1rem;
		color: #000000;
	}
	.hotCommend-introduce dl .hotCommend-outline{
		font-size: 0.28rem;
		padding-bottom: .16rem;
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
		background: #fff;
	}
</style>