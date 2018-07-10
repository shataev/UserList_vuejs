module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        //'@vue/prettier'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		"vue/script-indent": ["error", 'tab', {
			"baseIndent": 1,
			"switchCase": 0,
			"ignores": []
		}]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};