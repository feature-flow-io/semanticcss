import { joinClasses } from '../utils'

interface SwitchProps {
  size: 'sm' | 'md'
}

export const Switch = ({ size, ...props }: SwitchProps) => {
  const sizeClass = size === 'sm' && 'switch--sm'

  return <input type="checkbox" className={joinClasses(['switch', sizeClass])} {...props} />
}
