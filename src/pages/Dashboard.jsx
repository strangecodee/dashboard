import React from 'react';

const Dashboard = () => {
  return (
    <div className="row">
      {/* Website Analytics*/}
      <div className="col-lg-6 col-md-12 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Website Analytics</h5>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="analyticsOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="analyticsOptions">
                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div>
          </div>
          <div className="card-body pb-2">
            <div className="d-flex justify-content-around align-items-center flex-wrap mb-4">
              <div className="user-analytics text-center me-2">
                <i className="bx bx-user me-1"></i>
                <span>Users</span>
                <div className="d-flex align-items-center mt-2">
                  <div className="chart-report" data-color="success" data-series="35"></div>
                  <h3 className="mb-0">61K</h3>
                </div>
              </div>
              <div className="sessions-analytics text-center me-2">
                <i className="bx bx-pie-chart-alt me-1"></i>
                <span>Sessions</span>
                <div className="d-flex align-items-center mt-2">
                  <div className="chart-report" data-color="warning" data-series="76"></div>
                  <h3 className="mb-0">92K</h3>
                </div>
              </div>
              <div className="bounce-rate-analytics text-center">
                <i className="bx bx-trending-up me-1"></i>
                <span>Bounce Rate</span>
                <div className="d-flex align-items-center mt-2">
                  <div className="chart-report" data-color="danger" data-series="65"></div>
                  <h3 className="mb-0">72.6%</h3>
                </div>
              </div>
            </div>
            <div id="analyticsBarChart"></div>
          </div>
        </div>

      </div>

      <div className="col-lg-6 col-md-12">
        <div className="row">
          {/* Referral Chart*/}
          <div className="col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h2 className="mb-1">$32,690</h2>
                <span className="text-muted">Referral 40%</span>
                <div id="referralLineChart"></div>
              </div>
            </div>
          </div>
          {/* Conversion Chart*/}
          <div className="col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between pb-3">
                <div className="conversion-title">
                  <h5 className="card-title mb-1">Conversion</h5>
                  <p className="mb-0 text-muted">60%
                    <i className="bx bx-chevron-up text-success"></i>
                  </p>
                </div>
                <h2 className="mb-0">89k</h2>
              </div>
              <div className="card-body">
                <div id="conversionBarchart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Revenue Statistics</h5>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="revenueStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="revenueStatistics">
                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div>
          </div>
          <div className="card-body pb-0">
            <div id="revenueStatisticsChart"></div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Recent Transactions</h5>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="recentTransactions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="recentTransactions">
                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <div className="avatar avatar-sm avatar-online me-3">
                    <span className="avatar-initial rounded-circle bg-label-primary">L</span>
                  </div>
                  <div>
                    <p className="mb-0">Netflix</p>
                    <small className="text-muted">Subscription</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">- $24.99</p>
                  <small className="text-muted">Yesterday</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <div className="avatar avatar-sm avatar-online me-3">
                    <span className="avatar-initial rounded-circle bg-label-success">G</span>
                  </div>
                  <div>
                    <p className="mb-0">Google Ads</p>
                    <small className="text-muted">Advertising</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">- $149.99</p>
                  <small className="text-muted">11 Nov</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <div className="avatar avatar-sm avatar-online me-3">
                    <span className="avatar-initial rounded-circle bg-label-danger">M</span>
                  </div>
                  <div>
                    <p className="mb-0">Mastercard</p>
                    <small className="text-muted">Wallet</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">- $32.99</p>
                  <small className="text-muted">8 Nov</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <div className="avatar avatar-sm avatar-online me-3">
                    <span className="avatar-initial rounded-circle bg-label-warning">C</span>
                  </div>
                  <div>
                    <p className="mb-0">Airbnb</p>
                    <small className="text-muted">Housing</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">- $249.99</p>
                  <small className="text-muted">6 Nov</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <div className="avatar avatar-sm avatar-online me-3">
                    <span className="avatar-initial rounded-circle bg-label-info">T</span>
                  </div>
                  <div>
                    <p className="mb-0">Spotify</p>
                    <small className="text-muted">Entertainment</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">- $9.99</p>
                  <small className="text-muted">5 Nov</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Top Selling Products</h5>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="topSelling" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topSelling">
                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <img src="./assets/img/products/1.png" alt="product" className="img-fluid me-3" width="40" />
                  <div>
                    <p className="mb-0">iPhone 14</p>
                    <small className="text-muted">Apple</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">$1,299</p>
                  <small className="text-muted">124 sold</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <img src="./assets/img/products/2.png" alt="product" className="img-fluid me-3" width="40" />
                  <div>
                    <p className="mb-0">Headphones</p>
                    <small className="text-muted">Beats</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">$299</p>
                  <small className="text-muted">85 sold</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <img src="./assets/img/products/3.png" alt="product" className="img-fluid me-3" width="40" />
                  <div>
                    <p className="mb-0">Nike Sport</p>
                    <small className="text-muted">Nike</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">$199</p>
                  <small className="text-muted">72 sold</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center pb-2">
                <div className="d-flex">
                  <img src="./assets/img/products/4.png" alt="product" className="img-fluid me-3" width="40" />
                  <div>
                    <p className="mb-0">PlayStation</p>
                    <small className="text-muted">Sony</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">$499</p>
                  <small className="text-muted">42 sold</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img src="./assets/img/products/5.png" alt="product" className="img-fluid me-3" width="40" />
                  <div>
                    <p className="mb-0">iMac</p>
                    <small className="text-muted">Apple</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">$2,999</p>
                  <small className="text-muted">15 sold</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Total Revenue</h5>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="totalRevenue" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="totalRevenue">
                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-around align-items-center mb-4">
              <div className="text-center">
                <p className="mb-2">Direct</p>
                <h5 className="mb-0">$24,580</h5>
                <small className="text-muted">+25%</small>
              </div>
              <div className="text-center">
                <p className="mb-2">Referral</p>
                <h5 className="mb-0">$18,240</h5>
                <small className="text-muted">+15%</small>
              </div>
              <div className="text-center">
                <p className="mb-2">Social</p>
                <h5 className="mb-0">$12,560</h5>
                <small className="text-muted">+10%</small>
              </div>
            </div>
            <div id="totalRevenueChart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
