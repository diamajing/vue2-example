/**
 * 拦截器模块
 * @description 发送和接收请求的提前处理
 * @dependence vue-resource
 * @author:岳(liuyue@travelsky.com)
 */

import Vue from 'vue';
import SessionUtil from 'src/utils/session';
// import LoginCommon from 'src/common/login';

export default function (App) {

	let count = 0;
	// 通用loading
	let loading = function (request, next) {
		count++;
		// App.$broadcast('show-loading');

		next(function () {
			count--;
			if (!count) {
				// App.$broadcast('hide-loading');
			}
		});
	};

	// 错误异常处理 2XX-成功,4XX-失败
	let error = function (request, next) {
		next(function (response) {
			if (!response.ok) {
				if (response.status === 401){
					// LoginCommon.cleanAppData();
					App.$store.state.loginmini.showLogin = true;
				} else {
					App.$notify.error({
						title: '提示',// response.status
						message: response.body.error
					});
				}
			}
		});
	};

	// 添加token认证
	let tokenAuth = (request, next) => {
		if (SessionUtil.get('baseAccountVO') && SessionUtil.get('baseAccountVO').token){
			// request.headers.token = `${SessionUtil.get('baseAccountVO').token}`;
			request.headers.set('token',`${SessionUtil.get('baseAccountVO').token}`);
		} else {
			request.headers.set('token',"null");
		}
		next();
	};

	// 禁止请求304缓存数据
	let noCache = function (request, next) {
		request.headers.set('if-modified-since', '0');
		next();
	};

	Vue.http.interceptors.push(loading);
	Vue.http.interceptors.push(error);
	Vue.http.interceptors.push(tokenAuth);
	Vue.http.interceptors.push(noCache);
}
