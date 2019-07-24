import React from 'react';

const FormBodyField = (props) => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  );
}

export default FormBodyField;
