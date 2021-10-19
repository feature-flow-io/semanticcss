interface SubheadProps {
  heading: string
  description?: string
}

export const Subhead = ({ heading, description, ...props }: SubheadProps) => {
  return (
    <div className="subhead" {...props}>
      <h2 className="subhead-heading">{heading}</h2>
      {description && <p className="subhead-description">{description}</p>}
    </div>
  )
}
