// Route Configuration
// This file contains all route paths and metadata for the application

export const routeConfig = {
  // Dashboard Routes
  dashboard: {
    analytics: '/',
    analyticsDash: '/dashboard',
    ecommerce: '/ecommerce-dashboard',
    academy: '/academy-dashboard',
    logistics: '/logistics-dashboard'
  },

  // User Management Routes
  users: {
    list: '/user-list',
    view: '/user-view/:id',
    viewById: (id) => `/user-view/${id}`
  },

  // E-commerce Routes
  ecommerce: {
    products: '/product-list',
    orders: '/order-list'
  },

  // Apps Routes
  apps: {
    calendar: '/calendar',
    email: '/email',
    chat: '/chat',
    kanban: '/kanban'
  },

  // UI Components Routes
  components: {
    cards: '/cards',
    uiElements: '/ui-elements'
  },

  // Forms & Tables Routes
  pages: {
    forms: '/forms',
    tables: '/tables'
  },

  // Authentication Routes
  auth: {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    twoSteps: '/two-steps',
    verifyEmail: '/verify-email'
  },

  // Error Routes
  error: {
    notFound: '*'
  }
};

// Route Metadata (for navigation, breadcrumbs, etc.)
export const routeMetadata = {
  '/': { title: 'Analytics Dashboard', icon: 'bx-home-circle', category: 'Dashboard' },
  '/dashboard': { title: 'Analytics Dashboard', icon: 'bx-home-circle', category: 'Dashboard' },
  '/ecommerce-dashboard': { title: 'eCommerce Dashboard', icon: 'bx-cart', category: 'Dashboard' },
  '/academy-dashboard': { title: 'Academy Dashboard', icon: 'bx-book-open', category: 'Dashboard' },
  '/logistics-dashboard': { title: 'Logistics Dashboard', icon: 'bx-car', category: 'Dashboard' },
  
  '/user-list': { title: 'User List', icon: 'bx-user', category: 'Users' },
  '/user-view/:id': { title: 'User Details', icon: 'bx-user', category: 'Users' },
  
  '/product-list': { title: 'Products', icon: 'bx-box', category: 'E-commerce' },
  '/order-list': { title: 'Orders', icon: 'bx-shopping-bag', category: 'E-commerce' },
  
  '/calendar': { title: 'Calendar', icon: 'bx-calendar', category: 'Apps' },
  '/email': { title: 'Email', icon: 'bx-envelope', category: 'Apps' },
  '/chat': { title: 'Chat', icon: 'bx-chat', category: 'Apps' },
  '/kanban': { title: 'Kanban', icon: 'bx-grid', category: 'Apps' },
  
  '/cards': { title: 'Cards', icon: 'bx-collection', category: 'Components' },
  '/ui-elements': { title: 'UI Elements', icon: 'bx-box', category: 'Components' },
  
  '/forms': { title: 'Forms', icon: 'bx-detail', category: 'Forms & Tables' },
  '/tables': { title: 'Tables', icon: 'bx-table', category: 'Forms & Tables' },
  
  '/login': { title: 'Login', icon: 'bx-log-in', category: 'Authentication' },
  '/register': { title: 'Register', icon: 'bx-user-plus', category: 'Authentication' },
  '/forgot-password': { title: 'Forgot Password', icon: 'bx-lock-open-alt', category: 'Authentication' },
  '/reset-password': { title: 'Reset Password', icon: 'bx-lock', category: 'Authentication' },
  '/two-steps': { title: 'Two-Step Verification', icon: 'bx-shield', category: 'Authentication' },
  '/verify-email': { title: 'Verify Email', icon: 'bx-envelope-open', category: 'Authentication' }
};

// Public routes (no authentication required)
export const publicRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/two-steps',
  '/verify-email'
];

// Protected routes (authentication required)
export const protectedRoutes = [
  '/',
  '/dashboard',
  '/ecommerce-dashboard',
  '/academy-dashboard',
  '/logistics-dashboard',
  '/user-list',
  '/user-view/:id',
  '/product-list',
  '/order-list',
  '/calendar',
  '/email',
  '/chat',
  '/kanban',
  '/cards',
  '/ui-elements',
  '/forms',
  '/tables'
];

export default routeConfig;
