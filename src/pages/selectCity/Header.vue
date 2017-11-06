<template>
	<div>
	 	<header class="header">
	 		<div class="header-left iconfont icon-fanhui"></div>
		 		<div class="header-top">
		 			城市选择
		 		</div>
	 		<div class="header-bottom">
		 		<ul>
		        	<li @click="country(0)" ref="nation1" >国内</li>
		        	<li @click="country(1)" ref="nation2" >国际</li>
		 		</ul>
	 		</div>	
	 	</header>
	 	<div v-if="show">
	 		<p class="cityHerder">热门城市</p>
	    	<div>
	    		<ul class="hotcity">
	    			<li>北京</li>
	    			<li>上海</li>
	    			<li>三亚</li>
	    			<li>香港</li>
	    			<li>杭州</li>
	    			<li>广州</li>
	    			<li>成都</li>
	    			<li>深圳</li>
	    			<li>苏州</li>
	    			<li>桂林</li>
	    			<li>西安</li>
	    			<li>厦门</li>
	    		</ul>
	    	</div>
	    	<p class="cityHerder">字母排序</p>
    		<ul class="letter-list" >
    			<li>A</li>
    			<li>B</li>
    			<li>C</li>
    			<li>D</li>
    			<li>E</li>
    			<li>F</li>
    			<li>G</li>
    			<li>H</li>
    			<li>J</li>
    			<li>K</li>
    			<li>L</li>
    			<li>M</li>
    			<li>N</li>
    			<li>P</li>
    			<li>Q</li>
    			<li>R</li>
    			<li>S</li>
    			<li>T</li>
    			<li>W</li>
    			<li>X</li>
    			<li>Y</li>
    			<li>Z</li>
    		</ul>
	    	<p class="cityHerder">A</p>
    		<ul class="cityHerder-letter">
    			<li>阿坝藏族羌族自治州</li>
    			<li>阿克苏地区</li>
    			<li>阿拉尔</li>
    			<li>阿拉善盟</li>
    			<li>阿勒泰</li>
    			<li>阿里</li>
    			<li>安康</li>
    			<li>安庆</li>
    			<li>安顺</li>
    			<li>安阳</li>
    			<li>鞍山</li>
    			<li>澳门</li>
    		</ul>
	    	<p class="cityHerder">B</p>
    		<ul class="cityHerder-letter">
    			<li>巴彦淖尔</li>
    			<li>巴音郭楞</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>白沙</li>
    			<li>白山</li>
    			<li>白银</li>
    			<li>百色</li>
    			<li>蚌埠</li>
    			<li>包头</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>北京</li>
    			<li>本溪</li>
    			<li>毕节</li>
    			<li>滨州</li>
    			<li>亳州</li>
    			<li>博尔塔拉</li>
    			<li></li>
    			<li></li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">C</p>
	    	<ul class="cityHerder-letter">
    			<li>沧州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>白沙</li>
    			<li>白山</li>
    			<li>白银</li>
    			<li>百色</li>
    			<li>蚌埠</li>
    			<li>包头</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>北京</li>
    			<li>本溪</li>
    			<li>毕节</li>
    			<li>滨州</li>
    			<li>亳州</li>
    			<li>长治</li>
    			<li>重庆</li>
    			<li></li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">D</p>
	    	<ul class="cityHerder-letter">
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>白沙</li>
    			<li>白山</li>
    			<li>白银</li>
    			<li>百色</li>
    			<li>蚌埠</li>
    			<li>包头</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>北京</li>
    			<li>本溪</li>
    			<li>东营</li>
    			<li>敦煌市</li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">E</p>
	    	<ul  class="cityHerder-letter">
	    		<li>鄂尔多斯</li>
	    		<li>鄂州</li>
	    		<li>敦煌市</li>
	    		<li></li>
	    	</ul>
	    	<p class="cityHerder">F</p>
	    	<ul class="cityHerder-letter">
    			<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>阜阳</li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">G</p>
	    	<ul class="cityHerder-letter">
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>白沙</li>
    			<li>白山</li>
    			<li>白银</li>
    			<li>百色</li>
    			<li>蚌埠</li>
    			<li>包头</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    		</ul>
	    	<p class="cityHerder">H</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    		</ul>
	    	<p class="cityHerder">J</p>
	    	<ul class="cityHerder-letter">
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    		</ul>
	    	<p class="cityHerder">K</p>
	    	<ul class="cityHerder-letter">
    			<li>达州</li>
    			<li>昌都</li>
    			<li>巴中</li>
    			<li>白城</li>
    			<li>达州</li>
    			<li>昌都</li>
    			<li></li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">L</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    		</ul>
	    	<p class="cityHerder">M</p>
	    	<ul class="cityHerder-letter">
    			<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>阜阳</li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">N</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li></li>
    			<li></li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">P</p>
	    	<ul class="cityHerder-letter">
    			<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>阜阳</li>
    			<li>普宁</li>
    			<li>普宁</li>
    			<li>普宁</li>
    			<li></li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">Q</p>
	    	<ul class="cityHerder-letter">
    			<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>阜阳</li>
    			<li>普宁</li>
    			<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>北海</li>
    			<li>阜阳</li>
    			<li>普宁</li>
    		</ul>
	    	<p class="cityHerder">R</p>
	    	<ul class="cityHerder-letter">
    			<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">S</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    		</ul>
	    	<p class="cityHerder">T</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    		</ul>
	    	<p class="cityHerder">W</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li></li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">X</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li></li>
    			<li></li>
    		</ul>
	    	<p class="cityHerder">Y</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    		</ul>
	    	<p class="cityHerder">Z</p>
	    	<ul class="cityHerder-letter">
	    		<li>防御港</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    			<li>保亭</li>
    			<li>宝鸡</li>
    			<li>保定</li>
    			<li>保山</li>
    		</ul>
	 	</div>
	 	<div v-if="!show">
	 		<p class="cityHerder">热门城市</p>
	    	<div>
	    		<ul class="hotcity">
	    			<li>香港</li>
	    			<li>澳门</li>
	    			<li>台湾</li>
	    			<li>曼谷</li>
	    			<li>新加坡</li>
	    			<li>首尔</li>
	    			<li>东京</li>
	    			<li>济州岛</li>
	    			<li>芭堤雅</li>
	    			<li>巴厘岛</li>
	    			<li>清迈</li>
	    			<li>悉尼</li>
	    			<li>大阪</li>
	    			<li>洛杉矶</li>
	    			<li>旧金山</li>
	    			<li>罗马</li>
	    			<li>巴黎</li>
	    			<li>伦敦</li>
	    			<li>米兰</li>
	    			<li>纽约</li>
	    			<li></li>
	    		</ul>
	    	</div>
	    	<p class="cityHerder">字母排序</p>
    		<ul class="letter-list" >
    			<li>A</li>
    			<li>B</li>
    			<li>C</li>
    			<li>D</li>
    			<li>E</li>
    			<li>F</li>
    			<li>G</li>
    			<li>H</li>
    			<li>I</li>
    			<li>J</li>
    			<li>K</li>
    			<li>L</li>
    			<li>M</li>
    			<li>N</li>
    			<li>P</li>
    			<li>Q</li>
    			<li>R</li>
    			<li>S</li>
    			<li>T</li>
    			<li>W</li>
    			<li>X</li>
    			<li>Y</li>
    			<li>Z</li>
    		</ul>
	    	<p class="cityHerder">A</p>
    		<ul class="cityHerder-letter">
    			<li>阿富汗</li>
    			<li>阿尔巴尼亚</li>
    			<li>阿尔及利亚</li>
    			<li>美国</li>
    			<li>安哥拉</li>
    			<li>安提瓜和巴布达</li>
    			<li>阿联酋</li>
    			<li>阿根廷</li>
    			<li>亚美尼亚</li>
    			<li>阿鲁巴</li>
    			<li>澳大利亚</li>
    			<li>奥地利</li>
    			<li>阿塞拜疆</li>
    			<li></li>
    			<li></li>
    			<li></li>
    		</ul>
	 	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				
			}
		},
		mounted(){
			this.$refs.nation1.style.background = "white",
			this.$refs.nation1.style.color = "#00bcd4"
		},
		methods: {
			country: function(index) {
				if( index == 0 ) {
					this.show = true;
				}else{
					this.show = false
				}
			}
		},
		watch:{
			show(){
				if( this.show==true ){
					this.$refs.nation1.style.background = "white";
					this.$refs.nation1.style.color = "#00bcd4";
					this.$refs.nation2.style.background = "";
					this.$refs.nation2.style.color = ""
				}else{
					this.$refs.nation1.style.background = "";
					this.$refs.nation1.style.color = "";
					this.$refs.nation2.style.background = "white";
					this.$refs.nation2.style.color = "#00bcd4"
				}
			}
		}
	}
