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
    | 'tags'
    | 'title'
    | 'updatedAt'
  > {}

export async function getMDXBySlug(
  type: 'about' | 'blog' | 'my-gear',
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
    xdmOptions(options, _frontmatter) {
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

  const { text, words } = readingTime(code)

  return {
    author: constants.author,
    assetPath: frontmatter.assetPath ?? null,
    canonicalUrl:
      source.slug === 'about' || source.slug === 'my-gear'
        ? `${constants.url}/${source.slug}`
        : `${constants.url}/blog/${source.slug}`,
    createdAt: toISO8601(frontmatter.createdAt),
    description: frontmatter.description,
    featured: !!frontmatter.featured,
    publishedAt: frontmatter.publishedAt
      ? toISO8601(frontmatter.publishedAt)
      : null,
    readingTime: text,
    slug: source.slug,
    source: code,
    tags: frontmatter.tags
      ? frontmatter.tags.map(t => t.toLocaleLowerCase())
      : undefined,
    title: frontmatter.title,
    updatedAt: frontmatter.updatedAt ? toISO8601(frontmatter.updatedAt) : null,
    words,
  }
}
