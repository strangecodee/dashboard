import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import FormInput from '../components/FormInput.jsx';
import Button from '../components/Button.jsx';

const AuthForgotPassword = () => {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          <Card className="mb-0">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="/" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <svg width="25" viewBox="0 0 25 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <linearGradient x1="17.7774528%" y1="87.9015544%" x2="17.7774528%" y2="0%" id="b">
                          <stop stopColor="#5A8DEE" offset="0%"></stop>
                          <stop stopColor="#699AF9" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g id="01.-Login" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="01.-Login-Copy" transform="translate(-100.000000, -190.000000)">
                          <g id="Group" transform="translate(100.000000, 190.000000)">
                            <path d="M20.1996604,21.0733333 L20.1996604,2.26666667 C20.1996604,1.01333333 19.1863271,0 17.9329937,0 L2.26666667,0 C1.01333333,0 0,1.01333333 0,2.26666667 L0,21.0733333 C0,22.3266667 1.01333333,23.34 2.26666667,23.34 L17.9329937,23.34 C19.1863271,23.34 20.1996604,22.3266667 20.1996604,21.0733333 Z" id="Path" fill="#5A8DEE"></path>
                            <path d="M20.1996604,21.0733333 L20.1996604,2.26666667 C20.1996604,1.01333333 19.1863271,0 17.9329937,0 L2.26666667,0 C1.01333333,0 0,1.01333333 0,2.26666667 L0,21.0733333 C0,22.3266667 1.01333333,23.34 2.26666667,23.34 L17.9329937,23.34 C19.1863271,23.34 20.1996604,22.3266667 20.1996604,21.0733333 Z" id="Path" fill="url(#b)"></path>
                            <path d="M24.749643,24.4733333 L24.749643,4.53333333 C24.749643,2.03333333 22.71631,0 20.21631,0 L4.53333333,0 C2.03333333,0 0,2.03333333 0,4.53333333 L0,24.4733333 C0,26.9733333 2.03333333,29.0066667 4.53333333,29.0066667 L20.21631,29.0066667 C22.71631,29.0066667 24.749643,26.9733333 24.749643,24.4733333 Z" id="Path" fill="#4880EA"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="app-brand-text demo text-body fw-bold">Frest</span>
                </a>
              </div>
              <h4 className="mb-2">Forgot Password? 🔒</h4>
              <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>

              <form id="formAuthentication" className="mb-3">
                <FormInput 
                  label="Email" 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                />
                <Button type="submit" variant="primary" className="w-100">Send Reset Link</Button>
              </form>

              <p className="text-center">
                <Link to="/login">
                  <i className="bx bx-chevron-left scaleX-n1-rtl"></i>
                  Back to login
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthForgotPassword;