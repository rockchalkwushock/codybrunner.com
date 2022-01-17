import { Maybe } from './helpers'

export interface Post {
  assetPath: Maybe<string>
  author: string
  canonicalUrl: string
  createdAt: string
  description: string
  featured?: boolean
  nextPost?: Maybe<string>
  previousPost?: Maybe<string>
  publishedAt?: Maybe<string>
  readingTime: string
  series?: Maybe<{
    entries: Array<string>
  }>
  slug: string
  source: string
  tags?: Array<string>
  title: string
  toc: Maybe<Array<{ id: string; text: string }>>
  updatedAt?: Maybe<string>
  words: number
}
