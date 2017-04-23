module.exports = function (vm) {
	let res = vm.$resource("https://api.douban.com/v2/movie/top250");
	return {
		get: function (params) { // count=10
			let param = params || {};
			return res.get(param).then(function (response) {
				return response.json();
			});
		}
	};
};
