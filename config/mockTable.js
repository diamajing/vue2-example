
var _ = require("lodash");
var important = require("./mock/important");

/**
 * mockType
 * local : 本地
 * proxy : 代理
 */

module.exports = {
	mockType : 'proxy',
	table :  _.extend({}),
	important : important
};
