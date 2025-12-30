import React from 'react';
import Card from '../components/Card.jsx'

  const EcommerceDashboard = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Card title="E-commerce Dashboard">
          <div className="text-center py-5">
            <i className="bx bx-cart bx-lg text-primary mb-3"></i>
            <h3>E-commerce Dashboard</h3>
            <p className="text-muted">This is where the e-commerce dashboard would be implemented</p>
            <div className="mt-4">
              <div className="alert alert-info">
                E-commerce dashboard would include sales analytics, order tracking, inventory management, and customer insights
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EcommerceDashboard;
