import axios from "axios"

export default {
	state: {
		swiperInfo: [],
		recommendInfo: [],
		hotcityInfo: [],
		hotrouteInfo: [],
		ticketInfo: []
	},
	actions: {
		getIndexInfo(context) {
			axios.get('/static/daytour.json')
			.then((response) => {
				if(response.status === 200) {
					const {data} = response.data;
					context.commit("changeIndexInfo", data)
				}
			})
		}
	},
	mutations: {
		changeIndexInfo(state, data) {
			state.swiperInfo = data.swiperInfo;
			state.recommendInfo = data.recommendInfo;
			state.hotcityInfo = data.hotcityInfo;
			state.hotrouteInfo = data.hotrouteInfo;
			state.ticketInfo = data.ticketInfo;
		}
	},
	getters: {
		shouldGetData(state) {
			if(!state.swiperInfo.length &&
			   !state.recommendInfo.length &&
			   !state.hotcityInfo.length &&
			   !state.hotrouteInfo.length &&
			   !state.ticketInfo.length ){
			   	return true
			}else{
				return false
			}
		}
	}
}
