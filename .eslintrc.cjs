module.exports = {
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	extends: ['@atomazing/eslint-config'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: {
				project: './tsconfig.json',
			},
		},
	},
}
