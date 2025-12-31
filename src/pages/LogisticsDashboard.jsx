import React from 'react';

const LogisticsDashboard = () => {
  const stats = [
    { title: 'On Route', value: '42', icon: 'bx-car', color: 'primary', bgColor: 'primary' },
    { title: 'Delivered', value: '178', icon: 'bx-package', color: 'success', bgColor: 'success' },
    { title: 'Delayed', value: '12', icon: 'bx-error', color: 'warning', bgColor: 'warning' },
    { title: 'Total Distance', value: '2,847 km', icon: 'bx-map', color: 'info', bgColor: 'info' }
  ];

  return (
    <div>
      <h4 className="fw-bold py-3 mb-4">Logistics Dashboard</h4>
      
      {/* Fleet Overview */}
      <div className="row mb-4">
        <div className="col-lg-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Fleet Overview</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="fleetOverviewOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="fleetOverviewOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="bx bx-car fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">Active Vehicles</h6>
                      <small className="text-muted">45 vehicles</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="bx bx-check-circle fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">Completed Today</h6>
                      <small className="text-muted">342 deliveries</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <span className="avatar-initial rounded bg-label-warning">
                        <i className="bx bx-time fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">On Time Rate</h6>
                      <small className="text-muted">94.5%</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <span className="avatar-initial rounded bg-label-danger">
                        <i className="bx bx-error fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">Delayed Deliveries</h6>
                      <small className="text-muted">12 deliveries</small>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fleetOverviewChart"></div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Delivery Stats</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="deliveryStatsOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="deliveryStatsOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">On-Time Delivery</h6>
                  <small className="text-muted">Last 30 days</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">94.5%</h4>
                  <small className="text-success">+2.1%</small>
                </div>
              </div>
              <div className="progress mb-4" style={{ height: '12px' }}>
                <div className="progress-bar bg-success" style={{ width: '94.5%' }}></div>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">Average Delivery Time</h6>
                  <small className="text-muted">Last 30 days</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">2.4h</h4>
                  <small className="text-danger">-0.2h</small>
                </div>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">Fuel Efficiency</h6>
                  <small className="text-muted">Avg. per vehicle</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">12.5 km/l</h4>
                  <small className="text-success">+0.8 km/l</small>
                </div>
              </div>
              
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="mb-0">Active Drivers</h6>
                  <small className="text-muted">Today</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">42</h4>
                  <small className="text-success">+3</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Fleet Tracking */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Live Fleet Tracking</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="liveFleetOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="liveFleetOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div style={{ minHeight: '400px', background: '#1e1e2d', borderRadius: '8px', position: 'relative' }}>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center py-5">
                    <i className="bx bx-map bx-lg text-muted mb-3"></i>
                    <p className="text-muted">Interactive map would be displayed here using Leaflet or Google Maps</p>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                  <div className="badge bg-primary me-1">
                    <i className="bx bx-car me-1"></i>
                    32 In Transit
                  </div>
                  <div className="badge bg-success">
                    <i className="bx bx-check me-1"></i>
                    12 Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vehicle Status & Active Shipments */}
      <div className="row">
        <div className="col-xl-6 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Vehicle Status</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="vehicleStatusOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="vehicleStatusOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Vehicle ID</th>
                    <th>Driver</th>
                    <th>Route</th>
                    <th>Location</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-semibold">VOL-342</td>
                    <td>John Smith</td>
                    <td>New York → Boston</td>
                    <td><i className="bx bx-map-pin me-1"></i>Connecticut</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '65%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-primary">In Transit</span></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">VOL-453</td>
                    <td>Jane Doe</td>
                    <td>LA → San Diego</td>
                    <td><i className="bx bx-map-pin me-1"></i>San Diego</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-success">Delivered</span></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">VOL-234</td>
                    <td>Bob Johnson</td>
                    <td>Chicago → Detroit</td>
                    <td><i className="bx bx-map-pin me-1"></i>Indiana</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-warning" style={{ width: '45%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-warning">Delayed</span></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">VOL-567</td>
                    <td>Alice Brown</td>
                    <td>Miami → Orlando</td>
                    <td><i className="bx bx-map-pin me-1"></i>Fort Lauderdale</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '80%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-primary">In Transit</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="col-xl-6 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Active Shipments</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="activeShipmentsOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="activeShipmentsOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Shipment ID</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>ETA</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-semibold">#SH-4521</td>
                    <td><i className="bx bx-map-pin me-1 text-muted"></i>New York, NY</td>
                    <td><i className="bx bx-map-pin me-1 text-success"></i>Boston, MA</td>
                    <td>2 hours</td>
                    <td><span className="badge bg-label-primary">In Transit</span></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">#SH-4522</td>
                    <td><i className="bx bx-map-pin me-1 text-muted"></i>Los Angeles, CA</td>
                    <td><i className="bx bx-map-pin me-1 text-success"></i>San Diego, CA</td>
                    <td>Completed</td>
                    <td><span className="badge bg-label-success">Delivered</span></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">#SH-4523</td>
                    <td><i className="bx bx-map-pin me-1 text-muted"></i>Chicago, IL</td>
                    <td><i className="bx bx-map-pin me-1 text-success"></i>Detroit, MI</td>
                    <td>5 hours</td>
                    <td><span className="badge bg-label-warning">Delayed</span></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">#SH-4524</td>
                    <td><i className="bx bx-map-pin me-1 text-muted"></i>Miami, FL</td>
                    <td><i className="bx bx-map-pin me-1 text-success"></i>Orlando, FL</td>
                    <td>1 hour</td>
                    <td><span className="badge bg-label-primary">In Transit</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
