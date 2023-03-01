/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
	readonly PUBLIC_FATHOM_SITE_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
