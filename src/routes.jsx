import React from 'react';
import { Route } from 'react-router-dom';

// Layout
import Layout from './layouts/Layout.jsx';

// Dashboard Pages
import Dashboard from './pages/Dashboard.jsx';
import EcommerceDashboard from './pages/EcommerceDashboard.jsx';
import AcademyDashboard from './pages/AcademyDashboard.jsx';
import LogisticsDashboard from './pages/LogisticsDashboard.jsx';

// User Management
import UserList from './pages/UserList.jsx';
import UserView from './pages/UserView.jsx';

// E-commerce
import ProductList from './pages/ProductList.jsx';
import OrderList from './pages/OrderList.jsx';

// Apps
import Calendar from './pages/Calendar.jsx';
import Email from './pages/Email.jsx';
import Chat from './pages/Chat.jsx';
import Kanban from './pages/Kanban.jsx';

// UI Components
import Cards from './pages/Cards.jsx';
import UIElements from './pages/UIElements.jsx';

// Forms & Tables
import Forms from './pages/Forms.jsx';
import Tables from './pages/Tables.jsx';

// Authentication
import AuthLogin from './pages/AuthLogin.jsx';
import AuthRegister from './pages/AuthRegister.jsx';
import AuthForgotPassword from './pages/AuthForgotPassword.jsx';
import AuthResetPassword from './pages/AuthResetPassword.jsx';
import AuthTwoSteps from './pages/AuthTwoSteps.jsx';
import AuthVerifyEmail from './pages/AuthVerifyEmail.jsx';

// Additional Pages
import InvoiceList from './pages/InvoiceList.jsx';
import InvoicePreview from './pages/InvoicePreview.jsx';
import InvoiceEdit from './pages/InvoiceEdit.jsx';
import InvoiceAdd from './pages/InvoiceAdd.jsx';
import CustomerList from './pages/CustomerList.jsx';

// Error Pages
import NotFound from './pages/NotFound.jsx';

// Define all routes
const routes = (
  <Route path="/" element={<Layout />}>
    {/* Dashboard Routes */}
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="ecommerce-dashboard" element={<EcommerceDashboard />} />
    <Route path="academy-dashboard" element={<AcademyDashboard />} />
    <Route path="logistics-dashboard" element={<LogisticsDashboard />} />
    
    {/* User Management Routes */}
    <Route path="user-list" element={<UserList />} />
    <Route path="user-view/:id" element={<UserView />} />
    
    {/* E-commerce Routes */}
    <Route path="product-list" element={<ProductList />} />
    <Route path="order-list" element={<OrderList />} />
    
    {/* Apps Routes */}
    <Route path="calendar" element={<Calendar />} />
    <Route path="email" element={<Email />} />
    <Route path="chat" element={<Chat />} />
    <Route path="kanban" element={<Kanban />} />
    
    {/* UI Components Routes */}
    <Route path="cards" element={<Cards />} />
    <Route path="ui-elements" element={<UIElements />} />
    
    {/* Forms & Tables Routes */}
    <Route path="forms" element={<Forms />} />
    <Route path="tables" element={<Tables />} />
    
    {/* Authentication Routes */}
    <Route path="login" element={<AuthLogin />} />
    <Route path="register" element={<AuthRegister />} />
    <Route path="forgot-password" element={<AuthForgotPassword />} />
    <Route path="reset-password" element={<AuthResetPassword />} />
    <Route path="two-steps" element={<AuthTwoSteps />} />
    <Route path="verify-email" element={<AuthVerifyEmail />} />
    
    {/* Invoice Routes */}
    <Route path="invoice-list" element={<InvoiceList />} />
    <Route path="invoice-preview" element={<InvoicePreview />} />
    <Route path="invoice-edit" element={<InvoiceEdit />} />
    <Route path="invoice-add" element={<InvoiceAdd />} />
    
    {/* Customer Routes */}
    <Route path="customer-list" element={<CustomerList />} />
    
    {/* 404 Not Found Route */}
    <Route path="*" element={<NotFound />} />
  </Route>
);

export default routes;
