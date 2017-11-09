import Vue from 'vue'
import Vuex from 'vuex'
import daytour from "../pages/daytour/module.js"

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		daytour: daytour
	}
})
