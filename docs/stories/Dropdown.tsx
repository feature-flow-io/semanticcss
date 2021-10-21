import { joinClasses } from '../utils'
import { Icon } from '../components/Icon'

interface DropdownProps {
  direction?: 'se' | 'sw' | 's'
  icon?: boolean
}

export const Dropdown = ({ direction, icon }: DropdownProps) => {
  return (
    <div className="d-flex flex-justify-center">
      <details className="dropdown details-overlay" open={true}>
        <summary role="button" className="btn">
          Dropdown
        </summary>

        <ul className={joinClasses(['dropdown-menu', `dropdown-menu--${direction}`])}>
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
          <li>
            <button type="button" className="dropdown-item">
              {icon && <Icon />}
              Sign out
            </button>
          </li>
        </ul>
      </details>
    </div>
  )
}
