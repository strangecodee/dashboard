import React from 'react';

const AcademyDashboard = () => {
  const stats = [
    { title: 'Total Courses', value: '124', change: '+12', icon: 'bx-book-open', color: 'primary' },
    { title: 'Active Students', value: '2,847', change: '+245', icon: 'bx-user', color: 'success' },
    { title: 'Completed', value: '1,234', change: '+89', icon: 'bx-check-circle', color: 'info' },
    { title: 'Certificates', value: '892', change: '+54', icon: 'bx-award', color: 'warning' }
  ];

  return (
    <div>
      <h4 className="fw-bold py-3 mb-4">Academy Dashboard</h4>
      
      {/* Learning Overview */}
      <div className="row mb-4">
        <div className="col-xl-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Learning Overview</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="learningOverviewOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="learningOverviewOptions">
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
                        <i className="bx bx-book-open fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">Total Courses</h6>
                      <small className="text-muted">124 courses</small>
                    </div>
                    <div className="ms-auto text-end">
                      <h4 className="mb-0">124</h4>
                      <small className="text-success">+12</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="bx bx-user fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">Active Students</h6>
                      <small className="text-muted">8,540 total</small>
                    </div>
                    <div className="ms-auto text-end">
                      <h4 className="mb-0">3,285</h4>
                      <small className="text-success">+245</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <span className="avatar-initial rounded bg-label-info">
                        <i className="bx bx-check-circle fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">Completed Courses</h6>
                      <small className="text-muted">This month</small>
                    </div>
                    <div className="ms-auto text-end">
                      <h4 className="mb-0">1,234</h4>
                      <small className="text-success">+89</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <span className="avatar-initial rounded bg-label-warning">
                        <i className="bx bx-award fs-4"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">Certificates Issued</h6>
                      <small className="text-muted">This month</small>
                    </div>
                    <div className="ms-auto text-end">
                      <h4 className="mb-0">892</h4>
                      <small className="text-success">+54</small>
                    </div>
                  </div>
                </div>
              </div>
              <div id="learningOverviewChart"></div>
            </div>
          </div>
        </div>
        
        <div className="col-xl-4 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Course Categories</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="courseCategoriesOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="courseCategoriesOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">Development</h6>
                  <small className="text-muted">42 courses</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">42%</h4>
                  <small className="text-success">+5%</small>
                </div>
              </div>
              <div className="progress mb-4" style={{ height: '12px' }}>
                <div className="progress-bar bg-primary" style={{ width: '42%' }}></div>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">Design</h6>
                  <small className="text-muted">28 courses</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">28%</h4>
                  <small className="text-success">+3%</small>
                </div>
              </div>
              <div className="progress mb-4" style={{ height: '12px' }}>
                <div className="progress-bar bg-success" style={{ width: '28%' }}></div>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">Business</h6>
                  <small className="text-muted">18 courses</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">18%</h4>
                  <small className="text-danger">-2%</small>
                </div>
              </div>
              <div className="progress mb-4" style={{ height: '12px' }}>
                <div className="progress-bar bg-info" style={{ width: '18%' }}></div>
              </div>
              
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="mb-0">Marketing</h6>
                  <small className="text-muted">12 courses</small>
                </div>
                <div className="text-end">
                  <h4 className="mb-0">12%</h4>
                  <small className="text-success">+4%</small>
                </div>
              </div>
              <div className="progress" style={{ height: '12px' }}>
                <div className="progress-bar bg-warning" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popular Courses & Learning Activity */}
      <div className="row mb-4">
        <div className="col-xl-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Popular Courses</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="popularCoursesOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="popularCoursesOptions">
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
                    <th>Course</th>
                    <th>Instructor</th>
                    <th>Students</th>
                    <th>Rating</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="bx bx-book"></i>
                          </span>
                        </div>
                        <div>Web Development Bootcamp</div>
                      </div>
                    </td>
                    <td>John Doe</td>
                    <td>1,247</td>
                    <td>
                      <i className="bx bx-star text-warning"></i>
                      4.8
                    </td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial rounded bg-label-success">
                            <i className="bx bx-data"></i>
                          </span>
                        </div>
                        <div>Data Science & Machine Learning</div>
                      </div>
                    </td>
                    <td>Jane Smith</td>
                    <td>892</td>
                    <td>
                      <i className="bx bx-star text-warning"></i>
                      4.9
                    </td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial rounded bg-label-info">
                            <i className="bx bx-palette"></i>
                          </span>
                        </div>
                        <div>UI/UX Design Masterclass</div>
                      </div>
                    </td>
                    <td>Bob Johnson</td>
                    <td>1,523</td>
                    <td>
                      <i className="bx bx-star text-warning"></i>
                      4.7
                    </td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial rounded bg-label-warning">
                            <i className="bx bx-megaphone"></i>
                          </span>
                        </div>
                        <div>Digital Marketing Strategy</div>
                      </div>
                    </td>
                    <td>Alice Brown</td>
                    <td>734</td>
                    <td>
                      <i className="bx bx-star text-warning"></i>
                      4.6
                    </td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-warning" style={{ width: '45%' }}></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="col-xl-4 mb-4">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Learning Activity</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="learningActivityOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="learningActivityOptions">
                  <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                  <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                  <a className="dropdown-item" href="javascript:void(0);">Share</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="bx bx-video"></i>
                      </span>
                    </div>
                    <span>Video Lessons</span>
                  </div>
                  <span className="fw-semibold">1,245</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="bx bx-file"></i>
                      </span>
                    </div>
                    <span>Assignments</span>
                  </div>
                  <span className="fw-semibold">892</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2">
                      <span className="avatar-initial rounded bg-label-info">
                        <i className="bx bx-test-tube"></i>
                      </span>
                    </div>
                    <span>Quizzes</span>
                  </div>
                  <span className="fw-semibold">567</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-info" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2">
                      <span className="avatar-initial rounded bg-label-warning">
                        <i className="bx bx-message-square"></i>
                      </span>
                    </div>
                    <span>Discussions</span>
                  </div>
                  <span className="fw-semibold">1,523</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Students */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Recent Students</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" id="recentStudentsOptions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="recentStudentsOptions">
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
                    <th>Student</th>
                    <th>Course</th>
                    <th>Enrolled</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/1.png" alt="avatar" width="32" />
                        </div>
                        <div>Emma Wilson</div>
                      </div>
                    </td>
                    <td>Web Development</td>
                    <td>2 days ago</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '15%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-primary">Active</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/2.png" alt="avatar" width="32" />
                        </div>
                        <div>Michael Chen</div>
                      </div>
                    </td>
                    <td>Data Science</td>
                    <td>5 days ago</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '42%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-primary">Active</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/3.png" alt="avatar" width="32" />
                        </div>
                        <div>Sarah Anderson</div>
                      </div>
                    </td>
                    <td>UI/UX Design</td>
                    <td>1 week ago</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '78%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-primary">Active</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img src="./assets/img/avatars/4.png" alt="avatar" width="32" />
                        </div>
                        <div>David Martinez</div>
                      </div>
                    </td>
                    <td>Digital Marketing</td>
                    <td>2 weeks ago</td>
                    <td>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-success" style={{ width: '95%' }}></div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-success">Completed</span></td>
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

export default AcademyDashboard;
