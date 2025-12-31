import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthTwoSteps = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verification code:', code.join(''));
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center mb-4">
                <span className="app-brand-text demo text-body fw-bold">Frest</span>
              </div>
              <h4 className="mb-2">Two Step Verification 💬</h4>
              <p className="text-start mb-4">
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
                <span className="fw-bold d-block mt-2">******1234</span>
              </p>
              <p className="mb-0">Type your 6 digit security code</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <div className="auth-input-wrapper d-flex align-items-center justify-content-sm-between gap-2">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        className="form-control auth-input text-center"
                        id={`code-${index}`}
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100 mb-3" type="submit">
                  Verify my account
                </button>
                <div className="text-center">
                  Didn't get the code?{' '}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Resend
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTwoSteps;
