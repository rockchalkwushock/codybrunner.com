/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly ENABLE_I18N: 'true' | 'false'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
