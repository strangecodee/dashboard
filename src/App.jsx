import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import routes from './routes.jsx';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <Sidebar />
            <div className="layout-page">
              <Navbar />
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                  <Routes>
                    {routes}
                  </Routes>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
