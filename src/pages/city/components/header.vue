<template>
	<div>
		<div class="city-header">
			<router-link to="/">
				<span class="backIndex iconfont icon-fanhui "></span>
			</router-link>
			<ul class="city-con">
				<li class="city-Domestic" :domestic=true :class="{color:changeColor}"  @click="changeData">国内</li>
				<li class="city-Foreign"  :class="{color:changeColor}"  @click="changeData">海外</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
	export default{
		data(){
			return{
				show:false,
				domestic:true,
				changeColor:true
			}
		},
		methods:{
			changeData(){
				if(!this.show){
					this.show =　true;
					this.changeColor = false;
					this.domestic = true;
					
				}else{
					this.show = false;
					this.changeColor = true;
					this.domestic = true;
				}
				this.$emit("change",this.show)
			} 
			
		}
	}
</script>y

<style scoped>
	.color{
		background: white;
	}
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