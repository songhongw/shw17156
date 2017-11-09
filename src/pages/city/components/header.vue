<template>
	<div>
		<div class="city-header">
			<span class="backIndex iconfont icon-fanhui "></span>
			<ul class="city-con">
				<li class="city-Domestic"  @click="changeData">国内</li>
				<li class="city-Foreign"   @click="changeData">海外</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				show:false
			}
		},
		methods:{
			changeData(){
				if(!this.show){
					this.show =　true;
				}else{
					this.show = false;
				}
				this.$emit("change",this.show)
			}
			
		}
	}
</script>y

<style scoped>
	.city-header{
		width:100%;
		height:.88rem;
		background: #00AFC7;
		padding:0 .22rem;
		position: fixed;
		top:0;
	}
	.backIndex{
		color:#fff;
		display: inline-block;
		width:.4rem;
		line-height:.88rem;
		font-size:.36rem;
		float:left;
	}
	.city-con{
		width:4rem;
		height:.56rem;
		border:.02rem solid #fff;
		border-radius: .02rem;
		float:left;
		margin-top:.15rem;
		margin-left:1.2rem;
		line-height:.56rem;
	}
	.city-Domestic{
		float:left;
		width:2rem;
		text-align: center;
		color:#000;
	}
	.city-Foreign{
		float:left;
		width:2rem;
		text-align: center;
		color:#000;
	}
</style>