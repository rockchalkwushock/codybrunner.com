/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly VITE_ENABLE_BLOG: 'true' | 'false'
	readonly VITE_ENABLE_I18N: 'true' | 'false'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
