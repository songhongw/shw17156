<template>
	<div>
		<ul class="cityWord-con" @touchstart="handleGetTop">
			<li class="cityWord-A" v-for="item in domesticInfo.cities" :key="item.id">{{item.text}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['domesticInfo'],
		data(){
			return{
				alphabet:[]
			}
		},
		methods:{
			handleGetTop(e){
				for(var i=0;i<e.touches.length;i++){
					var y = this.alphabet.push(e.touches[i].clientY-150)/i;
					document.addEventListener("touchmove",this.handleMoveOffsetTop,false);
					document.addEventListener("touchend",this.handleEndOffsetTop,false)
				}
				this.$emit("change",e);
			},
			handleOffsetTop(){
				
			},
			handleEndOffsetTop(){
				
			}
		}
		
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