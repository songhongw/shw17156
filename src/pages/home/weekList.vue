<template>
	<div class="weekList-content">
 	<h2 class="weekList-top">周末去哪儿</h2>
 	<div>
 		<div class="weekList-item">
 			<img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="北京温泉排行榜">
 		</div>
 		<div class="weekList-item-info">
 			<a class="weekList-item-name" href="#">北京温泉排行榜</a>
 			<p class="weekList-item-desc">细数北京温泉，温暖你的冬天</p>
 		</div>	
 	</div>
 	 	<div>
 		<div class="weekList-item">
 			<img src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="寻找北京的皇城范儿">
 		</div>
 		<div class="weekList-item-info">
 			<a class="weekList-item-name" href="#">寻找北京的皇城范儿</a>
 			<p class="weekList-item-desc">数百年的宫廷庙宇，至今依旧威严霸气</p>
 		</div>	
 	</div>
 	 	<div>
 		<div class="weekList-item">
 			<img src="http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg" alt="北京必游TOP10">
 		</div>
 		<div class="weekList-item-info">
 			<a class="weekList-item-name" href="#">北京必有TOP10</a>
 			<p class="weekList-item-desc">来北京必去的景点给这些地方莫属</p>
 		</div>	
 	</div>
 	 	<div>
 		<div class="weekList-item">
 			<img src="http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg" alt="登高望远秋色佳">
 		</div>
 		<div class="weekList-item-info">
 			<a class="weekList-item-name" href="#">登高望远秋色佳</a>
 			<p class="weekList-item-desc">山顶满眼彩色，此情此景醉了</p>
 		</div>	
 	</div>
 	 	<div>
 		<div class="weekList-item">
 			<img src="http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg" alt="秋高气爽去礼佛">
 		</div>
 		<div class="weekList-item-info">
 			<a class="weekList-item-name" href="#">秋高气爽去礼佛</a>
 			<p class="weekList-item-desc">秋风伴着美妙经声，品尝秋的另一番滋味</p>
 		</div>	
 	</div>
 	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.weekList-top{
		height : .8rem;
		background: #f2f2f2;
		color: #212121;
		font-size: .28rem;
		line-height: .8rem;
		padding-left: .26rem;
	}
	.weekList-item{
		overflow:hidden;
		width:100%;
		height:0;
		padding-bottom:37.92%;
	}
	.weekList-img{
		width:100%;
		
	}
	.weekList-item-info{
		padding: .14rem .2rem .2rem .2rem; 
		background: #fff;
	}
	.weekList-item-name,
	.weekList-item-desc{
		display:block;
		overflow: hidden;
		padding-right: 1.4rem;
		color: #212121;
		font-size: .28rem;
		line-height: 0.48rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	} 
</style>