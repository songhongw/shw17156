<template>
	<div class="cityArea">
	 	<header class="headercity">
	 		<div class="header-leftcity iconfont icon-fanhui"></div>
		 		<ul class="header-titlecity">
		 			<li class="header-nation" @click = "handlecolor(0)"  ref="nation1" :key="show">国内</li>
		 			<li class="header-abroad" @click = "handlecolor(1)"  ref="nation2" :key="show">海外</li>
		 		</ul>
	 	</header>
	 	<div class="city-main">
	 		<div class="findCity">
	 			<input class="findCityInput" placeholder="输入城市名或拼音" @keyup="handleInputContent" ref="inputContent">
	 		</div>
	 		<div class="position">您的位置</div>
	 		<div class="cityArea-content">
	 			<span class="cityPosition">北京</span>
	 		</div>
	 	</div>
	 	<ul class="letter-list" >
    			<li class="letter-item">A</li>
    			<li class="letter-item">B</li>
    			<li class="letter-item">C</li>
    			<li class="letter-item">D</li>
    			<li class="letter-item">E</li>
    			<li class="letter-item">F</li>
    			<li class="letter-item">G</li>
    			<li class="letter-item">H</li>
    			<li class="letter-item">J</li>
    			<li class="letter-item">K</li>
    			<li class="letter-item">L</li>
    			<li class="letter-item">M</li>
    			<li class="letter-item">N</li>
    			<li class="letter-item">P</li>
    			<li class="letter-item">Q</li>
    			<li class="letter-item">R</li>
    			<li class="letter-item">S</li>
    			<li class="letter-item">T</li>
    			<li class="letter-item">W</li>
    			<li class="letter-item">X</li>
    			<li class="letter-item">Y</li>
    			<li class="letter-item">Z</li>
    		</ul>
    		<div class="allCity-con" v-if="show">
    			<div class="hotCity">热门城市</div>
    			<div class="hotCity-main">
    				<ul class="hotCity-maincon">
		    			<li class="hotCity-item">北京</li>
		    			<li class="hotCity-item">上海</li>
		    			<li class="hotCity-item">三亚</li>
		    			<li class="hotCity-item">香港</li>
		    			<li class="hotCity-item">杭州</li>
		    			<li class="hotCity-item">广州</li>
		    			<li class="hotCity-item">成都</li>
		    			<li class="hotCity-item">深圳</li>
		    			<li class="hotCity-item">苏州</li>
		    			<li class="hotCity-item">桂林</li>
		    			<li class="hotCity-item">西安</li>
		    			<li class="hotCity-item">厦门</li>
		    			<li class="hotCity-item">杭州</li>
		    			<li class="hotCity-item">广州</li>
		    			<li class="hotCity-item">成都</li>
		    			<li class="hotCity-item">桂林</li>
	    			</ul>
    			</div>
    		<div class="area-everyCity">
    			<div class="hotCity" >A</div>
	    		<ul class="cityHerder-letter">
	    			<li class="cityHerder-item">阿坝藏族羌族自治州</li>
	    			<li class="cityHerder-item">阿克苏地区</li>
	    			<li class="cityHerder-item">阿拉尔</li>
	    			<li class="cityHerder-item">阿拉善盟</li>
	    			<li class="cityHerder-item">阿勒泰</li>
	    			<li class="cityHerder-item">阿里</li>
	    			<li class="cityHerder-item">安康</li>
	    			<li class="cityHerder-item">安庆</li>
	    			<li class="cityHerder-item">安顺</li>
	    			<li class="cityHerder-item">安阳</li>
	    			<li class="cityHerder-item">鞍山</li>
	    			<li class="cityHerder-item">澳门</li>
	    		</ul>
    		</div>
    		<div class="area-allCity-aborad" v-if="show">
		    	<div class="area-everyCity">
		    		<div class="hotCity" >B</div>
		    			<ul class="cityHerder-letter">
			    			<li class="cityHerder-item">巴彦淖尔</li>
			    			<li class="cityHerder-item">巴音郭楞</li>
			    			<li class="cityHerder-item">巴中</li>
			    			<li class="cityHerder-item">白城</li>
			    			<li class="cityHerder-item">白沙</li>
			    			<li class="cityHerder-item">白山</li>
			    			<li class="cityHerder-item">白银</li>
			    			<li class="cityHerder-item">百色</li>
			    			<li class="cityHerder-item">蚌埠</li>
			    			<li class="cityHerder-item">包头</li>
			    			<li class="cityHerder-item">宝鸡</li>
			    			<li class="cityHerder-item">保定</li>
			    			<li class="cityHerder-item">保山</li>
			    			<li class="cityHerder-item">保亭</li>
			    			<li class="cityHerder-item">北海</li>
			    			<li class="cityHerder-item">北京</li>
			    			<li class="cityHerder-item">本溪</li>
			    			<li class="cityHerder-item">毕节</li>
			    			<li class="cityHerder-item">滨州</li>
			    			<li class="cityHerder-item">亳州</li>
			    			<li class="cityHerder-item">博尔塔拉</li>
		    			</ul>
		    		</div>
		    		<div class="area-everyCity">
		    			<div class="hotCity" >C</div>
		    			<ul class="cityHerder-letter">
			    			<li class="cityHerder-item">昌州</li>
			    			<li class="cityHerder-item">昌都</li>
			    			<li class="cityHerder-item">昌吉</li>
			    			<li class="cityHerder-item">常德</li>
			    			<li class="cityHerder-item">常州</li>
			    			<li class="cityHerder-item">巢湖</li>
			    			<li class="cityHerder-item">朝阳</li>
			    			<li class="cityHerder-item">潮州</li>
			    			<li class="cityHerder-item">成都</li>
			    			<li class="cityHerder-item">承德</li>
			    			<li class="cityHerder-item">池州</li>
			    			<li class="cityHerder-item">保定</li>
			    			<li class="cityHerder-item">保山</li>
			    			<li class="cityHerder-item">赤峰</li>
			    			<li class="cityHerder-item">北海</li>
			    			<li class="cityHerder-item">北京</li>
			    			<li class="cityHerder-item">本溪</li>
			    			<li class="cityHerder-item">毕节</li>
			    			<li class="cityHerder-item">滨州</li>
			    			<li class="cityHerder-item">亳州</li>
			    			<li class="cityHerder-item">博尔塔拉</li>
		    			</ul>
		    		</div>
	    		</div>
    		</div>
    		<div class="area-allCity-nation"  v-if="!show">
    			<div class="allCity-con">
    			<div class="hotCity">热门城市</div>
    			<div class="hotCity-main">
    				<ul class="hotCity-maincon">
		    			<li class="hotCity-item">普吉岛</li>
		    			<li class="hotCity-item">清迈</li>
		    			<li class="hotCity-item">香港</li>
		    			<li class="hotCity-item">东京</li>
		    			<li class="hotCity-item">台北</li>
		    			<li class="hotCity-item">澳门</li>
		    			<li class="hotCity-item">巴厘岛</li>
		    			<li class="hotCity-item">曼谷</li>
		    			<li class="hotCity-item">芭提雅</li>
		    			<li class="hotCity-item">首尔</li>
		    			<li class="hotCity-item">新加坡</li>
		    			<li class="hotCity-item">济州岛</li>
		    			<li class="hotCity-item">迪拜</li>
		    			<li class="hotCity-item">沙巴</li>
	    			</ul>
    			</div>
    		</div>
    	</div>
	</div>
