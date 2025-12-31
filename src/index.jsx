import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './index.css';
import './App.css';
// Import template CSS files
import '/assets/vendor/css/rtl/core-dark.css';
import '/assets/vendor/css/rtl/theme-default-dark.css';
import '/assets/css/demo.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';

// Set up the HTML element with proper classes
if (document.documentElement) {
  document.documentElement.classList.add('dark-style', 'layout-navbar-fixed', 'layout-menu-fixed', 'layout-compact');
  document.documentElement.setAttribute('dir', 'ltr');
  document.documentElement.setAttribute('data-theme', 'theme-default');
  document.documentElement.setAttribute('data-assets-path', '/assets/');
  document.documentElement.setAttribute('data-template', 'vertical-menu-template-dark');
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
