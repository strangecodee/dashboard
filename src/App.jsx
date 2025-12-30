import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Layout from './layouts/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import UserList from './pages/UserList.jsx';
import UserView from './pages/UserView.jsx';
import ProductList from './pages/ProductList.jsx';
import OrderList from './pages/OrderList.jsx';
import Calendar from './pages/Calendar.jsx';
import Email from './pages/Email.jsx';
import Chat from './pages/Chat.jsx';
import Kanban from './pages/Kanban.jsx';
import EcommerceDashboard from './pages/EcommerceDashboard.jsx';
import AcademyDashboard from './pages/AcademyDashboard.jsx';
import LogisticsDashboard from './pages/LogisticsDashboard.jsx';
import AuthLogin from './pages/AuthLogin.jsx';
import AuthRegister from './pages/AuthRegister.jsx';
import AuthForgotPassword from './pages/AuthForgotPassword.jsx';
import NotFound from './pages/NotFound.jsx';

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
                    <Route path="/" element={<Layout />}>
                      <Route index element={<Dashboard />} />
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="ecommerce-dashboard" element={<EcommerceDashboard />} />
                      <Route path="academy-dashboard" element={<AcademyDashboard />} />
                      <Route path="logistics-dashboard" element={<LogisticsDashboard />} />
                      
                      {/* User Management */}
                      <Route path="user-list" element={<UserList />} />
                      <Route path="user-view/:id" element={<UserView />} />
                      
                      {/* E-commerce */}
                      <Route path="product-list" element={<ProductList />} />
                      <Route path="order-list" element={<OrderList />} />
                      
                      {/* Apps */}
                      <Route path="calendar" element={<Calendar />} />
                      <Route path="email" element={<Email />} />
                      <Route path="chat" element={<Chat />} />
                      <Route path="kanban" element={<Kanban />} />
                      
                      {/* Authentication */}
                      <Route path="login" element={<AuthLogin />} />
                      <Route path="register" element={<AuthRegister />} />
                      <Route path="forgot-password" element={<AuthForgotPassword />} />
                      
                      {/* 404 */}
                      <Route path="*" element={<NotFound />} />
                    </Route>
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
