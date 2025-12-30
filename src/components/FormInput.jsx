import React from 'react';

const FormInput = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false, 
  error, 
  helpText, 
  className = '', 
  disabled = false 
}) => {
  return (
    <div className={`mb-3 ${className}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      {helpText && <div className="form-text">{helpText}</div>}
    </div>
  );
};

export default FormInput;
