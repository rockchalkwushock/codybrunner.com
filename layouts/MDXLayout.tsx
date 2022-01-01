import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Highlight, {
  Language,
  Prism,
} from '@rockchalkwushock/prism-react-renderer'
// @ts-ignore
import theme from '@rockchalkwushock/prism-react-renderer/themes/nightOwl'

import { Icon } from '@components/Icon'
import { Image } from '@components/Image'
import { PostCard, PostLink } from '@components/PostComponents'
import { Tag } from '@components/Tag'
import { Post } from '@interfaces/post'
import { Maybe } from '@interfaces/helpers'
import { formatDateTime } from '@utils/dateTime'

interface Props extends Post {
  relatedPosts?: Array<Post>
}

export const MDXLayout: React.FC<Props> = ({ source, ...post }) => {
  const MDXContent = React.useMemo(() => getMDXComponent(source), [source])
  const [mounted, setMounted] = React.useState(false)
  const [copyStatus, setCopyStatus] = React.useState<
    'inactive' | 'copied' | 'failed'
  >('inactive')
  const ref = React.useRef<Maybe<string>>(null)

  React.useEffect(() => {
    if (!mounted) {
      setMounted(true)
      return
    }
  }, [mounted])

  React.useEffect(() => {
    if (copyStatus === 'inactive') {
      return
    }

    const timeoutId = setTimeout(() => setCopyStatus('inactive'), 2500)

    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copyStatus])

  const getTextToCopy = (text: string) => {
    ref.current = text
  }

  const handleCopy = React.useCallback(() => {
    if (ref && ref.current) {
      navigator.clipboard.writeText(ref.current).then(
        () => setCopyStatus('copied'),
        () => setCopyStatus('failed')
      )
    }
  }, [ref])

  return (
    <>
      <div className="flex flex-col space-y-8 md:rounded-lg md:shadow-xl dark:md:rounded-none dark:md:shadow-none">
        <header className="flex flex-col w-full px-8 space-y-4 rounded-t-lg">
          <h1 className="text-4xl font-medium leading-tight text-center text-indigo-700 dark:text-stone-100">
            {post.title}
          </h1>
          <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between lg:items-start">
            <div className="flex items-center space-x-2">
              <div className="relative bg-white border border-indigo-600 rounded-full dark:border-none h-9 w-9 lg:hidden">
                <Image
                  alt="Cody Brunner Avatar"
                  className="rounded-full"
                  layout="fill"
                  objectFit="contain"
                  src="/images/me.jpg"
                />
              </div>
              <div className="flex flex-col">
                <p>
                  {`${post.author} / ${formatDateTime(
                    post.publishedAt || post.createdAt,
                    'full-date-localized'
                  )}`}
                </p>
                {post.updatedAt && (
                  <span>
                    Updated:{' '}
                    {formatDateTime(post.updatedAt, 'full-date-localized')}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <p className="">{post.readingTime}</p>
            </div>
          </div>
        </header>
        <hr className="mx-8 border-indigo-500 dark:border-pink-500" />
        <article className="tracking-wide prose prose-lg text-justify md:px-8 md:pb-8 prose-slate dark:prose-invert">
          <MDXContent
            components={{
              div: ({ children, className }) => {
                return className === 'rehype-code-title' ? (
                  <div
                    className={`${className} flex items-center justify-between`}
                  >
                    {children}
                    <div className="p-2 transition duration-150 rounded-full cursor-pointer group">
                      {copyStatus === 'inactive' && (
                        <Icon
                          className="w-6 h-6 text-indigo-500 group-hover:text-yellow-300"
                          name="copy"
                          onClick={handleCopy}
                        />
                      )}
                      {copyStatus === 'copied' && (
                        <Icon
                          className="w-6 h-6 text-green-500"
                          name="checkCircle"
                        />
                      )}
                      {copyStatus === 'failed' && (
                        <Icon className="w-6 h-6 text-red-500" name="xCircle" />
                      )}
                    </div>
                  </div>
                ) : (
                  <div>{children}</div>
                )
              },
              // @ts-ignore
              pre: ({ children: { props } }) => {
                getTextToCopy(props.children.trim())
                return (
                  <Highlight
                    code={props.children.trim()}
                    language={
                      props.className &&
                      (props.className.replace('language-', '') as Language)
                    }
                    Prism={Prism}
                    theme={theme}
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => {
                      return (
                        <pre className={className} style={style}>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                              <span className="inline-block w-8 select-none opacity-30">
                                {i + 1}
                              </span>
                              {line.map((token, key) => (
                                <span
                                  key={key}
                                  {...getTokenProps({ token, key })}
                                />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )
                    }}
                  </Highlight>
                )
              },
            }}
          />
        </article>
      </div>
      {!post.slug.includes('about') && post.tags && (
        <section className="flex flex-col space-y-8">
          <hr className="w-full border-indigo-500 dark:border-pink-500" />
          <div className="flex items-center justify-between">
            <ul className="flex space-x-3">
              {post.tags.map((tag, i) => (
                <Tag key={`tag-${tag}-${i}`} tag={tag} />
              ))}
            </ul>

            <Icon
              className="w-7 h-7 fill-indigo-500 hover:fill-pink-500"
              name="share"
              onClick={() => navigator.clipboard.writeText(post.canonicalUrl)}
            />
          </div>
          <hr className="w-full border-indigo-500 dark:border-pink-500" />
        </section>
      )}
      <section
        className={`flex ${
          post.previousPost && post.nextPost
            ? 'justify-between'
            : post.previousPost
            ? 'justify-start'
            : 'justify-end'
        }`}
      >
        {post.previousPost && (
          <PostLink
            className="flex items-center justify-center w-32 h-12 text-xl font-medium text-center transition duration-200 transform bg-indigo-200 rounded-lg shadow-lg md:w-40 dark:bg-indigo-500 dark:hover:bg-indigo-600 hover:bg-indigo-500 hover:text-white hover:shadow-none hover:scale-95"
            slug={post.previousPost}
          >
            Previous
          </PostLink>
        )}
        {post.nextPost && (
          <PostLink
            className="flex items-center justify-center w-32 h-12 text-xl font-medium text-center transition duration-200 transform bg-indigo-200 rounded-lg shadow-lg md:w-40 dark:bg-indigo-500 dark:hover:bg-indigo-600 hover:bg-indigo-500 hover:text-white hover:shadow-none hover:scale-95"
            slug={post.nextPost}
          >
            <span>Next</span>
          </PostLink>
        )}
      </section>
      {!!post.relatedPosts && !!post.relatedPosts.length && (
        <section className="flex flex-col space-y-8">
          <h1 className="text-3xl font-semibold text-center underline">
            Related Posts
          </h1>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {post.relatedPosts.map(post => (
              <PostCard key={post.slug} {...post} />
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
