
import Vue from "vue"
import Vuex from "vuex"
import home from "../pages/home/module.js"
import city from "../pages/city/module.js"
import daytour from "../pages/daytour/module.js"
Vue.use( Vuex );

export default new Vuex.Store({
	modules:{
		home:home,
		city:city,
		daytour: daytour
	}
});




