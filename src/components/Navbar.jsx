import React from 'react';

const Navbar = () => {
  return (
    <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
      <div className="container-xxl">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="#">
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          {/* Search */}
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a className="nav-item nav-link search-toggler px-0" href="#">
                <i className="bx bx-search-alt bx-sm"></i>
                <span className="d-none d-md-inline-block">Search (Ctrl+/)</span>
              </a>
            </div>
          </div>
          {/* /Search */}

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Language */}
            <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                <i className='bx bx-globe bx-sm'></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#" data-language="en" data-text-direction="ltr">
                    <span className="align-middle">English</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" data-language="fr" data-text-direction="ltr">
                    <span className="align-middle">French</span>
                  </a>
                </li>
              </ul>
            </li>

            {/* Notifications */}
            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                <i className="bx bx-bell bx-sm"></i>
                <span className="badge bg-danger rounded-pill">5</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-header">
                  <span className="badge rounded-pill bg-primary">8</span>
                  Notifications
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img src="https://demos.pixinvent.com/frest-html-admin-template/assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Congratulation John!</h6>
                        <p className="mb-0">Won the monthly best seller gold badge</p>
                        <small className="text-muted">1h ago</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-offline">
                          <img src="https://demos.pixinvent.com/frest-html-admin-template/assets/img/avatars/2.png" alt="" className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">New user registered</h6>
                        <p className="mb-0">Client has registered</p>
                        <small className="text-muted">2h ago</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item text-center text-primary" href="#">View all</a>
                </li>
              </ul>
            </li>

            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src="https://demos.pixinvent.com/frest-html-admin-template/assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img src="https://demos.pixinvent.com/frest-html-admin-template/assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">John Doe</span>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user me-2"></i>
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
