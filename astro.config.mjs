import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [react(), tailwind(), sitemap()],
  server: {
    open: true,
    port: 3000,
  },
  site: 'https://codybrunner.com',
})
