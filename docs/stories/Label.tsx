import { Icon } from '../components/Icon'
import { joinClasses } from '../utils'

interface LabelProps {
  text: string
  scheme?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  circle?: boolean
  dismissable?: boolean
}

export const Label = ({ text, scheme, circle, dismissable, ...props }: LabelProps) => {
  return (
    <span className={joinClasses(['label', circle && 'label--circle', `label--${scheme}`])} {...props}>
      {text}

      {dismissable && (
        <button type="button" className="label-close">
          <Icon icon="x" size={18} />
        </button>
      )}
    </span>
  )
}
