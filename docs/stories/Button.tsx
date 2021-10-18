interface ButtonProps {
  scheme?: 'default' | 'primary' | 'danger'
  size?: 'sm' | 'md'
  label: string
  disabled?: boolean
  block?: boolean
  onClick?: () => void
}

function joinClasses(classes: Array<string | boolean>) {
  return classes.filter(Boolean).join(' ')
}

export const Button = ({ scheme, size = 'md', label, disabled = false, block = false, ...props }: ButtonProps) => {
  let mode: string = ''
  if (scheme === 'primary') {
    mode = 'btn--primary'
  } else if (scheme === 'danger') {
    mode = 'btn--danger'
  } else {
    mode = ''
  }

  const blockClass = block && 'btn--block'

  let sizeClass: string = ''
  if (size === 'sm') {
    sizeClass = 'btn--sm'
  }

  return (
    <button type="button" className={joinClasses(['btn', sizeClass, mode, blockClass])} disabled={disabled} {...props}>
      {label}
    </button>
  )
}
