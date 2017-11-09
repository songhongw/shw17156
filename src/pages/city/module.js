import axios from "axios"

export default {
	state:{
		domesticInfo:[],
		foreignInfo:[]
	},
	actions:{
		handleCityData( context ){
			axios.get("./static/city.json")
			.then(( response ) => {
				if( response.status===200 ){
					var data = response.data.data;
					context.commit("handleCity",data);
				}
			})
		}
	},
	mutations:{
		handleCity( state,data ){
			state.domesticInfo = data.domesticInfo;
			state.foreignInfo = data.foreignInfo;
		}
	}
}
