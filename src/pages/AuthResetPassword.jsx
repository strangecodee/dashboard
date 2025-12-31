import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password:', { password, confirmPassword });
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
              <h4 className="mb-2">Reset Password 🔒</h4>
              <p className="mb-4">Your new password must be different from previously used passwords</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" htmlFor="password">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="············"
                    required
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="············"
                    required
                  />
                </div>
                <button className="btn btn-primary d-grid w-100 mb-3" type="submit">
                  Set new password
                </button>
                <div className="text-center">
                  <Link to="/login">
                    <i className="bx bx-chevron-left scaleX-n1-rtl me-1"></i>
                    Back to login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthResetPassword;
