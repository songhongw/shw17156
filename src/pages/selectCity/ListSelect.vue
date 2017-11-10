<template>
	<div>
 		<home-header/>
 		<!--<internal-city/>-->
 		<!--<abroad-city/>-->
 		
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
//import InternalComponent from "./internal";
//import AbroadComponent from "./abroad";

export default {
	components: {
		"home-header": HeaderComponent
//		"internal-city": InternalComponent,
//		"abroad-city": AbroadComponent
	}
}
</script>

<style>
</style>
