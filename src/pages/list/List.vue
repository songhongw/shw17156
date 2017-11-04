<template>
	<div>
 		<header-content />
 		<search-content />
	</div>
</template>

<script>
	import headerContent from "./Header";
	import searchContent from "./searchContent";
	export default {
		components:{
			"header-content":headerContent,
			"search-content":searchContent
		}
	}
</script>

<style></style>
