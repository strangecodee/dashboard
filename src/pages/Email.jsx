import React from 'react';
import Card from '../components/Card.jsx';

const Email = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Card title="Email">
          <div className="text-center py-5">
            <i className="bx bx-envelope bx-lg text-primary mb-3"></i>
            <h3>Email Component</h3>
            <p className="text-muted">This is where the email component would be implemented</p>
            <div className="mt-4">
              <div className="alert alert-info">
                Email functionality would be implemented using a component like react-beautiful-dnd for drag and drop or similar
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Email;
