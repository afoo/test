module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			impliedStrict: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
		"prettier/react",
		"prettier/@typescript-eslint",
	],
	rules: {
		"import/no-extraneous-dependencies": ["error", { peerDependencies: false, devDependencies: false }],
		"import/order": ["error", { "newlines-between": "always", alphabetize: { order: "asc" } }],
		"react/prop-types": "off",
	},
	overrides: [
		{
			files: ["*.js"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-return": "off",
				"@typescript-eslint/require-await": "off",
				"@typescript-eslint/restrict-template-expressions": "off",
			},
		},
		{
			files: ["jest.config.js", "webpack.config.js", "**/scripts/*", "**/.storybook/*", "*.stories.tsx", "*.test.tsx"],
			rules: {
				"import/no-extraneous-dependencies": ["error", { peerDependencies: false }],
			},
		},
	],
};
