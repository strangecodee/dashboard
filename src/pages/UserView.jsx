import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card.jsx';

const UserView = () => {
  const { id } = useParams();
  
  // Mock user data
  const user = {
    id: parseInt(id || '0'),
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Administrator',
    status: 'Active',
    joinedDate: '2023-01-15',
    lastLogin: '2023-12-30 10:30 AM'
  };

  return (
    <div className="row">
      <div className="col-12">
        <Card title="User Details">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">ID</label>
                <p className="form-control-plaintext">{user.id}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <p className="form-control-plaintext">{user.name}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <p className="form-control-plaintext">{user.email}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <p className="form-control-plaintext">{user.role}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Status</label>
                <p className="form-control-plaintext">
                  <span className="badge bg-success">{user.status}</span>
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">Joined Date</label>
                <p className="form-control-plaintext">{user.joinedDate}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Last Login</label>
                <p className="form-control-plaintext">{user.lastLogin}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserView;
