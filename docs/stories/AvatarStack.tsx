import { joinClasses } from '../utils'
import { Avatar } from './Avatar'

interface AvatarStackProps {
  src: string
  alt: string
  size: number
  circle: boolean
  avatarCount: number
  showCount?: boolean
}

export const AvatarStack = ({ size, avatarCount, showCount, ...props }: AvatarStackProps) => {
  const loopTill: Array<number> = []

  for (let i = 3; i <= avatarCount; i++) {
    loopTill.push(i)
  }

  return (
    <div className="avatar-stack">
      <Avatar size={size} {...props} />

      {loopTill.map((index) => (
        <Avatar key={index} size={size} {...props} />
      ))}

      {showCount && <div className={joinClasses(['avatar avatar--more avatar--circle', `avatar--${size}`])}>+1</div>}
    </div>
  )
}
