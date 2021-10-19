interface RadioButtonProps {
  label: string
  note?: string
}

export const RadioButton = ({ label, note, ...props }: RadioButtonProps) => {
  return (
    <>
      <div className="form-group form-group-radio">
        <label>
          <input type="radio" className="form-radio" name="same" checked={true} {...props} />
          {label}
        </label>

        {note && <p className="note">{note}</p>}
      </div>

      <div className="form-group form-group-radio">
        <label>
          <input type="radio" className="form-radio" name="same" {...props} />
          {label}
        </label>

        {note && <p className="note">{note}</p>}
      </div>
    </>
  )
}
