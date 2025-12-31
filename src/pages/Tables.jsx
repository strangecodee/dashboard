import React from 'react';

const Tables = () => {
  const tableData = [
    { id: 1, name: 'Albert Cook', position: 'Developer', office: 'New York', age: 23, date: '2011/12/12', salary: '$100,000' },
    { id: 2, name: 'Chris Fox', position: 'Designer', office: 'San Francisco', age: 32, date: '2012/03/15', salary: '$120,000' },
    { id: 3, name: 'John Doe', position: 'Manager', office: 'London', age: 45, date: '2010/05/20', salary: '$150,000' },
    { id: 4, name: 'Jane Smith', position: 'Developer', office: 'Tokyo', age: 28, date: '2015/08/10', salary: '$95,000' },
    { id: 5, name: 'Bob Johnson', position: 'Designer', office: 'Paris', age: 35, date: '2013/11/05', salary: '$110,000' },
  ];

  return (
    <div>
      <h4 className="fw-bold py-3 mb-4">Basic Tables</h4>

      {/* Basic Table */}
      <div className="card mb-4">
        <h5 className="card-header">Basic Table</h5>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start Date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.position}</td>
                  <td>{row.office}</td>
                  <td>{row.age}</td>
                  <td>{row.date}</td>
                  <td>{row.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Striped Table */}
      <div className="card mb-4">
        <h5 className="card-header">Striped rows</h5>
        <div className="table-responsive text-nowrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.position}</td>
                  <td>{row.office}</td>
                  <td>{row.age}</td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables;