</script>  

<style>
	
	.header {
		height: 1.5rem;
		background: #00bcd4;
		overflow: hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding-left: .3rem;
		padding-top: .3rem;
		font-size: .3rem;
		color: #fff;
		font-weight: bold;
	}
	.header-top{
		padding-left: 3.1rem;
		height: 0.65rem;
		border-bottom: 1px solid #f2f2f2;
		line-height: .9rem;
		font-size: .34rem;
		color: #fff;
		
	}
	.header-bottom{
		padding-top: .2rem;
		padding-left: .95rem;
	}
	.header-bottom ul li{
		color: #fff;
		float: left;
		width: 2.8rem;
		height: .4rem;
		line-height: .4rem;
		text-align: center;
		border: 1px solid #fff;
	}
	.cityHerder{
		background: #f2f2f2;
		height: .8rem;
		line-height: .8rem;
		padding-left: .3rem;
	}
	.hotcity{
		overflow: hidden;
		background: #f2f2f2;
	}
	.hotcity li{
		float: left;
		width: 32.80%;
		height: .8rem;
		line-height: .8rem;
		background: #fff;
		margin-right: .04rem;
		margin-bottom: .04rem;
		text-align: center;
	}
	.letter-list{
		overflow: hidden;
		padding-top: .6rem;
		background: #fff;
	}
	.letter-list li{
		width: 16.5%;
		float: left;
		background: #fff;
		padding-bottom: .6rem;
		text-align: center;
	}
	.cityHerder-letter{
		overflow: hidden;
		background: #f2f2f2;
	}
	.cityHerder-letter li{
		float: left;
		background: #fff;
		width: 24.47%;
		height:.88rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: .88rem;
		margin-bottom: .04rem;
		margin-right: .04rem;
		text-align: center;
	}
</style>
