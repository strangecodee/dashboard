import React from 'react';

const EcommerceDashboard = () => {
  const stats = [
    { title: 'Sales', value: '$24,895', change: '+18.2%', icon: 'bx-trending-up', color: 'primary', isPositive: true },
    { title: 'Customers', value: '8,458', change: '+29.1%', icon: 'bx-user', color: 'success', isPositive: true },
    { title: 'Products', value: '2,450', change: '-12.6%', icon: 'bx-box', color: 'warning', isPositive: false },
    { title: 'Revenue', value: '$84,686', change: '+42.6%', icon: 'bx-dollar-circle', color: 'info', isPositive: true }
  ];

  return (
    <div>
      <h4 className="fw-bold py-3 mb-4">eCommerce Dashboard</h4>
      
      {/* Gamification Card */}
      <div className="row mb-4">
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card h-100">
            <div className="card-header">
              <h3 className="card-title mb-2">Congratulations John!</h3>
              <span className="d-block mb-4 text-nowrap">Best seller of the month</span>
            </div>
            <div className="card-body">
              <div className="row align-items-end">
                <div className="col-6">
                  <h1 className="display-6 text-primary mb-2 pt-4 pb-1">$89k</h1>
                  <small className="d-block mb-3">You have done 57.6% <br/>more sales today.</small>
                  <a href="javascript:void(0);" className="btn btn-sm btn-primary">View sales</a>
                </div>
                <div className="col-6">
                  <img src="./assets/img/illustrations/prize-dark.png" width="140" height="150" className="rounded-start" alt="View Sales" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi Radial Chart */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Visits of 2022</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="visitsOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="visitsOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div id="visitsRadialChart"></div>
            </div>
          </div>
        </div>

        {/* Statistics cards & Revenue Growth Chart */}
        <div className="col-lg-4 col-12">
          <div className="row">
            {/* Statistics Cards */}
            <div className="col-6 col-md-3 col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="avatar mx-auto mb-2">
                    <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-purchase-tag fs-4"></i></span>
                  </div>
                  <span className="d-block text-nowrap">Purchase</span>
                  <h2 className="mb-0">65</h2>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="avatar mx-auto mb-2">
                    <span className="avatar-initial rounded-circle bg-label-danger"><i className="bx bx-cart fs-4"></i></span>
                  </div>
                  <span className="d-block text-nowrap">Order</span>
                  <h2 className="mb-0">40</h2>
                </div>
              </div>
            </div>
            {/* Revenue Growth Chart */}
            <div className="col-12 col-md-6 col-lg-12 mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center pb-0">
                  <h5 className="card-title mb-0">Revenue Growth</h5>
                  <span>$25,980</span>
                </div>
                <div className="card-body pb-0">
                  <div id="revenueGrowthChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Weekly Order Summary */}
      <div className="row mb-4">
        <div className="col-xl-8 col-12 mb-4">
          <div className="card">
            <div className="row row-bordered m-0">
              {/* Order Summary */}
              <div className="col-md-8 col-12 px-0">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Weekly Order Summary</h5>
                  <div className="dropdown">
                    <button className="btn p-0" type="button" id="orderSummaryOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orderSummaryOptions">
                      <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                      <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                      <a className="dropdown-item" href="javascript:void(0);">Share</a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div id="orderSummaryChart"></div>
                </div>
              </div>
              {/* Sales History */}
              <div className="col-md-4 col-12 px-0">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Sales Overview</h5>
                  <div className="dropdown">
                    <button className="btn p-0" type="button" id="salesOverviewOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="salesOverviewOptions">
                      <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                      <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                      <a className="dropdown-item" href="javascript:void(0);">Share</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="salesHistoryChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Order Statistics */}
        <div className="col-xl-4 col-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center mb-4">
              <h5 className="card-title mb-0">Order Statistics</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="orderStatisticsOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orderStatisticsOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    <span className="avatar-initial rounded bg-label-primary">
                      <i className="bx bx-shopping-bag"></i>
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-0">Completed</h6>
                    <small className="text-muted">34 Orders</small>
                  </div>
                </div>
                <div className="text-end">
                  <h6 className="mb-0">126</h6>
                  <small className="text-muted">124</small>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    <span className="avatar-initial rounded bg-label-success">
                      <i className="bx bx-check-shield"></i>
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-0">Pending</h6>
                    <small className="text-muted">12 Orders</small>
                  </div>
                </div>
                <div className="text-end">
                  <h6 className="mb-0">84</h6>
                  <small className="text-muted">98</small>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    <span className="avatar-initial rounded bg-label-warning">
                      <i className="bx bx-shield"></i>
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-0">Processing</h6>
                    <small className="text-muted">25 Orders</small>
                  </div>
                </div>
                <div className="text-end">
                  <h6 className="mb-0">242</h6>
                  <small className="text-muted">124</small>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    <span className="avatar-initial rounded bg-label-danger">
                      <i className="bx bx-x-circle"></i>
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-0">Cancelled</h6>
                    <small className="text-muted">42 Orders</small>
                  </div>
                </div>
                <div className="text-end">
                  <h6 className="mb-0">84</h6>
                  <small className="text-muted">124</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Selling Products & Best Customers */}
      <div className="row">
        <div className="col-xl-6 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Top Selling Products</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="topSellingOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topSellingOptions">
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
                    <th>Product</th>
                    <th>Category</th>
                    <th>Sold</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/products/1.png" alt="product" width="32" />
                        </div>
                        <div>iPhone 14</div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>84k</td>
                    <td>$2,458</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/products/2.png" alt="product" width="32" />
                        </div>
                        <div>Headphones</div>
                      </div>
                    </td>
                    <td>Audio</td>
                    <td>42k</td>
                    <td>$1,254</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/products/3.png" alt="product" width="32" />
                        </div>
                        <div>Macbook Pro</div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>24k</td>
                    <td>$84,521</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/products/4.png" alt="product" width="32" />
                        </div>
                        <div>iPad</div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>12k</td>
                    <td>$5,421</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="col-xl-6 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Best Customers</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="bestCustomersOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="bestCustomersOptions">
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
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Order</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/1.png" alt="avatar" width="32" />
                        </div>
                        <div>John Doe</div>
                      </div>
                    </td>
                    <td>john@example.com</td>
                    <td>245</td>
                    <td>$2,458</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/2.png" alt="avatar" width="32" />
                        </div>
                        <div>Jane Smith</div>
                      </div>
                    </td>
                    <td>jane@example.com</td>
                    <td>186</td>
                    <td>$1,254</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/3.png" alt="avatar" width="32" />
                        </div>
                        <div>Bob Johnson</div>
                      </div>
                    </td>
                    <td>bob@example.com</td>
                    <td>142</td>
                    <td>$84,521</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/4.png" alt="avatar" width="32" />
                        </div>
                        <div>Alice Brown</div>
                      </div>
                    </td>
                    <td>alice@example.com</td>
                    <td>92</td>
                    <td>$5,421</td>
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

export default EcommerceDashboard;
