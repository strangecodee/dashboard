import React from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import Table from '../components/Table.jsx';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 129.99, stock: 25, status: 'In Stock' },
    { id: 2, name: 'Running Shoes', category: 'Footwear', price: 89.99, stock: 0, status: 'Out of Stock' },
    { id: 3, name: 'Coffee Maker', category: 'Appliances', price: 79.99, stock: 5, status: 'Low Stock' },
    { id: 4, name: 'Desk Lamp', category: 'Furniture', price: 39.99, stock: 40, status: 'In Stock' },
    { id: 5, name: 'Yoga Mat', category: 'Fitness', price: 24.99, stock: 15, status: 'In Stock' },
  ];

  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Product Name' },
    { key: 'category', title: 'Category' },
    { 
      key: 'price', 
      title: 'Price',
      render: (value) => `$${value.toFixed(2)}`
    },
    { key: 'stock', title: 'Stock' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value) => (
        <span className={`badge ${
          value === 'In Stock' ? 'bg-success' : 
          value === 'Low Stock' ? 'bg-warning' : 'bg-danger'
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
              <h5 className="card-title mb-0">Product Management</h5>
              <Button variant="primary">Add Product</Button>
            </div>
          }
        >
          <Table
            data={products}
            columns={columns}
            striped={true}
            hover={true}
          />
        </Card>
      </div>
    </div>
  );
};

export default ProductList;
