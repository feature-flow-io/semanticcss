import { Icon } from '../components/Icon'
import { joinClasses } from '../utils'

interface TooltipProps {
  label: string
  position: 's' | 'sw' | 'se' | 'n' | 'nw' | 'ne' | 'w' | 'e'
}

export const Tooltip = ({ label, position }: TooltipProps) => {
  let positionClass = `tooltipped--${position}`

  return (
    <span className={joinClasses(['tooltipped', positionClass])} aria-label={label}>
      <Icon />
    </span>
  )
}
