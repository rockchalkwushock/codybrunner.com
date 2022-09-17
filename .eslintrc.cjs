module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:astro/recommended',
		'plugin:jsx-a11y/strict',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
	],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro'],
				parser: '@typescript-eslint/parser',
			},
			rules: {},
		},
	],
	root: true,
	rules: {
		'tailwindcss/no-custom-classname': 'off',
	},
}
