/**
 * 路由配置表
 */

export default {
	routes:[
		{
			path: '/', // 首页
			redirect: '/home'
		},
		{
			name: 'home', // 登录页
			path: '/home',
			component:function(resolve){
				require(['../pages/index.vue'], resolve);
			}
		},
		{
			name: 'dashboard',
			path: '/dashboard',
			component:function(resolve){
				require(['../pages/dashboard.vue'], resolve);
			}
		},
		{
			path: '*', // 其他页面，强制跳转到登录页面
			redirect: '/home'
		}
	]
};
