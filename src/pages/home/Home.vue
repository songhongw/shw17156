<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<home-category/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import CategoryComponent from "./Category";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"home-category":CategoryComponent
	}
}
</script>

<style>
</style>
