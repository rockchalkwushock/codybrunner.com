/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly VITE_ENABLE_BLOG: 'true' | 'false'
	readonly VITE_ENABLE_I18N: 'true' | 'false'
	readonly VITE_FATHOM_SITE: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
