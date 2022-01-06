import { AiOutlineFilePdf as Resume } from 'react-icons/ai'
import {
  FiCheckCircle as CheckCircle,
  FiCopy as Copy,
  FiGithub as GitHub,
  FiInstagram as Instagram,
  FiLinkedin as LinkedIn,
  FiMoon as Moon,
  FiSun as Sun,
  FiTwitter as Twitter,
  FiXCircle as XCircle,
} from 'react-icons/fi'
import { HiOutlineArrowNarrowRight as ArrowRight } from 'react-icons/hi'
import {
  RiHashtag as Hashtag,
  RiRssLine as Rss,
  RiShareLine as Share,
} from 'react-icons/ri'
// HiOutlineArrowNarrowRight
type IconName =
  | 'arrowRight'
  | 'checkCircle'
  | 'copy'
  | 'github'
  | 'hashtag'
  | 'instagram'
  | 'linkedin'
  | 'moon'
  | 'resume'
  | 'rss'
  | 'share'
  | 'sun'
  | 'twitter'
  | 'xCircle'

interface Props extends React.SVGAttributes<SVGElement> {
  name: IconName
}

const iconMap = {
  arrowRight: ArrowRight,
  checkCircle: CheckCircle,
  copy: Copy,
  github: GitHub,
  hashtag: Hashtag,
  instagram: Instagram,
  linkedin: LinkedIn,
  moon: Moon,
  resume: Resume,
  rss: Rss,
  share: Share,
  sun: Sun,
  twitter: Twitter,
  xCircle: XCircle,
}

export const Icon: React.FC<Props> = ({ name, ...rest }) => {
  const Component = iconMap[name]
  return <Component {...rest} />
}
