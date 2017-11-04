<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<weekList/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import weekListComponent from "./weekList";


export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"weekList": weekListComponent
	}
}
</script>

<style>
</style>
