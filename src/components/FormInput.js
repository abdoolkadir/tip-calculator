import React from 'react';

function FormInput({ name, label, onChange, type }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <div className="form-input-group">
        <span>$</span>
        <input name={name} type={type} placeholder="0" onChange={onChange} />
      </div>
    </div>
  );
}

export default FormInput;
