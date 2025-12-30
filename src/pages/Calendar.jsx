import React from 'react';
import Card from '../components/Card.jsx';

const Calendar = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Card title="Calendar">
          <div className="text-center py-5">
            <i className="bx bx-calendar bx-lg text-primary mb-3"></i>
            <h3>Calendar Component</h3>
            <p className="text-muted">This is where the calendar component would be implemented</p>
            <div className="mt-4">
              <div className="alert alert-info">
                Calendar functionality would be implemented using a library like FullCalendar or react-big-calendar
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;