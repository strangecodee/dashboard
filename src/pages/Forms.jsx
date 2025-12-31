import React, { useState } from 'react';

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    address: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h4 className="fw-bold py-3 mb-4">Form Layouts</h4>

      {/* Vertical Form */}
      <div className="card mb-4">
        <h5 className="card-header">Vertical Form</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="organization">Organization</label>
              <input
                type="text"
                className="form-control"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="state">State</label>
                <select className="form-select" id="state" name="state" value={formData.state} onChange={handleChange}>
                  <option value="">Select State</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="10001"
                />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <button type="reset" className="btn btn-outline-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </div>

      {/* Horizontal Form */}
      <div className="card">
        <h5 className="card-header">Horizontal Form</h5>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="basic-default-name" placeholder="John Doe" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="basic-default-company">Company</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="basic-default-company" placeholder="ACME Inc." />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="basic-default-email">Email</label>
              <div className="col-sm-10">
                <div className="input-group input-group-merge">
                  <input
                    type="email"
                    id="basic-default-email"
                    className="form-control"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="basic-default-message">Message</label>
              <div className="col-sm-10">
                <textarea
                  id="basic-default-message"
                  className="form-control"
                  placeholder="Hi, Do you have a moment to talk Joe?"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
