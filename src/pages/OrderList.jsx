import React from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import Table from '../components/Table.jsx';

const OrderList = () => {
  const orders = [
    { id: 1, customer: 'John Doe', date: '2023-12-01', amount: 129.99, status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', date: '2023-12-05', amount: 89.50, status: 'Shipped' },
    { id: 3, customer: 'Bob Johnson', date: '2023-12-10', amount: 245.75, status: 'Processing' },
    { id: 4, customer: 'Alice Williams', date: '2023-12-15', amount: 54.99, status: 'Pending' },
    { id: 5, customer: 'Charlie Brown', date: '2023-12-20', amount: 199.99, status: 'Cancelled' },
  ];

  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'customer', title: 'Customer' },
    { key: 'date', title: 'Date' },
    { 
      key: 'amount', 
      title: 'Amount',
      render: (value) => `$${value.toFixed(2)}`
    },
    { 
      key: 'status', 
      title: 'Status',
      render: (value) => (
        <span className={`badge ${
          value === 'Pending' ? 'bg-warning' : 
          value === 'Processing' ? 'bg-info' : 
          value === 'Shipped' ? 'bg-primary' : 
          value === 'Delivered' ? 'bg-success' : 'bg-danger'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      render: () => (
        <div className="d-flex">
          <Button variant="primary" size="sm" className="me-2">View</Button>
          <Button variant="secondary" size="sm">Edit</Button>
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
              <h5 className="card-title mb-0">Order Management</h5>
              <Button variant="primary">Create Order</Button>
            </div>
          }
        >
          <Table
            data={orders}
            columns={columns}
            striped={true}
            hover={true}
          />
        </Card>
      </div>
    </div>
  );
};

export default OrderList;
