<template>
	<div>
		<City-header @change="changed"/>
		<City-search />
		<City-domestic  :domesticInfo="domesticInfo" :data="getData"/>
		<City-foreign   :foreignInfo="foreignInfo" :data="!getData"/>
	</div>
</template>

<script>
import Header from "./components/header.vue"
import Search from "./components/search.vue"
import Domestic from "./components/domestic/Domestic.vue"
import Foreign from "./components/foreign/Foreign.vue"

	export default{
		data(){
			return{
				getData:true
			}
		},
		components:{
			"City-header":Header,
			"City-domestic":Domestic,
			"City-foreign":Foreign,
			"City-search":Search
		},
		methods:{
			changed(e){
				this.getData=e;
				
			}
		},
		computed:{
			domesticInfo(){
				return this.$store.state.city.domesticInfo;
			},
			foreignInfo(){
				return this.$store.state.city.foreignInfo;
			}
		},
		mounted(){
			this.$store.dispatch("handleCityData");
		}
		
	}
</script>

<style>
	
</style>