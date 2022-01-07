import * as React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

import { Post } from '@interfaces/post'
import { constants } from '@utils/constants'

interface Props
  extends Pick<Post, 'canonicalUrl' | 'description' | 'tags' | 'title'> {}

export const Share: React.FC<Props> = ({
  canonicalUrl,
  description,
  tags,
  title,
}) => {
  return (
    <div className="grid grid-flow-col-dense">
      <FacebookShareButton
        className="transform rounded-full group hover:scale-90 hover:animate-wiggle"
        quote={description}
        url={canonicalUrl}
      >
        <FacebookIcon
          className="rounded-full shadow-md group-hover:shadow-none"
          round
          size="32"
        />
      </FacebookShareButton>
      <LinkedinShareButton
        className="transform group hover:scale-90 hover:animate-wiggle"
        source={constants.url}
        summary={description}
        title={title}
        url={canonicalUrl}
      >
        <LinkedinIcon
          className="rounded-full shadow-md group-hover:shadow-none"
          round
          size="32"
        />
      </LinkedinShareButton>
      <RedditShareButton
        className="transform group hover:scale-90 hover:animate-wiggle"
        title={title}
        url={canonicalUrl}
      >
        <RedditIcon
          className="rounded-full shadow-md group-hover:shadow-none"
          round
          size="32"
        />
      </RedditShareButton>
      <TelegramShareButton
        className="transform group hover:scale-90 hover:animate-wiggle"
        title={title}
        url={canonicalUrl}
      >
        <TelegramIcon
          className="rounded-full shadow-md group-hover:shadow-none"
          round
          size="32"
        />
      </TelegramShareButton>
      <TwitterShareButton
        className="transform group hover:scale-90 hover:animate-wiggle"
        hashtags={tags ? tags.map(t => t) : undefined}
        title={title}
        url={canonicalUrl}
      >
        <TwitterIcon
          className="rounded-full shadow-md group-hover:shadow-none"
          round
          size="32"
        />
      </TwitterShareButton>
      <WhatsappShareButton
        className="transform group hover:scale-90 hover:animate-wiggle"
        title={title}
        url={canonicalUrl}
      >
        <WhatsappIcon
          className="rounded-full shadow-md group-hover:shadow-none"
          round
          size="32"
        />
      </WhatsappShareButton>
    </div>
  )
}
