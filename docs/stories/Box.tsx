import { joinClasses } from '../utils'

interface BoxProps {
  rowCount: number
  scheme?: 'default' | 'danger'
  header?: boolean
  body?: boolean
  footer?: boolean
}

export const Box = ({ rowCount, scheme, header, body, footer, ...props }: BoxProps) => {
  const loopTill: Array<number> = []

  for (let i = 1; i <= rowCount; i++) {
    loopTill.push(i)
  }

  const boxSchemeClass = scheme === 'danger' && 'box--danger'

  return (
    <div className={joinClasses(['box', boxSchemeClass])} {...props}>
      {header && (
        <div className="box-header">
          <h3 className="box-title">Box title</h3>
        </div>
      )}

      {body && <div className="box-body">Box body</div>}

      {rowCount
        ? loopTill.map((item) => (
            <div key={item} className="box-row">
              Box-row {item}
            </div>
          ))
        : ''}

      {footer && <div className="box-footer">Box footer</div>}
    </div>
  )
}
