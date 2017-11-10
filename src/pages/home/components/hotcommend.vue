<template>
	<div>	
		<div class='hotCommend-top'>
			<p class="hotCommend-title">热销推荐</p>
		</div>	
		<div id="wrapper">
			<div id="scroller">
				<ul class="hotCommend-ul">
					<li class="hotCommend-introduce" v-show="showLoading">加载更多</li>
					<router-link to="/Palace">
						<li class="hotCommend-introduce" v-for="item in recommendInfo" :key="item.id">
							<img :src="item.imgUrl" alt="故宫" class="hotCommend-img">
							<dl>
								<dt>{{item.title}}</dt>
								<dd class="hotCommend-outline">{{item.description}}</dd>
								<dd class="hotCommend-price"><span><b>￥</b>{{item.price}}</span>起</dd>
							</dl>
						</li>
					</router-link>
				</ul>
			</div>
		</div>
		<div class="hotCommend-check">查看所有产品</div>
	</div>
	
</template>

<script>
require("../../../utils/iscroll-probe.js")

  	export default {
  		data(){
  			return{
  				
  				showLoading:false
  			}
  		},
    	props:['recommendInfo'],
    	mounted(){
//  		this.flag=false,
    		this.IScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true });
    		this.IScroll.on("scroll",()=>{
//			if(!this.flag){
	    			if( this.IScroll.y>50 ){
	    				this.showLoading=true;
	    				this.$store.commit("refreshInfo");
	    			}
//  			}
    		})
    	},
    	updated(){
    		setTimeout(()=>{
    			this.IScroll.refresh();
//  			this.flag = true;
    			this.showLoading=false;	
    		},1000)
    		
    	}
	}
</script>

<style>
	#wrapper{
		height:160px;
		overflow: hidden;
	}
	.hotCommend-ul{
		width:100%;
		overflow: hidden;
		background: #fff;
	}
	.hotCommend-top{
		background: #f2f2f2;
		padding: .35rem 0;
		padding-left: .2rem;
	}
	.hotCommend-title {
		overflow: hidden;
	}
	.hotCommend-introduce .hotCommend-img{
		width: 1.3rem;
		height: 1.3rem;
		margin: .24rem;
		float: left;
	}
	
	.hotCommend-introduce{
		clear: both;
		border-bottom: 1px solid #f2f2f2;
		background: #FFFFFF;
		width: 100%;
	}
	.hotCommend-introduce dl{
		float: left;
		margin-top: .24rem;
		color: #ccc;
	}
	.hotCommend-introduce dl dt{
		font-size: .32rem;
		padding-bottom: .1rem;
		color: #000000;
	}
	.hotCommend-introduce dl .hotCommend-outline{
		font-size: 0.28rem;
		padding-bottom: .16rem;
	}
	.hotCommend-introduce dl .hotCommend-price span{
		color: orange;
		font-size: 0.4rem;
		padding-right: .1rem;
	}
	.hotCommend-introduce dl .hotCommend-price span b{
		font-size: .1rem;
	}
	.hotCommend-check{
		clear: both;
		color: #00BCD4;
		padding: 0.35rem 0;
		text-align: center;
		background: #fff;
	}
</style>