import * as React from 'react'
import NextImage, { ImageProps, ImageLoader } from 'next/image'

const cloudflareImageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${process.env.IMAGE_WORKER_URL}?width=${width}&quality=${
    quality ?? 75
  }&image=https://codybrunner.com${src}`
}

const svgLoader: ImageLoader = ({ src }) => src

export const Image: React.FC<ImageProps> = props => {
  if (process.env.NODE_ENV === 'development') {
    return <NextImage unoptimized {...props} />
  }
  if (/svg/.test(props.src as string)) {
    return <NextImage {...props} loader={svgLoader} />
  }
  return <NextImage {...props} loader={cloudflareImageLoader} />
}
