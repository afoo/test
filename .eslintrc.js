module.exports = {
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json", "./tsconfig.eslint.json"],
	},
	extends: [require.resolve("./.eslintrc-base.js")],
};
