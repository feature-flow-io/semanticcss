import { Icon } from '../components/Icon'
import { Label } from './Label'

interface TabProps {
  icon?: boolean
  counter?: boolean
  tabItemCount: number
}

export const Tab = ({ icon, counter, tabItemCount, ...props }: TabProps) => {
  const loopTill: Array<number> = []

  for (let i = 2; i <= tabItemCount; i++) {
    loopTill.push(i)
  }

  return (
    <nav className="tab" {...props}>
      <button className="tab-item" role="tab" type="button" aria-selected="true">
        {icon && <Icon className="tab-octicon" />}
        Item 1
        {counter && (
          <span className="tab-counter">
            <Label text="21" circle={true} />
          </span>
        )}
      </button>

      {loopTill.map((item) => (
        <button key={item} className="tab-item" role="tab" type="button">
          {icon && <Icon className="tab-octicon" />}
          Item {item}
          {counter && (
            <span className="tab-counter">
              <Label text="21" circle={true} />
            </span>
          )}
        </button>
      ))}
    </nav>
  )
}
