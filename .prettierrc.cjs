module.exports = {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	jsxSingleQuote: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	plugins: [require.resolve('prettier-plugin-astro')],
	printWidth: 80,
	quoteProps: 'as-needed',
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
}
