import { joinClasses } from '../utils'

interface ProgressProps {
  width: number
  color: string
  size?: 'sm' | 'md' | 'lg'
}

export const Progress = ({ width, color, size, ...props }: ProgressProps) => {
  return (
    <div className={joinClasses(['progress', `progress--${size}`])} {...props}>
      <div className="progress-item" style={{ width: `${width}%`, backgroundColor: color }}></div>
    </div>
  )
}