</template>

<script>
	export default {
		 data(){
		 	return{
		 		show:true,
		 		index:"0"
		 	}
		 },
		 methods:{
		 	handlecolor( index ){
		 		if( index==0 ){
		 			this.show = true;
		 		}else{
		 			this.show = false;
		 		}
		 	},
		 	handleInputContent(){
		 		console.log(this.$refs.inputContent.value);
		 		console.log( this.dataList );
		 	}
		 },
		mounted(){
			this.$refs.nation1.style.background = "white";
			this.$refs.nation1.style.color = "#00afc7"
		}
	}
</script>  

<style>
	.headercity {
		width:100%;
		height: .88rem;
		background: #00afc7;
		overflow: hidden;
		text-align: center;
		position: fixed;
	}
	.header-leftcity {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-titlecity{
		height:.58rem;
		width:100%;
	}
	.header-nation{
		float:left;
		width:2rem;
		height:.56rem;
		background: #00afc7;
		margin-top:.15rem;
		border:.02rem solid #fff;
		display: inline-block;
		font-size:.28rem;
		line-height:.56rem;
		margin-left:1rem;
		color:#fff;
	}
	.header-abroad{
		float:left;
		width:2rem;
		height:.56rem;
		background: #00afc7;
		margin-top:.15rem;
		display: inline-block;
		border:.02rem solid #fff;
		font-size:.28rem;
		line-height:.56rem;
		color:#fff;
	}
	.findCity{
		padding:0 .2rem .1rem .2rem;
		font-size:.26rem;
		color:#9e9e9e;
		background: #00afc7;
		padding-top:.88rem;
	}
	.findCityInput{
		width:100%;
		height:.56rem;
		border:none;
		border-radius:.04rem;
		padding-left:.1rem;
	}
	.position{
		width:100%;
		padding-left:.3rem;
		color: #616161;
		font-size:.26rem;
		height:.54rem;
		line-height:.54rem;
	}
	.cityArea-content{
		height:.8rem;
		padding-left:.2rem;
		padding-right:.5rem;
		background: #fff;
		padding-top:.3rem;
		border-top:.02rem solid #c9cccd;
		border-bottom:.007rem solid #c9cccd;
	}
	.cityPosition{
		display: block;
		height:.5rem;
		width:1.4rem;
		line-height:.5rem;
		border:.02rem solid #00afc7;
		text-align: center;
		line-height:.5rem;
		border-radius: .06rem;
		color:#00afc7;
	}
	.letter-list{
		color:#00afc7;
		position: fixed;
		font-size:.24rem;
		right:0;
	}
	.letter-item{
		width:.32rem;
		height:.32rem;
		text-align: center;
	}
	.hotCity-main{
		background: #fff;
		width:100%;
		overflow: hidden;
		padding-left:.2rem;
		padding-right:.5rem;
		padding-bottom:.3rem;
		padding-top:.1rem;
	}
	.hotCity{
		height:.54rem;
		width:100%;
		line-height:.54rem;
		padding-left:.3rem;
		font-size:.26rem;
	}
	.hotcity-maincon{
		overflow: hidden;
		background: #fff;
	}
	.hotCity-item{
		width:27%;
		height:.6rem;
		background: #fff;
		float:left;
		border:.02rem solid #c9cccd;
		border-radius: .06rem;
		margin:.2rem .14rem 0 .1rem;
		text-align: center;
		line-height:.6rem;
	}
	.area-everyCity{
		overflow: hidden;
		width:100%;
	}
	.cityHerder-item{
		border-width: 100%;
		height:.78rem;
		border-top:.02rem solid #c9cccd;
		background: #fff;
		line-height:.78rem;
		font-size:.28rem;
		padding-left:.2rem;
	}
</style>
