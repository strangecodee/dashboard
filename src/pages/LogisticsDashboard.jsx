import React from 'react';
import Card from '../components/Card.jsx';

const LogisticsDashboard = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Card title="Logistics Dashboard">
          <div className="text-center py-5">
            <i className="bx bx-car bx-lg text-primary mb-3"></i>
            <h3>Logistics Dashboard</h3>
            <p className="text-muted">This is where the logistics dashboard would be implemented</p>
            <div className="mt-4">
              <div className="alert alert-info">
                Logistics dashboard would include fleet management, route optimization, and delivery tracking
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
