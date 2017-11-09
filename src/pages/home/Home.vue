<template>
	<div>
 		<index-header />
 		<index-swiper :swiperInfo="swiperInfo" />
 		<index-category />
 		<index-iconText />
 		<index-hotcommend :recommendInfo="recommendInfo" />
 		<index-weekList :weekendInfo="weekendInfo" />
 	</div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Category from "./components/Category";
import HotCommend from "./components/hotcommend";
import IconText from "./components/ListItem";
import Weekend from "./components/weekList";


export default {
	components: {
		"index-header": Header,
		"index-swiper": Swiper,
		"index-category":Category,
		"index-hotcommend": HotCommend,
		"index-iconText":IconText,
		"index-weekList": Weekend
	},
	
	computed:{
		swiperInfo(){
			return	this.$store.state.home.swiperInfo;
		},
		recommendInfo(){
			return this.$store.state.home.recommendInfo;
		},
		weekendInfo(){
			return this.$store.state.home.weekendInfo;
		}
	},
	mounted(){
		if( this.$store.getters.shouldGetData ){
			this.$store.dispatch("handleDataIndex")
		}
	}
}
</script>

<style>
</style>
