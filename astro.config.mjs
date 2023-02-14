import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
  ],
  site: 'https://codybrunner.com',
  trailingSlash: 'always',
})
