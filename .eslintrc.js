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
	extends: [require.resolve("@ng42/typescript/.eslintrc.js")],
	rules: {
		quotes: [
			"error",
			"double",
		],
		semi: [
			"error",
			"always",
		],
		"@typescript-eslint/no-explicit-any": [
			"off",
		],
	},
};