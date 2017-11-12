<template>
	<div>
		<Domestic-list :domesticInfo="domesticInfo"  />
	</div>
</template>

<script>

import List from "./components/list"


	export default{
		props:['domesticInfo'],
		components:{
			"Domestic-list":List
		},
		methods:{
		}
		
	}
</script>

<style>
	
</style>