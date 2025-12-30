import React from 'react';

const Footer= () => {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          © {new Date().getFullYear()} Frest. All Rights Reserved. Sanjana
        </div>
        <div>
          <a href="https://1.envato.market/frest_admin" target="_blank" className="footer-link me-4">License</a>
          <a href="https://pixinvent.com/" target="_blank" className="footer-link me-4">More Themes</a>
          <a href="https://pixinvent.com/demo/frest-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
          <a href="https://pixinvent.com/demo/frest-html-admin-template/documentation/support.html" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
