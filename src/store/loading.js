/**
 * Created by liuyue on 2016/12/28.
 */

export default {
	state:{
		showLoading:false,
		loadingSwitch:true
	},
	mutations:{
		showLoading:function(state){
			state.showLoading = true;
		},
		hideLoading:function(state){
			state.showLoading = false;
		},
		openLoading:function(state){
			state.loadingSwitch = true;
		},
		closeLoading:function(state){
			state.loadingSwitch = false;
		}
	},
	getters:{},
	actions:{},
};
