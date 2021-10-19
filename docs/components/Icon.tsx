interface IconProps {
  icon?: string
}

const Glyph = ({ icon }: IconProps): JSX.Element | null => {
  switch (icon) {
    case 'x':
      return (
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </g>
      )
    case 'check':
      return (
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
        </g>
      )
    default:
      return (
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        </g>
      )
  }
}

export const Icon = ({ icon, ...props }: IconProps) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props} height={20} width={20} className="octicon">
      <Glyph icon={icon} />
    </svg>
  )
}
