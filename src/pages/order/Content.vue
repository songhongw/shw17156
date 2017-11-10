<template>
	<div class="order-con">
		
			<div class="order-header">
				<router-link to="/">
					<span class="iconfont icon-fanhui order-com"></span>
				</router-link>
 		        <p class="title"> 订单填写 </p>			
 		           
 		        <a class="register " href="" > 登录 </a>
 				
			</div>
			
			<div class="infrom">
				
				<p class="time">[上午场]</p>	
				<span class="identity">故宫成人票凭身份证入园</span>
				<span class="fares">￥40/张</span>	
				
			</div>
			
			<div class="reservation">
				<img class="clock" src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png">
	            <p class="date">2017-11-11</p>
	            <img class="correct" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">
	            <p class="date">条件退</p>
	            <span class="book">预订须知</span>
			</div>
			
			<div class="anout">
				
				<p class=" quantity">购买数量</p>
				<span class="stretch ">最多买5张</span>
				<span class="iconfont icon-jiahao plus"></span>
			    <!-- <input type="text" class="style1" /> -->
				<span class="iconfont icon-jianhao subtract "></span>
			</div>
			
			<div class="name">
				<p class="tourist ">游客1</p>
				<p class="touristname">游客姓名</p>
				<span class="iconfont icon-dianhuaben phone-book"></span>
				
				
			</div>
			
			
			<div class="phone">
				 <p class="phone-number">手机号</p>
				 <p class="cell-phone-information ">
				 	请填写手机号
				 </p> 			
			</div>
			
			
			<div class="identity-information ">
				<p class="ID-card">身份证</p>
				<p class="ID-number ">请填写正确的身份信息</p>
				
			</div>
			
			<div class="hotline">
				<p class="hotline-phone">咨询电话</p>
			</div>
			
			<div class="foot">
				<div class="footone">
					<p class="product-price">产品价格￥<span class="footone-number">40</span></p>
				</div>
				<div class="foottwo">
					<p class="submit-order ">提交订单</p>
					
				</div>
				
				
			</div>
 	</div>
</template>

<script>
	export default {		
	}
</script>
<style>	
	body{
		background: #F2F2F2;
	}
.order-con{
	
	height:100%;
}
	
.order-header{
	width:100%;
	height:1rem;
	background: #00BCD4;
}
.order-header .order-com{
	float: left;
	left:0.8rem;
	padding-top: 0.4rem;
}
.order-header .title{
	float: left;
	padding-left:3rem;
	padding-top: 0.4rem;
	}
.order-header .register {
	float: right;
	padding-top:0.4rem ;
	color:#000000;
	padding-right:0.4rem;
}	
.infrom{
	width: 100%;
	height:0.5rem;
	background: #FFFFFF;
}
.infrom .time{
	float: left;
	padding-left: 0.5rem;
	padding-top: 0.1rem;
	font-size:0.3rem;
}
.infrom .identity{
	float: left;
	padding-left: 0.1rem;
	padding-top: 0.1rem;
	font-size:0.3rem;
}
.infrom .fares{
	
	float: right;
	padding-right: 0.3rem;
	padding-top: 0.1rem;
	font-size: 0.3rem;
	color:#ff9800;
	
}
.reservation{
	width: 100%;
	height:0.5rem;
	background: #FFFFFF;
	
}
.reservation .clock{
	width: 0.24rem;
	height: 0.24rem;
	float: left;
	padding-left: 0.3rem;
	padding-top:0.1rem;
}
.reservation .date{
	padding-top: 0.1rem;
	float: left;
	padding-left: 0.2rem;
}
.reservation .correct{
	width: 0.24rem;
	height: 0.24rem;
	float: left;
	padding-left: 0.3rem;
	padding-top:0.1rem;
}
.reservation .book{
	font-size:0.3rem;
	color:#00BCD4;
	float:right;
	padding-right:0.3rem;
	padding-top:0.1rem;
}
.anout{
	width: 100%;
	height:1rem;
	background: #FFFFFF;
	margin-top:0.2rem;
}
.anout  .quantity{
	float: left;
	padding-left: 0.2rem;
	font-size: 0.3rem;
	padding-top: 0.3rem;
	
}
.anout .stretch {
	float:left;
	padding-left:0.3rem;
	font-size:0.3rem;
	padding-top:0.3rem;
	color:#CCCCCC;
}
.name{
	width: 100%;
	height:1rem;
	background: #FFFFFF;
	margin-top:0.2rem;
}

.name .tourist {
	font-size:0.3rem;	
	float: left;
	padding-left:0.3rem;
	padding-top: 0.3rem;
}
.name .touristname{
	font-size:0.3rem;
	float: left;
	padding-left:2rem;
	padding-top: 0.3rem;
}

.phone{
	width: 100%;
	background: #FFFFFF;
	height: 1rem;
	
	
}
.phone .phone-number{
	float: left;
	padding-left: 0.3rem;
	font-size: 0.3rem;
	padding-top:0.3rem;
}
.phone .cell-phone-information{
	float: left;
	padding-left: 2rem;
	font-size:0.3rem;
	padding-top: 0.3rem;
}


.identity-information {
	width:100%;
	height: 1rem;
	background: #FFFFFF;
}
.identity-information .ID-card{
	float:left;
	padding-left: 0.3rem;
	font-size:0.3rem;
	padding-top:0.3rem;
}
.identity-information .ID-number{
	float: left;
	padding-left: 1.5rem;
	font-size:0.3rem;
	padding-top: 0.3rem;
}

.hotline{
	width: 100%;
	height: 1rem;
	background: #FFFFFF;
	
}
.hotline .hotline-phone{
	float: right;
	padding-right:0.5rem;
	font-size:0.3rem;
	color:#00BCD4;
	padding-top:0.3rem;
}

.foot{
	width: 100%;
	height: 1rem;
	background: #FFFFFF;
	position: fixed;
	bottom:0;
	
}
.foot .footone{
	float: left;
	font-size: 0.3rem;
	line-height: 1rem;
	color: orange;
	width: 40%;
	text-align: center;;
}
.foot .foottwo{
	float:right;
	line-height: 1rem;
	width:40%;
	text-align: center;
	color: white;
	background: #ff9800;
}
.footone-number{
	font-size: 0.6rem;
}
.plus{
	float:right;
	font-size:0.5rem ;
	padding-top:0.2rem;
}
.subtract{
	float: right;
	padding-right: 0.5rem;
	font-size:0.6rem ;
	padding-top:0.2rem;
}
.phone-book{
	float: right;
    padding-right: 0.3rem;
    font-size: 0.6rem;
    padding-top: 0.3rem;
}
</style>
		
		