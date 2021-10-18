import { TextField } from './TextField'
import { joinClasses } from '../utils'

export interface TextFieldWithLabelProps {
  label: string
  placeholder?: string
}

export const TextFieldWithLabel = ({ label, ...props }: TextFieldWithLabelProps) => {
  return (
    <div className={joinClasses(['form-group'])}>
      <div className="form-group-header">
        <label htmlFor="input">{label}</label>
      </div>

      <div className="form-group-body">
        <TextField {...props} />
      </div>
    </div>
  )
}
