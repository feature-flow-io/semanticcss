import { joinClasses } from '../utils'

interface LabelProps {
  text: string
  scheme?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  circle?: boolean
}

export const Label = ({ text, scheme, circle, ...props }: LabelProps) => {
  return (
    <span className={joinClasses(['label', circle && 'label--circle', `label--${scheme}`])} {...props}>
      {text}
    </span>
  )
}
