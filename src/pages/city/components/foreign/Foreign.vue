<template>
	<div>
		<Foreign-aside :foreignInfo="foreignInfo"/>
		<Foreign-list :foreignInfo="foreignInfo"  />
		
	</div>
</template>

<script>

import List from "./components/list"
import Aside from "./components/aside"

	export default{
		props:['foreignInfo'],
		components:{
			"Foreign-aside":Aside,
			"Foreign-list":List
		}
	}
</script>

<style>

</style>