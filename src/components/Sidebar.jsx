import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname === `/${path}`;
  };

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo">
            <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>icon</title>
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                  <stop stopColor="#5A8DEE" offset="0%"></stop>
                  <stop stopColor="#699AF9" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
                  <stop stopColor="#FDAC41" offset="0%"></stop>
                  <stop stopColor="#E38100" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-667.000000, -290.000000)">
                  <g transform="translate(519.000000, 244.000000)">
                    <g transform="translate(148.000000, 42.000000)">
                      <g transform="translate(0.000000, 4.000000)">
                        <path d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z" fill="#4880EA"></path>
                        <path d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z" fill="url(#linearGradient-1)"></path>
                        <rect fill="url(#linearGradient-2)" x="0" y="0" width="7.68181818" height="7.68181818"></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span className="app-brand-text demo menu-text fw-bold ms-2">Frest</span>
        </Link>

        <a href="#" className="layout-menu-toggle menu-link text-large ms-auto" onClick={(e) => e.preventDefault()}>
          <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
          <i className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-divider mt-0"></div>
      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* Dashboards */}
        <li className={`menu-item ${isActive('/') || isActive('/dashboard') || isActive('/ecommerce-dashboard') || isActive('/academy-dashboard') || isActive('/logistics-dashboard') ? 'active open' : ''}`}>
          <a href="#" className="menu-link menu-toggle" onClick={(e) => e.preventDefault()}>
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div>Dashboards</div>
            <div className="badge bg-primary rounded-pill ms-auto">4</div>
          </a>
          <ul className="menu-sub">
            <li className={`menu-item ${isActive('/') || isActive('/dashboard') ? 'active' : ''}`}>
              <Link to="/dashboard" className="menu-link">
                <div>Analytics</div>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/ecommerce-dashboard') ? 'active' : ''}`}>
              <Link to="/ecommerce-dashboard" className="menu-link">
                <div>eCommerce</div>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/logistics-dashboard') ? 'active' : ''}`}>
              <Link to="/logistics-dashboard" className="menu-link">
                <div>Logistics</div>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/academy-dashboard') ? 'active' : ''}`}>
              <Link to="/academy-dashboard" className="menu-link">
                <div>Academy</div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Apps & Pages */}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Apps &amp; Pages</span>
        </li>

        {/* E-commerce */}
        <li className={`menu-item ${isActive('/product-list') || isActive('/order-list') ? 'active open' : ''}`}>
          <a href="#" className="menu-link menu-toggle" onClick={(e) => e.preventDefault()}>
            <i className="menu-icon tf-icons bx bx-cart"></i>
            <div>eCommerce</div>
          </a>
          <ul className="menu-sub">
            <li className={`menu-item ${isActive('/product-list') ? 'active' : ''}`}>
              <Link to="/product-list" className="menu-link">
                <div>Product List</div>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/order-list') ? 'active' : ''}`}>
              <Link to="/order-list" className="menu-link">
                <div>Order List</div>
              </Link>
            </li>
          </ul>
        </li>

        {/* User Management */}
        <li className={`menu-item ${isActive('/user-list') ? 'active open' : ''}`}>
          <a href="#" className="menu-link menu-toggle" onClick={(e) => e.preventDefault()}>
            <i className="menu-icon tf-icons bx bx-user"></i>
            <div>Users</div>
          </a>
          <ul className="menu-sub">
            <li className={`menu-item ${isActive('/user-list') ? 'active' : ''}`}>
              <Link to="/user-list" className="menu-link">
                <div>List</div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Apps */}
        <li className={`menu-item ${isActive('/calendar') ? 'active' : ''}`}>
          <Link to="/calendar" className="menu-link">
            <i className="menu-icon tf-icons bx bx-calendar"></i>
            <div>Calendar</div>
          </Link>
        </li>

        <li className={`menu-item ${isActive('/email') ? 'active' : ''}`}>
          <Link to="/email" className="menu-link">
            <i className="menu-icon tf-icons bx bx-envelope"></i>
            <div>Email</div>
          </Link>
        </li>

        <li className={`menu-item ${isActive('/chat') ? 'active' : ''}`}>
          <Link to="/chat" className="menu-link">
            <i className="menu-icon tf-icons bx bx-chat"></i>
            <div>Chat</div>
          </Link>
        </li>

        <li className={`menu-item ${isActive('/kanban') ? 'active' : ''}`}>
          <Link to="/kanban" className="menu-link">
            <i className="menu-icon tf-icons bx bx-grid"></i>
            <div>Kanban</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
