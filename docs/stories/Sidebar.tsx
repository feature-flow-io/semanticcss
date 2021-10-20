import { Icon } from '../components/Icon'
import { joinClasses } from '../utils'

interface SidebarProps {
  itemCount: number
  header?: boolean
  footer?: boolean
  className?: string
}

export const Sidebar = ({ itemCount, header, footer, className, ...props }: SidebarProps) => {
  const loopTill: Array<number> = []

  for (let i = 2; i <= itemCount; i++) {
    loopTill.push(i)
  }

  return (
    <aside className={joinClasses(['sidebar', className])} {...props}>
      {header && (
        <div className="sidebar-header">
          <button type="button" className="sidebar-item flex-justify-between py-1">
            <span className="d-flex flex-items-center">
              <Icon icon="github" size={28} />
              Account changer
            </span>

            <Icon icon="arrow-dropdown-sm" className="-mr-1" />
          </button>
        </div>
      )}

      <div className="sidebar-container">
        <a href="#" className="sidebar-item" aria-current="page">
          <Icon icon="world" />
          Sidebar item
        </a>

        {loopTill.map((item) => (
          <a key={item} href="#" className="sidebar-item">
            <Icon icon="question" />
            Sidebar item {item}
          </a>
        ))}

        <a href="#" className="sidebar-item">
          <Icon icon="artboard" />
          Artboard
        </a>

        <div className="sidebar-nested">
          <a href="#" className="sidebar-item">
            Nested sidebar item
          </a>
          <a href="#" className="sidebar-item">
            Nested sidebar item 2
          </a>
        </div>

        <hr />

        <a href="#" className="sidebar-item">
          <Icon icon="cog" />
          Settings
        </a>

        <a href="#" className="sidebar-item">
          <Icon icon="app" />
          Apps
        </a>
      </div>

      {footer && (
        <div className="sidebar-footer">
          <a href="#" className="sidebar-item">
            <Icon />
            Team management
          </a>
        </div>
      )}
    </aside>
  )
}
