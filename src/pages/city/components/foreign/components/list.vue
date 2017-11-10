<template>
	<div>
		<div>
			<ul class="cityWord-con">
				<li class="cityWord-A" v-for="item in foreignInfo.cities" :key="item.id">{{item.text}}</li>
			</ul>
		</div>
		<div class="listCity-con">
			<div class="position">您的位置</div>
			<div class="positionCity">
				<span class="hotCity-item" >{{foreignInfo.position}}</span>
			</div>
			<div class="positionCity-title">热门城市</div>
			<div class="positionCity-con">
				<div class="positionCity-item"  v-for="item in foreignInfo.hotCities">
					{{item}}
				</div>
			</div>
			<ul class="cityWord-con-con">
				<li class="cityLetter" v-for="item in foreignInfo.cities">
					<span class="letterleft">{{item.text}}</span>
					<ul >
						<li class="cityWordS" v-for="city in item.city" >{{city}}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props:['foreignInfo']
	}
</script>
<style scoped>
	html{
		background: #F2F2F2;
	}
	body{
		font-size:.28rem;
	}
		.cityWord-con{
		position: fixed;
		right:0;
		top:162px;
	}
	.cityWord-A{
		width:.32rem;
		height:.32rem;
		padding-left:.2rem;
		font-size:.24rem;
		color:#00afc7;
		font-size:.24rem;
		text-align: center;
	}
	.listCity-con{
		width:100%;
		overflow: hidden;
	}
	.position{
		width:100%;
		height:.56rem;
		line-height:.54rem;
		color: #616161;
		background: #F2F2F2;
		padding-left:.3rem;
	}
	.positionCity{
		padding:.2rem .5rem .2rem .2rem;
		border-top:.02rem solid #c9cccd;
		border-bottom:.02rem solid #c9cccd;
	}
	.hotCity-item{
		display: block;
		height:.6rem;
		text-align: center;
		line-height:.6rem;
		border-radius: .08rem;
		width:30.3%;
		border:.02rem solid #00AFC7;
	}
	.cityWord-con-con{
		width:100%;
		overflow: hidden;
	}
	.positionCity-title{
		width:100%;
		height:.54rem;
		padding-left:.3rem;
		line-height:.54rem;
		background: #F2F2F2;
		border-bottom:.02rem solid #c9cccd
	}
	.positionCity-con{
		width:100%;
		overflow: hidden;
		padding-left:.2rem;
		padding-right:.6rem;
		padding-top:.1rem;
		padding-bottom:.26rem;
		background: #fff;
		border-bottom:.01rem solid #c9cccd;
	}
	.positionCity-item{
		width:26%;
		height:.52rem;
		border:.02rem solid #c9cccd;
		float:left;
		border-radius: .06rem;
		margin:.2rem .18rem 0rem .1rem;
		text-align: center;
		line-height:.52rem;
	}
	.cityWord-con-con{
		width:100%;
		overflow: hidden;
	}
	.cityLetter{
		width:100%;
		background: #f2f2f2;
		color:#616161;
		line-height:.54rem;
	}
	.letterleft{
		padding-left:.3rem;
	}
	.cityWordS{
		background: #fff;
		padding-left:.3rem;
		height:.76rem;
		line-height:.76rem;
		border-bottom:.02rem solid #c9cccd;
	}

</style>