<template>
	<div>
		<Foreign-list :foreignInfo="foreignInfo"  />
		
	</div>
</template>

<script>

import List from "./components/list"

	export default{
		props:['foreignInfo'],
		components:{
			"Foreign-list":List
		}
	}
</script>

<style>

</style>