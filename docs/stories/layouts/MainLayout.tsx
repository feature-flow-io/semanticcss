import { Sidebar } from '../Sidebar'
import { Avatar } from '../Avatar'
import { Icon } from '../../components/Icon'

export const MainLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar itemCount={4} header={true} />

      <div className="flex-1">
        <header className="appbar p--responsive">
          <div className="appbar-item appbar-item--full">
            <button type="button" className="appbar-link appbar-drawer-btn d-lg-none">
              <Icon icon="menu" />
            </button>
          </div>

          <div className="appbar-item">
            <a href="#" className="appbar-link">
              <Icon icon="world" />
            </a>
          </div>

          <div className="appbar-item">
            <a href="#" className="appbar-link">
              <Icon icon="bell" />
            </a>
          </div>

          <div className="appbar-item mr-0">
            <Avatar
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Abeid Ahmed"
              size={4}
              circle={true}
            />
          </div>
        </header>
      </div>
    </div>
  )
}
