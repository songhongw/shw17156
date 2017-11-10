<template>
	<div class="weekList-content">
 		<h2 class="weekList-top">周末去哪儿</h2>
	 	<div v-for="item in weekendInfo">
	 		<div class="weekList-item">
	 			<img :src="item.imgUrl">
	 		</div>
	 		<div class="weekList-item-info">
	 			<a class="weekList-item-name" href="#">{{item.title}}</a>
	 			<p class="weekList-item-desc">{{item.description}}</p>
	 		</div>	
	 	</div>
 	</div>
</template>

<script>
	export default {
		props:['weekendInfo']
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