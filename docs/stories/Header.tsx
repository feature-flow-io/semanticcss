import { Icon } from '../components/Icon'
import { Avatar } from './Avatar'

export const Header = () => {
  return (
    <header className="header p--responsive">
      <div className="header-item -ml-1 mr-0">
        <button type="button" className="header-link header-mobile-menu-btn">
          <Icon icon="menu" />
        </button>
      </div>

      <div className="header-item header-logo">
        <a href="#" className="header-link">
          <Icon icon="github" size={32} />
        </a>
      </div>

      <div className="header-item--responsive active">
        <div className="header-item">
          <a href="#" className="header-link">
            Home
          </a>
        </div>
        <div className="header-item header-item--full">
          <a href="#" className="header-link">
            About
          </a>
        </div>

        <div className="header-item">
          <a href="#" className="header-link">
            <Icon icon="world" />
          </a>
        </div>

        <div className="header-item">
          <a href="#" className="header-link">
            <Icon icon="question" />
          </a>
        </div>

        <div className="header-item">
          <a href="#" className="header-link">
            <Icon icon="bell" />
          </a>
        </div>
      </div>

      <div className="header-item mr-0 ml-auto">
        <a href="#" className="header-link">
          <Avatar
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Abeid Ahmed"
            size={4}
            circle={true}
          />
        </a>
      </div>
    </header>
  )
}
