import {
  FiCheckCircle as CheckCircle,
  FiCopy as Copy,
  FiMoon as Moon,
  FiSun as Sun,
  FiXCircle as XCircle,
} from 'react-icons/fi'
import { RiHashtag as Hashtag, RiShareLine as Share } from 'react-icons/ri'

type IconName =
  | 'checkCircle'
  | 'copy'
  | 'hashtag'
  | 'moon'
  | 'share'
  | 'sun'
  | 'xCircle'

interface Props extends React.SVGAttributes<SVGElement> {
  name: IconName
}

const iconMap = {
  checkCircle: CheckCircle,
  copy: Copy,
  hashtag: Hashtag,
  moon: Moon,
  share: Share,
  sun: Sun,
  xCircle: XCircle,
}

export const Icon: React.FC<Props> = ({ name, ...rest }) => {
  const Component = iconMap[name]
  return <Component {...rest} />
}
