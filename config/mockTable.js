
var _ = require("lodash");
var important = require("./mock/important");
// var proxy = require("./mock/proxy");

/**
 * mockType
 * local : 本地
 * proxy : 代理
 */

module.exports = {
	mockType : 'proxy',
	table :  _.extend({
		// proxy
	}),
	important : important
};
