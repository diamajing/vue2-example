module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	'env': {
		'browser': true,
		'jquery': true
	},
	// add your custom rules here
	'rules': {
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			'js': 'never',
			'vue': 'never'
		}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		"indent": 'off',
		"quotes": 'off',
		"key-spacing": 'off',
		"quote-props": 'off',
		"comma-spacing": 'off',
		"object-curly-spacing": 'off',
		"space-infix-ops": 'off',
		"prefer-const": 'off',
		"no-console": 'off',
		"max-len": 'off',
		"comma-dangle": 'off',
		"func-names": 'off',
		"space-before-blocks": 'off',
		"object-shorthand": 'off',
		"prefer-arrow-callback": 'off',
		"space-before-function-paren": 'off',
		"global-require": 'off',
		"padded-blocks": 'off',
		"brace-style": 'off',
		"consistent-return": 'off',
		"no-param-reassign": 'off',
		"no-unused-expressions": 'off',
		"no-unused-vars": 'off',
		"no-unneeded-ternary": 'off',
		"no-tabs": 'off',
		"import/no-dynamic-require": 'off',
		"no-plusplus": 'off',
		"spaced-comment": 'off'
	}
};
