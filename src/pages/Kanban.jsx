import React from 'react';
import Card from '../components/Card.jsx';

const Kanban = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Card title="Kanban">
          <div className="text-center py-5">
            <i className="bx bx-grid bx-lg text-primary mb-3"></i>
            <h3>Kanban Board</h3>
            <p className="text-muted">This is where the Kanban board component would be implemented</p>
            <div className="mt-4">
              <div className="alert alert-info">
                Kanban board functionality would be implemented using a library like react-beautiful-dnd for drag and drop
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Kanban;
