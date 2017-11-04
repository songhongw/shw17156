<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<home-category/>
 		<listitem-content/>
 		<list-hotcommend/>
 		<weekList/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";

import CategoryComponent from "./Category";

import CommendComponent from "./hotcommend";
import ListItemComponent from "./ListItem";
import weekListComponent from "./weekList";


export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,

		"home-category":CategoryComponent,

		"list-hotcommend": CommendComponent,
		"listitem-content":ListItemComponent,
		"weekList": weekListComponent

	}
}
</script>

<style>
</style>
