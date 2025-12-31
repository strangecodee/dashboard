// Mock API Service - Simulates backend responses
// This replaces real API calls with mock data for frontend-only development

import { sleep } from '../utils/helpers';

// Mock delay to simulate network requests (300ms)
const MOCK_DELAY = 300;

// Mock Data Storage
let usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', avatar: '/assets/img/avatars/1.png' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', avatar: '/assets/img/avatars/2.png' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'inactive', avatar: '/assets/img/avatars/3.png' },
];

let productsData = [
  { id: 1, name: 'Laptop Pro 15', category: 'Electronics', price: 1299, stock: 45, status: 'published', image: '/assets/img/products/1.jpg' },
  { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: 29, stock: 120, status: 'published', image: '/assets/img/products/2.jpg' },
  { id: 3, name: 'USB-C Hub', category: 'Accessories', price: 49, stock: 80, status: 'published', image: '/assets/img/products/3.jpg' },
  { id: 4, name: 'Mechanical Keyboard', category: 'Accessories', price: 89, stock: 35, status: 'draft', image: '/assets/img/products/4.jpg' },
];

let ordersData = [
  { id: 1001, customer: 'John Doe', date: '2024-12-28', total: 1328, status: 'delivered', items: 2 },
  { id: 1002, customer: 'Jane Smith', date: '2024-12-29', total: 78, status: 'processing', items: 2 },
  { id: 1003, customer: 'Bob Johnson', date: '2024-12-30', total: 1299, status: 'shipped', items: 1 },
  { id: 1004, customer: 'Alice Brown', date: '2024-12-31', total: 89, status: 'pending', items: 1 },
];

let mockToken = 'mock-jwt-token-12345';
let isLoggedIn = false;

/**
 * Mock Authentication
 */
export const mockAuth = {
  login: async (credentials) => {
    await sleep(MOCK_DELAY);
    
    // Simple mock validation
    if (credentials.email && credentials.password) {
      isLoggedIn = true;
      return {
        success: true,
        token: mockToken,
        user: {
          id: 1,
          name: 'John Doe',
          email: credentials.email,
          role: 'admin',
          avatar: '/assets/img/avatars/1.png'
        }
      };
    }
    
    throw new Error('Invalid credentials');
  },

  register: async (userData) => {
    await sleep(MOCK_DELAY);
    
    const newUser = {
      id: mockUsers.length + 1,
      ...userData,
      status: 'active',
      role: 'user'
    };
    
    mockUsers.push(newUser);
    
    return {
      success: true,
      message: 'Registration successful',
      user: newUser
    };
  },

  logout: async () => {
    await sleep(MOCK_DELAY);
    isLoggedIn = false;
    return { success: true, message: 'Logged out successfully' };
  },

  forgotPassword: async (email) => {
    await sleep(MOCK_DELAY);
    return { success: true, message: 'Password reset email sent' };
  },

  resetPassword: async (data) => {
    await sleep(MOCK_DELAY);
    return { success: true, message: 'Password reset successful' };
  },

  verifyEmail: async (token) => {
    await sleep(MOCK_DELAY);
    return { success: true, message: 'Email verified successfully' };
  },

  getCurrentUser: () => {
    if (isLoggedIn) {
      return {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
        avatar: '/assets/img/avatars/1.png'
      };
    }
    return null;
  },

  isAuthenticated: () => isLoggedIn
};

/**
 * Mock Users API
 */
export const mockUsers = {
  getAll: async (params = {}) => {
    await sleep(MOCK_DELAY);
    
    let filtered = [...usersData];
    
    // Apply filters
    if (params.search) {
      filtered = filtered.filter(u => 
        u.name.toLowerCase().includes(params.search.toLowerCase()) ||
        u.email.toLowerCase().includes(params.search.toLowerCase())
      );
    }
    
    if (params.role) {
      filtered = filtered.filter(u => u.role === params.role);
    }
    
    if (params.status) {
      filtered = filtered.filter(u => u.status === params.status);
    }
    
    return {
      data: filtered,
      total: filtered.length,
      page: params.page || 1,
      pageSize: params.pageSize || 10
    };
  },

  getById: async (id) => {
    await sleep(MOCK_DELAY);
    const user = usersData.find(u => u.id === parseInt(id));
    if (!user) throw new Error('User not found');
    return user;
  },

  create: async (userData) => {
    await sleep(MOCK_DELAY);
    const newUser = {
      id: usersData.length + 1,
      ...userData,
      status: 'active'
    };
    usersData.push(newUser);
    return newUser;
  },

  update: async (id, userData) => {
    await sleep(MOCK_DELAY);
    const index = usersData.findIndex(u => u.id === parseInt(id));
    if (index === -1) throw new Error('User not found');
    usersData[index] = { ...usersData[index], ...userData };
    return usersData[index];
  },

  delete: async (id) => {
    await sleep(MOCK_DELAY);
    const index = usersData.findIndex(u => u.id === parseInt(id));
    if (index === -1) throw new Error('User not found');
    usersData.splice(index, 1);
    return { success: true, message: 'User deleted' };
  }
};

