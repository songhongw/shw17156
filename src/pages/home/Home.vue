<template>
	<div>
 		<index-header/>
 		<index-swiper :swiperInfo="swiperInfo"/>
 		<index-category/>
 		<index-hotcommend/>
 		<index-iconText/>
 		<index-weekList/>
 	</div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Category from "./components/Category";
import HotCommend from "./components/hotcommend";
import IconText from "./components/ListItem";
import Weekend from "./components/weekList";
import axios from 'axios';


export default {
	data(){
		return{
			swiperInfo:[]
		}
	},
	components: {
		"index-header": Header,
		"index-swiper": Swiper,
		"index-category":Category,
		"index-hotcommend": HotCommend,
		"index-iconText":IconText,
		"index-weekList": Weekend
	},
	methods:{
		getDataSwiper(){
			axios.get('/static/index.json')
			.then( this.hanDleSwiperSucc.bind( this ) )
			.catch( this.hanDleSwiperError( this ) );
		},
		hanDleSwiperSucc( response ){
			if( response.status === 200 ){
				var data = response.data.data;
				console.log(response.data.data.swiperInfo);
				this.swiperInfo = data.swiperInfo;
			}
		},
		hanDleSwiperError( error ){
		}
	},
	mounted(){
		this.getDataSwiper();
	}
}
</script>

<style>
</style>
