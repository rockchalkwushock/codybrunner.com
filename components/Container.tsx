import * as React from 'react'

interface Props {
  as?: string
  className?: string
}

export const Container: React.FC<Props> = ({
  as = 'div',
  children,
  className,
}) => {
  const Element = { as }
  return (
    // FIXME
    // @ts-ignore
    <Element.as
      className={`container max-w-3xl mx-auto lg:max-w-5xl ${className}`}
    >
      {children}
    </Element.as>
  )
}
