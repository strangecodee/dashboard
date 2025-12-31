import React, { useState } from 'react';

const UIElements = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <h4 className="fw-bold py-3 mb-4">UI Elements</h4>

      {/* Alerts */}
      <div className="card mb-4">
        <h5 className="card-header">Alerts</h5>
        <div className="card-body">
          <div className="alert alert-primary" role="alert">
            This is a primary alert — check it out!
          </div>
          <div className="alert alert-success" role="alert">
            This is a success alert — check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            This is a danger alert — check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            This is a warning alert — check it out!
          </div>
          <div className="alert alert-info" role="alert">
            This is an info alert — check it out!
          </div>
          {showAlert && (
            <div className="alert alert-warning alert-dismissible" role="alert">
              This is a dismissible alert!
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAlert(false)}
                aria-label="Close"
              ></button>
            </div>
          )}
        </div>
      </div>

      {/* Badges */}
      <div className="card mb-4">
        <h5 className="card-header">Badges</h5>
        <div className="card-body">
          <span className="badge bg-primary me-2">Primary</span>
          <span className="badge bg-secondary me-2">Secondary</span>
          <span className="badge bg-success me-2">Success</span>
          <span className="badge bg-danger me-2">Danger</span>
          <span className="badge bg-warning me-2">Warning</span>
          <span className="badge bg-info me-2">Info</span>
          <span className="badge bg-dark me-2">Dark</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="card mb-4">
        <h5 className="card-header">Buttons</h5>
        <div className="card-body">
          <div className="mb-3">
            <button className="btn btn-primary me-2">Primary</button>
            <button className="btn btn-secondary me-2">Secondary</button>
            <button className="btn btn-success me-2">Success</button>
            <button className="btn btn-danger me-2">Danger</button>
            <button className="btn btn-warning me-2">Warning</button>
            <button className="btn btn-info me-2">Info</button>
          </div>
          <div className="mb-3">
            <button className="btn btn-outline-primary me-2">Outline Primary</button>
            <button className="btn btn-outline-secondary me-2">Outline Secondary</button>
            <button className="btn btn-outline-success me-2">Outline Success</button>
          </div>
          <div>
            <button className="btn btn-sm btn-primary me-2">Small</button>
            <button className="btn btn-primary me-2">Medium</button>
            <button className="btn btn-lg btn-primary">Large</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card mb-4">
        <h5 className="card-header">Tabs</h5>
        <div className="card-body">
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'messages' ? 'active' : ''}`}
                onClick={() => setActiveTab('messages')}
              >
                Messages
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {activeTab === 'home' && (
              <div>
                <h5>Home Tab Content</h5>
                <p>This is the home tab content.</p>
              </div>
            )}
            {activeTab === 'profile' && (
              <div>
                <h5>Profile Tab Content</h5>
                <p>This is the profile tab content.</p>
              </div>
            )}
            {activeTab === 'messages' && (
              <div>
                <h5>Messages Tab Content</h5>
                <p>This is the messages tab content.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="card mb-4">
        <h5 className="card-header">Progress Bars</h5>
        <div className="card-body">
          <div className="progress mb-3">
            <div className="progress-bar" role="progressbar" style={{ width: '25%' }}>25%</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }}>50%</div>
          </div>
          <div className="progress mb-3">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '75%' }}>75%</div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '100%' }}>100%</div>
          </div>
        </div>
      </div>

      {/* Spinners */}
      <div className="card">
        <h5 className="card-header">Spinners</h5>
        <div className="card-body">
          <div className="spinner-border text-primary me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-success me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-danger me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-primary me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIElements;
