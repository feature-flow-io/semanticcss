import { Icon } from '../components/Icon'
import { joinClasses } from '../utils'

interface FlashProps {
  text: string
  scheme: 'notice' | 'alert'
  full?: boolean
  dismissable?: boolean
}

export const Flash = ({ text, scheme, full, dismissable }: FlashProps) => {
  const flashScheme = `flash--${scheme}`
  const fullVariant = full && `flash--full`

  return (
    <div className={joinClasses(['flash', flashScheme, fullVariant])}>
      <div className="flash-message">
        <p>{text}</p>
      </div>

      {dismissable && (
        <button type="button" className="flash-close">
          <Icon icon="x" />
        </button>
      )}
    </div>
  )
}
