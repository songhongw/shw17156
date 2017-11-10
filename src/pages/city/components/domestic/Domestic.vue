<template>
	<div>
		<Domestic-aside  :domesticInfo="domesticInfo" @change="handleGetDistance()"/>
		<Domestic-list :domesticInfo="domesticInfo"  />
	</div>
</template>

<script>

import List from "./components/list"
import Aside from "./components/aside"

	export default{
		props:['domesticInfo'],
		components:{
			"Domestic-aside":Aside,
			"Domestic-list":List
		},
		methods:{
			handleGetDistance(){
//				alert(data);
			}
		}
		
	}
</script>

<style>
	
</style>