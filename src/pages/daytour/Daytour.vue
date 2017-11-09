<template>
	<div>
 		<daytour-header />
 		<daytour-swiper />
 		<daytour-icon />
 		<daytour-travelRecommend />
 		<daytour-hotcity />
 		<daytour-hotroute />
 		<daytour-ticket />
	</div>
</template>

<script>

import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconComponent from "./components/Icon";
import TravelRecommendComponent from "./components/TravelRecommed";
import HotCityComponent from "./components/HotCity";
import HotRouteComponent from "./components/HotRoute";
import TicketComponent from "./components/AdmissionTicket";

export default {
	
	components: {
		"daytour-header": HeaderComponent,
		"daytour-swiper": SwiperComponent,
		"daytour-icon": IconComponent,
		"daytour-travelRecommend": TravelRecommendComponent,
		"daytour-hotcity": HotCityComponent,
		"daytour-hotroute": HotRouteComponent,
		"daytour-ticket": TicketComponent
	},
	
	mounted() {
		if(this.$store.getters.shouldGetData) {
			this.$store.dispatch("getIndexInfo");
		}
		
	}
}
</script>

<style>
	body,html{
		background: #f2f2f2;
	}
</style>
