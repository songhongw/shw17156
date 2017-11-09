<template>
	<div>
		<ul class="cityWord-con">
			<li class="cityWord-A" v-for="item in foreignInfo.cities" :key="item.id">{{item.text}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['foreignInfo']
		
	}
</script>
<style scoped>
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
</style>