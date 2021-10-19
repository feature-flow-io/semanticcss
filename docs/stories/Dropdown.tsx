import { joinClasses } from '../utils'
import { Icon } from '../components/Icon'

interface DropdownProps {
  direction?: 'se' | 'sw' | 's'
  icon?: boolean
}

export const Dropdown = ({ direction, icon }: DropdownProps) => {
  let directionClass: string = ''
  if (direction === 'se') {
    directionClass = ''
  } else if (direction === 'sw') {
    directionClass = 'dropdown-menu--sw'
  } else if (direction === 's') {
    directionClass = 'dropdown-menu--s'
  }

  return (
    <details className="dropdown" open={true}>
      <summary role="button" className="btn">
        Dropdown
      </summary>

      <ul className={joinClasses(['dropdown-menu', directionClass])}>
        <li>
          <a href="#" className="dropdown-item">
            {icon && <Icon />}
            Dropdown item 1
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item">
            {icon && <Icon />}
            Dropdown item 2
          </a>
        </li>
        <li className="dropdown-separator"></li>
        <li>
          <a href="#" className="dropdown-item">
            {icon && <Icon />}
            Dropdown item 3
          </a>
        </li>
      </ul>
    </details>
  )
}
