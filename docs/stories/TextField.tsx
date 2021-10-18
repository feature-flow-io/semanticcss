import { Icon } from '../components/Icon'
import { joinClasses } from '../utils'

export interface TextFieldProps {
  icon?: 'none' | 'leading' | 'trailing'
  size?: 'sm' | 'md'
  placeholder?: string
  contrast?: boolean
}

export const TextField = ({ size, contrast, icon, ...props }: TextFieldProps) => {
  const sizeClass = size === 'sm' && 'form-control--sm'

  return (
    <>
      {icon === 'leading' ? (
        <TextFieldWithLeadingIcon size={size} contrast={contrast} {...props} />
      ) : icon === 'trailing' ? (
        <TextFieldWithTrailingIcon size={size} contrast={contrast} {...props} />
      ) : (
        <input
          type="text"
          className={joinClasses(['form-control', contrast && 'input-contrast', sizeClass])}
          {...props}
        />
      )}
    </>
  )
}

const TextFieldWithLeadingIcon = ({ size, contrast, ...props }: TextFieldProps) => {
  const sizeClass = size === 'sm' && 'form-control--sm'

  return (
    <div className="input-group">
      <div className="input-group--leading-icon">
        <Icon />
      </div>

      <input
        type="text"
        className={joinClasses(['form-control', contrast && 'input-contrast', sizeClass])}
        {...props}
      />
    </div>
  )
}

const TextFieldWithTrailingIcon = ({ size, contrast, ...props }: TextFieldProps) => {
  const sizeClass = size === 'sm' && 'form-control--sm'

  return (
    <div className="input-group">
      <div className="input-group--trailing-icon">
        <Icon />
      </div>

      <input
        type="text"
        className={joinClasses(['form-control', contrast && 'input-contrast', sizeClass])}
        {...props}
      />
    </div>
  )
}
