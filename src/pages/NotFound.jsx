import React from 'react';
import { Link } from 'react-router-dom';

const NotFound= () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card text-center">
          <div className="card-body py-5 px-4">
            <h1 className="display-1 text-primary mb-3">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="mb-4">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link to="/" className="btn btn-primary">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
