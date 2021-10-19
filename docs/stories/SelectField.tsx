import { joinClasses } from '../utils'

interface SelectFieldProps {
  size?: 'sm' | 'md'
}

export const SelectField = ({ size, ...props }: SelectFieldProps) => {
  const sizeClass = size === 'sm' && 'form-select--sm'

  return (
    <select className={joinClasses(['form-select', sizeClass])} {...props}>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </select>
  )
}
