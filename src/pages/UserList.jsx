import React from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import Table from '../components/Table.jsx';

const UserList = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinedDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active', joinedDate: '2023-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Subscriber', status: 'Inactive', joinedDate: '2023-03-10' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active', joinedDate: '2023-04-05' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Subscriber', status: 'Active', joinedDate: '2023-05-12' },
  ];

  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Role' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value) => (
        <span className={`badge ${value === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
          {value}
        </span>
      )
    },
    { key: 'joinedDate', title: 'Joined Date' },
    {
      key: 'actions',
      title: 'Actions',
      render: () => (
        <div className="d-flex">
          <Button variant="primary" size="sm" className="me-2">Edit</Button>
          <Button variant="danger" size="sm">Delete</Button>
        </div>
      )
    }
  ];

  return (
    <div className="row">
      <div className="col-12">
        <Card
          header={
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">User Management</h5>
              <Button variant="primary">Add User</Button>
            </div>
          }
        >
          <Table
            data={users}
            columns={columns}
            striped={true}
            hover={true}
          />
        </Card>
      </div>
    </div>
  );
};

export default UserList;
