<template>
	<div>
		<City-header />
		<City-search />
		<City-domestic  :domesticInfo="domesticInfo"/>
		<City-foreign   :foreignInfo="foreignInfo" />
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
				getData:""
			}
		},
		
		components:{
			"City-header":Header,
			"City-domestic":Domestic,
			"City-foreign":Foreign,
			"City-search":Search
		},
		methods:{
//			changes(e){
//				this.getData= e ;
//				console.log(e);
//			}
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