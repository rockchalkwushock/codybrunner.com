import { readFileSync } from 'fs';
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// MDX Plugins
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug';
import remarkValidateLinks from 'remark-validate-links/lib';

const options: Options = {
  theme: JSON.parse(readFileSync('./themes/aura-dark.json', 'utf-8'))
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [qwikCity({
      mdx: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'prepend', content: { type: 'element', tagName: 'span', properties: { className: ['icon', 'icon-link'] } } }],
          rehypeAccessibleEmojis,
          [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
          [rehypePrettyCode, options]
        ],
        remarkPlugins: [
          remarkValidateLinks
        ]
      },
      mdxPlugins: {
        rehypeAutolinkHeadings: false,
        rehypeSyntaxHighlight: false,
        remarkGfm: true,
      },
      trailingSlash: false,
    }), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
      open: true,
      port: 4000,
    },
    server: {
      open: true,
      port: 4000,
    }
  };
});
