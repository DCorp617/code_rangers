import React from 'react'

const FormRatingField = (props) > {
  return (
    <input type="range" list="tickmarks">
    <datalist id="tickmarks">
      <option value="1" label="1">
      <option value="2">
      <option value="3" label="3">
      <option value="4">
      <option value="5" label="5">
    </datalist>
  )

}

export default FormRatingField
