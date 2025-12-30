import React from 'react';
import Card from '../components/Card.jsx';

const AcademyDashboard = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Card title="Academy Dashboard">
          <div className="text-center py-5">
            <i className="bx bx-book-open bx-lg text-primary mb-3"></i>
            <h3>Academy Dashboard</h3>
            <p className="text-muted">This is where the academy dashboard would be implemented</p>
            <div className="mt-4">
              <div className="alert alert-info">
                Academy dashboard would include course management, student progress tracking, and learning analytics
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AcademyDashboard;
