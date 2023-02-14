module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
		'plugin:mdx/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: [
 		'node_modules/',
 		'dist/',
    'astro.config.mjs',
 		'package.json',
 		'tsconfig.json',
 	],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
 		project: './tsconfig.json',
 		sourceType: 'module',
  },
  root: true,
  rules: {
  },
  settings: {
 		packageManager: 'pnpm',
 		tailwindcss: {
 			callees: ['classnames', 'clsx', 'ctl'],
 			classRegex: '^class(Name)?$',
 			config: './tailwind.config.cjs',
 			cssFiles: [
 				'**/*.css',
 				'!**/node_modules',
 				'!**/.*',
 				'!**/dist',
 				'!**/build',
 			],
 			cssFilesRefreshRate: 5_000,
 			removeDuplicates: true,
 			skipClassAttribute: false,
 			tags: [],
 			whitelist: [],
 		},
 	},
}
