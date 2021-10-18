import { Icon } from '../components/Icon'

interface ToastProps {
  text: string
  dismissable?: boolean
}

export const Toast = ({ text, dismissable }: ToastProps) => {
  return (
    <div className="toast">
      <span className="toast-content">{text}</span>

      {dismissable && (
        <button type="button" className="toast-close">
          <Icon icon="x" />
        </button>
      )}
    </div>
  )
}
