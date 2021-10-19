import { joinClasses } from '../utils'

interface SpinnerProps {
  size: 'sm' | 'md' | 'lg'
}

export const Spinner = ({ size, ...props }: SpinnerProps) => {
  return <div className={joinClasses(['spinner', `spinner--${size}`])} {...props}></div>
}
