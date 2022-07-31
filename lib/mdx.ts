import { readFile } from 'fs/promises'
import { join } from 'path'
import { bundleMDX } from 'mdx-bundler'

import { Post } from '@interfaces/post'
import { constants } from '@utils/constants'
import { toISO8601 } from '@utils/dateTime'

const root = process.cwd()

interface MDXSource {
  file: string
  slug: string
}

interface RawFrontMatter
  extends Pick<
    Post,
    | 'assetPath'
    | 'createdAt'
    | 'description'
    | 'featured'
    | 'publishedAt'
    | 'series'
    | 'tags'
    | 'title'
    | 'updatedAt'
  > {}

export async function getMDXBySlug(
  type: 'about' | 'blog',
  slug: string
): Promise<MDXSource> {
  const file =
    type === 'blog' && slug
      ? await readFile(join(root, 'data', type, `${slug}.mdx`), 'utf8')
      : await readFile(join(root, 'data', `${type}.mdx`), 'utf8')

  return { file, slug }
}

export async function prepareMDX(source: MDXSource): Promise<Post> {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      root,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      root,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const { default: readingTime } = await import('reading-time')
  const { default: rehypeAutoLink } = await import('rehype-autolink-headings')
  const { default: rehypeCodeTitles } = await import('rehype-code-titles')
  const { default: rehypeSlug } = await import('rehype-slug')
  const { default: remarkExternalLink } = await import('remark-external-links')
  const { default: remarkGfm } = await import('remark-gfm')
  const { code, frontmatter } = await bundleMDX<RawFrontMatter>({
    source: source.file,
    mdxOptions(options, _frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),

        remarkGfm,
        remarkExternalLink,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutoLink, { behavior: 'wrap' }],
        rehypeCodeTitles,
      ]
      return options
    },
  })

  // FIXME: This is jankity af! Can be consolidated and written much better.
  const toc = source.file
    .split('\n')
    .filter(line => line.match(/^###*\s/))
    .map(raw => ({
      // Formats the heading text to be
      // ex: Why Is JavaScript So Hard?
      // ex: why-is-javascript-so-hard
      id: raw
        // Strips out md headers tags
        .replace(/^###*\s/, '')
        .toLowerCase()
        // Strips whitespace and replaces with -
        .replace(/\s/g, '-')
        // Strips Punctuation
        .replace(/[.,\/#!?$@%'\^&\*;:{}=\_`~()]/g, '')
        // Strips Emojis
        .replace(
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
          ''
        )
        .trim(),
      text: raw.replace(/^###*\s/, ''),
    }))

  const { text, words } = readingTime(code)

  return {
    author: constants.author,
    assetPath: frontmatter.assetPath ?? null,
    canonicalUrl:
      source.slug === 'about'
        ? `${constants.url}/${source.slug}`
        : `${constants.url}/blog/${source.slug}`,
    createdAt: toISO8601(frontmatter.createdAt),
    description: frontmatter.description,
    featured: !!frontmatter.featured,
    publishedAt: frontmatter.publishedAt
      ? toISO8601(frontmatter.publishedAt)
      : null,
    readingTime: text,
    series: frontmatter.series ?? null,
    slug: source.slug,
    source: code,
    tags: frontmatter.tags
      ? frontmatter.tags.map(t => t.toLocaleLowerCase())
      : undefined,
    title: frontmatter.title,
    toc: toc.length > 0 ? toc : null,
    updatedAt: frontmatter.updatedAt ? toISO8601(frontmatter.updatedAt) : null,
    words,
  }
}
