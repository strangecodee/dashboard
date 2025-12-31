import React from 'react';
import { Link } from 'react-router-dom';

const AuthVerifyEmail = () => {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center mb-4">
                <span className="app-brand-text demo text-body fw-bold">Frest</span>
              </div>
              <h4 className="mb-2">Verify your email ✉️</h4>
              <p className="text-start mb-4">
                Account activation link sent to your email address: hello@example.com Please follow the link inside to continue.
              </p>
              <Link to="/login" className="btn btn-primary w-100 mb-3">
                Skip for now
              </Link>
              <p className="text-center mb-0">
                Didn't get the mail?{' '}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Resend
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthVerifyEmail;
