import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size, 
  outline = false, 
  disabled = false, 
  onClick, 
  className = '', 
  type = 'button',
  href 
}) => {
  const btnClass = `btn ${outline ? 'btn-outline-' : 'btn-'}${variant}${size ? ' btn-' + size : ''} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={btnClass} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
