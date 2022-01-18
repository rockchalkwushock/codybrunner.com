import * as React from 'react'
import Highlight, {
  Language,
  Prism,
} from '@rockchalkwushock/prism-react-renderer'
// @ts-ignore
import theme from '@rockchalkwushock/prism-react-renderer/themes/nightOwl'

import { Icon } from '@components/Icon'
import { useCopyToClipboard } from '@hooks/useCopyToClipboard'

interface Props {
  code: string
  language: string
}

export const CodeBlock: React.FC<Props> = ({ code, language }) => {
  const [status, copy] = useCopyToClipboard(code)
  return (
    <Highlight
      code={code}
      language={language as Language}
      Prism={Prism}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <>
            <pre
              className={`${className} group relative shadow-md shadow-indigo-100 dark:shadow-aura-purple-fading`}
              style={style}
            >
              {status === 'inactive' ? (
                <Icon
                  className="absolute w-6 h-6 transition duration-200 ease-in-out opacity-0 cursor-pointer right-4 group-hover:opacity-100 group-hover:text-yellow-300"
                  name="copy"
                  onClick={copy}
                />
              ) : status === 'copied' ? (
                <Icon
                  className="absolute w-6 h-6 text-green-500 right-4"
                  name="checkCircle"
                />
              ) : (
                <Icon
                  className="absolute w-6 h-6 text-red-500 right-4"
                  name="xCircle"
                />
              )}
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <span className="inline-block w-8 select-none opacity-30">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </>
        )
      }}
    </Highlight>
  )
}
