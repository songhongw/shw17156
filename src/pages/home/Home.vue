<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<list-hotcommend/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import CommendComponent from "./hotcommend";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"list-hotcommend": CommendComponent
	}
}
</script>

<style>
</style>
