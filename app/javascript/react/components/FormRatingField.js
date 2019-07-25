import React from 'react'

const FormRatingField = (props) => {
  return (
    <div>
      <input
      name={props.name}
      type="range"
      list="tickmarks"
      value={props.content}
      onChange={props.handlerFunction}
      min="1"
      max="5"
      step="1"
      defaultValue="3"
      />

      <datalist id="tickmarks">
        <option value="1" label="1"/>
        <option value="2" label="2"/>
        <option value="3" label="3"/>
        <option value="4" label="4"/>
        <option value="5" label="5"/>
      </datalist>
    </div>
  )
}
export default FormRatingField
