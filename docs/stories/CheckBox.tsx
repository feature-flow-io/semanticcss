interface CheckBoxProps {
  label: string
  note?: string
}

export const CheckBox = ({ label, note, ...props }: CheckBoxProps) => {
  return (
    <div className="form-group form-group-checkbox">
      <label>
        <input type="checkbox" className="form-checkbox" {...props} />
        {label}
      </label>

      {note && <p className="note">{note}</p>}
    </div>
  )
}
