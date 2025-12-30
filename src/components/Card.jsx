import React from 'react';

const Card = ({ title, children, className = '', header, footer, style }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {(title || header) && (
        <div className="card-header">
          {header ? header : <h5 className="card-title mb-0">{title}</h5>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
