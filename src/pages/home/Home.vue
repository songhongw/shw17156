<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<listitem-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ListItemComponent from "./ListItem";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"listitem-content":ListItemComponent
	}
}
</script>

<style>
</style>
