
import axios from 'axios';

export default {
	state:{
		swiperInfo:[],
		recommendInfo:[],
		weekendInfo:[]
	},
	actions:{
		handleDataIndex( context ){
			axios.get('/static/index.json')
				.then( ( response ) => {
					if( response.status === 200 ){
					var data = response.data.data;
					context.commit("handleindex",data);
					context.commit("handleindex",data);
					context.commit("handleindex",data);
				}
			})

		}
	},
	mutations:{
		handleindex(state,data){
			state.swiperInfo = data.swiperInfo;
			state.recommendInfo = data.recommendInfo;
			state.weekendInfo = data.weekendInfo;
		},
		refreshInfo(state){
			state.recommendInfo.push(...state.recommendInfo)
		}
	},
	getters:{
		shouldGetData( state ){
			if(!state.swiperInfo.length
				&&!state.recommendInfo.length
				&&!state.weekendInfo.length){
				return true;
			}else{
				return false;
			}
	}
	}
}