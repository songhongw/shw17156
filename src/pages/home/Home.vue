<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<listitem-content/>
 		<list-hotcommend/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import CommendComponent from "./hotcommend";
import ListItemComponent from "./ListItem";
export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"list-hotcommend": CommendComponent,
		"listitem-content":ListItemComponent
	}
}
</script>

<style>
</style>
