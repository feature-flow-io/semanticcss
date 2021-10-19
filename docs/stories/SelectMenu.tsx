import { Icon } from '../components/Icon'
import { joinClasses } from '../utils'

interface SelectMenuProps {
  itemSize: number
  position?: 'left' | 'right'
  selected?: boolean
  filter?: boolean
  header?: boolean
  footer?: boolean
}

export const SelectMenu = ({ itemSize, position, selected, filter, header, footer }: SelectMenuProps) => {
  const loopTill: Array<number> = []

  for (let i = 2; i <= itemSize; i++) {
    loopTill.push(i)
  }

  return (
    <div className="d-flex flex-justify-center">
      <details className="details-reset relative" open>
        <summary className="btn" role="button" aria-haspopup="true">
          Choose an item
        </summary>

        <div className={joinClasses(['select-menu', position === 'right' && 'right-0'])}>
          <div className="select-menu-modal">
            {header && (
              <header className="select-menu-header">
                <h3 className="select-menu-title">Filter menu</h3>

                <button type="button" className="select-menu-close">
                  <Icon icon="x" />
                </button>
              </header>
            )}

            {filter && (
              <div className="select-menu-filter">
                <input type="text" className="form-control" placeholder="Filter menu..." />
              </div>
            )}

            <div className="select-menu-list">
              <button className="select-menu-item" role="menuitem" aria-checked="true">
                {selected && <Icon icon="check" className="select-menu-check" />}
                Item 1
              </button>

              {loopTill.map((item) => (
                <button key={item} className="select-menu-item" role="menuitem">
                  {selected && <Icon icon="check" className="select-menu-check" />}
                  Item {item}
                </button>
              ))}
            </div>

            {footer && <footer className="select-menu-footer">Edit label</footer>}
          </div>
        </div>
      </details>
    </div>
  )
}
