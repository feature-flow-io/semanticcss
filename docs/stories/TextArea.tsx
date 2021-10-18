import { joinClasses } from '../utils'

interface TextAreaProps {
  placeholder?: string
  contrast?: boolean
}

export const TextArea = ({ contrast, ...props }: TextAreaProps) => {
  return <textarea className={joinClasses(['form-control', contrast && 'input-contrast'])} {...props}></textarea>
}
