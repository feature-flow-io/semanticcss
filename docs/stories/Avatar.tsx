import { joinClasses } from '../utils'

interface AvatarProps {
  src: string
  alt: string
  size: number
  circle?: boolean
}

export const Avatar = ({ size, circle, ...props }: AvatarProps) => {
  return <img className={joinClasses(['avatar', `avatar--${size}`, circle && 'avatar--circle'])} {...props} />
}
