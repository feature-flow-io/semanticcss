import { joinClasses } from '../utils'

interface AvatarProps {
  src: string
  alt: string
  size: number
  circle?: boolean
}

export const Avatar = ({ src, alt, size, circle, ...props }: AvatarProps) => {
  return (
    <img
      className={joinClasses(['avatar', `avatar--${size}`, circle && 'avatar--circle'])}
      src={src}
      alt={alt}
      {...props}
    />
  )
}
