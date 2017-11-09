<template>
	<div>
		<div class="travel">
			<h2 class="travel-title"><span></span>必游景点推荐</h2>
			<dl class="travel-lists" v-for="item in recommendInfo" :key="item.id">
				<router-link :to="item.link">
					<dt class="travel-list">
						<img class="travel-list-img" :src="item.imgUrl" :alt="item.alt">
					</dt>
					<dd class="travel-list-name">{{item.title}}</dd>
					<dd class="travel-list-route">{{item.route1}}<span class="travel-list-color">{{item.route2}}</span>{{item.route3}}</dd>
				</router-link>
			</dl>
		</div>
		<div class="travel-all">
			<p class="travel-allday">北京全部一日游</p>
		</div>
	</div>
</template>

<script>
	export default {
		
		computed: {
    		recommendInfo() {
    			return this.$store.state.daytour.recommendInfo;
    		}
    	}
	}
</script>

<style scoped>
	.travel{
		padding-bottom: .3rem;
		padding-left: .19rem;
		margin-top: 2.3rem;
		background: #fff;
		overflow: hidden;
	}
	.travel-title{
		padding-top: .3rem;
		width: 2.2rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .35rem;
		font-weight: bold;
	}
	.travel-lists{
		float: left;
		margin-top: .3rem;
		text-align: center;
	}
	.travel-list{
		padding-right: .1rem;
	}
	.travel-list-img{
		display: inline-block;
		width:2.3rem;
		height: 1.8rem;
		color: #25A4BB;
		text-align: center;
		line-height: 1.7rem;
	}
	.travel-list-name{
		width: 1.4rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-top: .1rem;
		padding-left: .5rem;
		font-size: .28rem;
		color: #000000;
	}
	.travel-list-route{
		width: 1.5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-top: .1rem;
		padding-left: .43rem;
		font-size: .1rem;
		color: #999;
	}
	.travel-list-color{
		color: #00BCD4;
	}
	.travel-all{
		text-align: center;
		background: #fff;
		padding-left: 2.5rem;
		padding-bottom: .3rem;
	}
	.travel-allday{
		width: 2.4rem;
		height: .6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .6rem;
		border: 1px solid #ccc;
		border-radius: .1rem;
	}
</style>