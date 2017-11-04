<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<listitem-content/>
 		<list-hotcommend/>
 		<weekList/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import CommendComponent from "./hotcommend";
import ListItemComponent from "./ListItem";
import weekListComponent from "./weekList";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"list-hotcommend": CommendComponent,
		"listitem-content":ListItemComponent,
		"weekList": weekListComponent
		
	}
}
</script>

<style>
</style>