/**
 * Mock Products API
 */
export const mockProducts = {
  getAll: async (params = {}) => {
    await sleep(MOCK_DELAY);
    
    let filtered = [...productsData];
    
    if (params.search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(params.search.toLowerCase())
      );
    }
    
    if (params.category) {
      filtered = filtered.filter(p => p.category === params.category);
    }
    
    if (params.status) {
      filtered = filtered.filter(p => p.status === params.status);
    }
    
    return {
      data: filtered,
      total: filtered.length,
      page: params.page || 1,
      pageSize: params.pageSize || 10
    };
  },

  getById: async (id) => {
    await sleep(MOCK_DELAY);
    const product = productsData.find(p => p.id === parseInt(id));
    if (!product) throw new Error('Product not found');
    return product;
  },

  create: async (productData) => {
    await sleep(MOCK_DELAY);
    const newProduct = {
      id: productsData.length + 1,
      ...productData,
      status: 'published'
    };
    productsData.push(newProduct);
    return newProduct;
  },

  update: async (id, productData) => {
    await sleep(MOCK_DELAY);
    const index = productsData.findIndex(p => p.id === parseInt(id));
    if (index === -1) throw new Error('Product not found');
    productsData[index] = { ...productsData[index], ...productData };
    return productsData[index];
  },

  delete: async (id) => {
    await sleep(MOCK_DELAY);
    const index = productsData.findIndex(p => p.id === parseInt(id));
    if (index === -1) throw new Error('Product not found');
    productsData.splice(index, 1);
    return { success: true, message: 'Product deleted' };
  }
};

/**
 * Mock Orders API
 */
export const mockOrders = {
  getAll: async (params = {}) => {
    await sleep(MOCK_DELAY);
    
    let filtered = [...ordersData];
    
    if (params.status) {
      filtered = filtered.filter(o => o.status === params.status);
    }
    
    if (params.customer) {
      filtered = filtered.filter(o => 
        o.customer.toLowerCase().includes(params.customer.toLowerCase())
      );
    }
    
    return {
      data: filtered,
      total: filtered.length,
      page: params.page || 1,
      pageSize: params.pageSize || 10
    };
  },

  getById: async (id) => {
    await sleep(MOCK_DELAY);
    const order = ordersData.find(o => o.id === parseInt(id));
    if (!order) throw new Error('Order not found');
    return order;
  },

  create: async (orderData) => {
    await sleep(MOCK_DELAY);
    const newOrder = {
      id: ordersData.length + 1001,
      ...orderData,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    ordersData.push(newOrder);
    return newOrder;
  },

  update: async (id, orderData) => {
    await sleep(MOCK_DELAY);
    const index = ordersData.findIndex(o => o.id === parseInt(id));
    if (index === -1) throw new Error('Order not found');
    ordersData[index] = { ...ordersData[index], ...orderData };
    return ordersData[index];
  },

  updateStatus: async (id, status) => {
    await sleep(MOCK_DELAY);
    const index = ordersData.findIndex(o => o.id === parseInt(id));
    if (index === -1) throw new Error('Order not found');
    ordersData[index].status = status;
    return ordersData[index];
  }
};

/**
 * Mock Dashboard Stats
 */
export const mockDashboard = {
  getAnalytics: async () => {
    await sleep(MOCK_DELAY);
    return {
      totalSales: 48586,
      totalRevenue: 97534,
      totalCustomers: 3450,
      totalOrders: 2845,
      salesGrowth: 28.5,
      revenueGrowth: 42.3,
      customersGrowth: 15.8,
      ordersGrowth: 18.2
    };
  },

  getEcommerce: async () => {
    await sleep(MOCK_DELAY);
    return {
      sales: 24895,
      customers: 8458,
      products: 2450,
      revenue: 84686,
      salesChange: 18.2,
      customersChange: 29.1,
      productsChange: -12.6,
      revenueChange: 42.6
    };
  },

  getLogistics: async () => {
    await sleep(MOCK_DELAY);
    return {
      activeVehicles: 45,
      deliveriesInProgress: 128,
      completedToday: 342,
      onTimeDelivery: 94.5
    };
  },

  getAcademy: async () => {
    await sleep(MOCK_DELAY);
    return {
      totalCourses: 124,
      totalStudents: 8540,
      activeLearners: 3285,
      completionRate: 78.5
    };
  }
};

export default {
  auth: mockAuth,
  users: mockUsers,
  products: mockProducts,
  orders: mockOrders,
  dashboard: mockDashboard
};
