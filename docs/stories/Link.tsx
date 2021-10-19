import { joinClasses } from '../utils'

interface LinkProps {
  text: string
  scheme?: 'default' | 'primary' | 'secondary' | 'muted'
}

export const Link = ({ text, scheme, ...props }: LinkProps) => {
  return (
    <a href="#" className={joinClasses([`link--${scheme}`])} {...props}>
      {text}
    </a>
  )
}
