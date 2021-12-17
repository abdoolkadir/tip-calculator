import React from 'react';

function FormInput({ name, label }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <div className="form-input-group">
        <span>$</span>
        <input name={name} type="text" placeholder="0" />
      </div>
    </div>
  );
}

export default FormInput;
