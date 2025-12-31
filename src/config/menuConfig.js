const menuConfig = [
  {
    title: 'Dashboards',
    key: 'dashboards',
    icon: 'bx bx-home-circle',
    badge: { text: '5', class: 'bg-primary rounded-pill ms-auto' },
    children: [
      { title: 'Analytics', key: 'analytics', path: '/dashboard', i18n: 'Analytics' },
      { title: 'eCommerce', key: 'ecommerce', path: '/ecommerce-dashboard', i18n: 'eCommerce' },
      { title: 'Logistics', key: 'logistics', path: '/logistics-dashboard', i18n: 'Logistics' },
      { title: 'Academy', key: 'academy', path: '/academy-dashboard', i18n: 'Academy' }
    ]
  },
  {
    title: 'Layouts',
    key: 'layouts',
    icon: 'bx bx-layout',
    children: [
      { title: 'Collapsed menu', key: 'collapsed-menu', path: '#', i18n: 'Collapsed menu' },
      { title: 'Content navbar', key: 'content-navbar', path: '#', i18n: 'Content navbar' },
      { title: 'Content nav + Sidebar', key: 'content-nav-sidebar', path: '#', i18n: 'Content nav + Sidebar', active: true },
      { title: 'Horizontal', key: 'horizontal', path: '#', i18n: 'Horizontal' },
      { title: 'Without menu', key: 'without-menu', path: '#', i18n: 'Without menu' },
      { title: 'Without navbar', key: 'without-navbar', path: '#', i18n: 'Without navbar' },
      { title: 'Fluid', key: 'fluid', path: '#', i18n: 'Fluid' },
      { title: 'Container', key: 'container', path: '#', i18n: 'Container' },
      { title: 'Blank', key: 'blank', path: '#', i18n: 'Blank' }
    ]
  },
  {
    title: 'Front Pages',
    key: 'front-pages',
    icon: 'bx bx-store',
    children: [
      { title: 'Landing', key: 'landing', path: '#', i18n: 'Landing', target: '_blank' },
      { title: 'Pricing', key: 'pricing', path: '#', i18n: 'Pricing', target: '_blank' },
      { title: 'Payment', key: 'payment', path: '#', i18n: 'Payment', target: '_blank' },
      { title: 'Checkout', key: 'checkout', path: '#', i18n: 'Checkout', target: '_blank' },
      { title: 'Help Center', key: 'help-center', path: '#', i18n: 'Help Center', target: '_blank' }
    ]
  },
  {
    header: 'Apps & Pages',
    key: 'apps-pages-header'
  },
  {
    title: 'Email',
    key: 'email',
    path: '/email',
    icon: 'bx bx-envelope',
    i18n: 'Email'
  },
  {
    title: 'Chat',
    key: 'chat',
    path: '/chat',
    icon: 'bx bx-chat',
    i18n: 'Chat'
  },
  {
    title: 'Calendar',
    key: 'calendar',
    path: '/calendar',
    icon: 'bx bx-calendar',
    i18n: 'Calendar'
  },
  {
    title: 'Kanban',
    key: 'kanban',
    path: '/kanban',
    icon: 'bx bx-grid',
    i18n: 'Kanban'
  },
  {
    title: 'eCommerce',
    key: 'ecommerce-app',
    icon: 'bx bx-cart-alt',
    children: [
      { title: 'Dashboard', key: 'ecommerce-dashboard', path: '/ecommerce-dashboard', i18n: 'Dashboard' },
      {
        title: 'Products',
        key: 'products',
        children: [
          { title: 'Product List', key: 'product-list', path: '/product-list', i18n: 'Product List' },
          { title: 'Add Product', key: 'add-product', path: '#', i18n: 'Add Product' },
          { title: 'Category List', key: 'category-list', path: '#', i18n: 'Category List' }
        ]
      },
      {
        title: 'Order',
        key: 'order',
        children: [
          { title: 'Order List', key: 'order-list', path: '/order-list', i18n: 'Order List' },
          { title: 'Order Details', key: 'order-details', path: '#', i18n: 'Order Details' }
        ]
      },
      {
        title: 'Customer',
        key: 'customer',
        children: [
          { title: 'All Customers', key: 'all-customers', path: '/customer-list', i18n: 'All Customers' },
          {
            title: 'Customer Details',
            key: 'customer-details',
            children: [
              { title: 'Overview', key: 'overview', path: '#', i18n: 'Overview' },
              { title: 'Security', key: 'security', path: '#', i18n: 'Security' },
              { title: 'Address & Billing', key: 'address-billing', path: '#', i18n: 'Address & Billing' },
              { title: 'Notifications', key: 'notifications', path: '#', i18n: 'Notifications' }
            ]
          }
        ]
      },
      { title: 'Manage Reviews', key: 'manage-reviews', path: '#', i18n: 'Manage Reviews' },
      { title: 'Referrals', key: 'referrals', path: '#', i18n: 'Referrals' },
      {
        title: 'Settings',
        key: 'ecommerce-settings',
        children: [
          { title: 'Store Details', key: 'store-details', path: '#', i18n: 'Store Details' },
          { title: 'Payments', key: 'payments', path: '#', i18n: 'Payments' },
          { title: 'Checkout', key: 'checkout-settings', path: '#', i18n: 'Checkout' },
          { title: 'Shipping & Delivery', key: 'shipping-delivery', path: '#', i18n: 'Shipping & Delivery' },
          { title: 'Locations', key: 'locations', path: '#', i18n: 'Locations' },
          { title: 'Notifications', key: 'settings-notifications', path: '#', i18n: 'Notifications' }
        ]
      }
    ]
  },
  {
    title: 'Academy',
    key: 'academy-menu',
    icon: 'bx bx-book-open',
    children: [
      { title: 'Dashboard', key: 'academy-dashboard', path: '/academy-dashboard', i18n: 'Dashboard' },
      { title: 'My Course', key: 'my-course', path: '#', i18n: 'My Course' },
      { title: 'Course Details', key: 'course-details', path: '#', i18n: 'Course Details' }
    ]
  },
  {
    title: 'Logistics',
    key: 'logistics-menu',
    icon: 'bx bx-car',
    children: [
      { title: 'Dashboard', key: 'logistics-dashboard', path: '/logistics-dashboard', i18n: 'Dashboard' },
      { title: 'Fleet', key: 'fleet', path: '#', i18n: 'Fleet' }
    ]
  },
  {
    title: 'Invoice',
    key: 'invoice',
    icon: 'bx bx-food-menu',
    badge: { text: '4', class: 'bg-danger rounded-pill ms-auto' },
    children: [
      { title: 'List', key: 'invoice-list', path: '/invoice-list', i18n: 'List' },
      { title: 'Preview', key: 'invoice-preview', path: '/invoice-preview', i18n: 'Preview' },
      { title: 'Edit', key: 'invoice-edit', path: '/invoice-edit', i18n: 'Edit' },
      { title: 'Add', key: 'invoice-add', path: '/invoice-add', i18n: 'Add' }
    ]
  },
  {
    title: 'Users',
    key: 'users',
    icon: 'bx bx-user',
    children: [
      { title: 'List', key: 'user-list', path: '/user-list', i18n: 'List' },
      {
        title: 'View',
        key: 'view',
        children: [
          { title: 'Account', key: 'account', path: '/user-view', i18n: 'Account' },
          { title: 'Security', key: 'security', path: '#', i18n: 'Security' },
          { title: 'Billing & Plans', key: 'billing-plans', path: '#', i18n: 'Billing & Plans' },
          { title: 'Notifications', key: 'user-notifications', path: '#', i18n: 'Notifications' },
          { title: 'Connections', key: 'connections', path: '#', i18n: 'Connections' }
        ]
      }
    ]
  },
  {
    title: 'Roles & Permissions',
    key: 'roles-permissions',
    icon: 'bx bx-check-shield',
    children: [
      { title: 'Roles', key: 'roles', path: '#', i18n: 'Roles' },
      { title: 'Permission', key: 'permission', path: '#', i18n: 'Permission' }
    ]
  },
  {
    title: 'Pages',
    key: 'pages',
    icon: 'bx bx-dock-top',
    children: [
      {
        title: 'User Profile',
        key: 'user-profile',
        children: [
          { title: 'Profile', key: 'profile', path: '#', i18n: 'Profile' },
          { title: 'Teams', key: 'teams', path: '#', i18n: 'Teams' },
          { title: 'Projects', key: 'projects', path: '#', i18n: 'Projects' },
          { title: 'Connections', key: 'connections', path: '#', i18n: 'Connections' }
        ]
      },
      {
        title: 'Account Settings',
        key: 'account-settings',
        children: [
          { title: 'Account', key: 'account', path: '#', i18n: 'Account' },
          { title: 'Security', key: 'security', path: '#', i18n: 'Security' },
          { title: 'Billing & Plans', key: 'billing-plans', path: '#', i18n: 'Billing & Plans' },
          { title: 'Notifications', key: 'page-notifications', path: '#', i18n: 'Notifications' },
          { title: 'Connections', key: 'page-connections', path: '#', i18n: 'Connections' }
        ]
      },
      { title: 'FAQ', key: 'faq', path: '#', i18n: 'FAQ' },
      { title: 'Pricing', key: 'pricing', path: '#', i18n: 'Pricing' },
      {
        title: 'Misc',
        key: 'misc',
        children: [
          { title: 'Error', key: 'error', path: '#', i18n: 'Error', target: '_blank' },
          { title: 'Under Maintenance', key: 'under-maintenance', path: '#', i18n: 'Under Maintenance', target: '_blank' },
          { title: 'Coming Soon', key: 'coming-soon', path: '#', i18n: 'Coming Soon', target: '_blank' },
          { title: 'Not Authorized', key: 'not-authorized', path: '#', i18n: 'Not Authorized', target: '_blank' }
        ]
      }
    ]
  },
  {
    title: 'Authentications',
    key: 'authentications',
    icon: 'bx bx-user-check',
    children: [
      {
        title: 'Login',
        key: 'login',
        children: [
          { title: 'Basic', key: 'login-basic', path: '/login', i18n: 'Basic' },
          { title: 'Cover', key: 'login-cover', path: '#', i18n: 'Cover', target: '_blank' }
        ]
      },
      {
        title: 'Register',
        key: 'register',
        children: [
          { title: 'Basic', key: 'register-basic', path: '/register', i18n: 'Basic' },
          { title: 'Cover', key: 'register-cover', path: '#', i18n: 'Cover', target: '_blank' },
          { title: 'Multi-steps', key: 'register-multisteps', path: '#', i18n: 'Multi-steps', target: '_blank' }
        ]
      },
      {
        title: 'Verify Email',
        key: 'verify-email',
        children: [
          { title: 'Basic', key: 'verify-email-basic', path: '/verify-email', i18n: 'Basic' },
          { title: 'Cover', key: 'verify-email-cover', path: '#', i18n: 'Cover', target: '_blank' }
        ]
      },
      {
        title: 'Reset Password',
        key: 'reset-password',
        children: [
          { title: 'Basic', key: 'reset-password-basic', path: '/reset-password', i18n: 'Basic' },
          { title: 'Cover', key: 'reset-password-cover', path: '#', i18n: 'Cover', target: '_blank' }
        ]
      },
      {
        title: 'Forgot Password',
        key: 'forgot-password',
        children: [
          { title: 'Basic', key: 'forgot-password-basic', path: '/forgot-password', i18n: 'Basic' },
          { title: 'Cover', key: 'forgot-password-cover', path: '#', i18n: 'Cover', target: '_blank' }
        ]
      },
      {
        title: 'Two Steps',
        key: 'two-steps',
        children: [
          { title: 'Basic', key: 'two-steps-basic', path: '/two-steps', i18n: 'Basic' },
          { title: 'Cover', key: 'two-steps-cover', path: '#', i18n: 'Cover', target: '_blank' }
        ]
      }
    ]
  },
  {
    title: 'Wizard Examples',
    key: 'wizard-examples',
    icon: 'bx bx-spreadsheet',
    children: [
      { title: 'Checkout', key: 'wizard-checkout', path: '#', i18n: 'Checkout' },
      { title: 'Property Listing', key: 'property-listing', path: '#', i18n: 'Property Listing' },
      { title: 'Create Deal', key: 'create-deal', path: '#', i18n: 'Create Deal' }
    ]
  },
  {
    title: 'Modal Examples',
    key: 'modal-examples',
    path: '#',
    icon: 'bx bx-window-open',
    i18n: 'Modal Examples'
  },
  {
    header: 'Components',
    key: 'components-header'
  },
  {
    title: 'Cards',
    key: 'cards',
    icon: 'bx bx-collection',
    badge: { text: '5', class: 'bg-primary rounded-pill ms-auto' },
    children: [
      { title: 'Basic', key: 'cards-basic', path: '#', i18n: 'Basic' },
      { title: 'Advance', key: 'cards-advance', path: '#', i18n: 'Advance' },
      { title: 'Statistics', key: 'cards-statistics', path: '#', i18n: 'Statistics' },
      { title: 'Analytics', key: 'cards-analytics', path: '#', i18n: 'Analytics' },
      { title: 'Actions', key: 'cards-actions', path: '#', i18n: 'Actions' }
    ]
  },
  {
    title: 'User interface',
    key: 'user-interface',
    icon: 'bx bx-box',
    children: [
      { title: 'Accordion', key: 'accordion', path: '#', i18n: 'Accordion' },
      { title: 'Alerts', key: 'alerts', path: '#', i18n: 'Alerts' },
      { title: 'Badges', key: 'badges', path: '#', i18n: 'Badges' },
      { title: 'Buttons', key: 'buttons', path: '#', i18n: 'Buttons' },
      { title: 'Carousel', key: 'carousel', path: '#', i18n: 'Carousel' },
      { title: 'Collapse', key: 'collapse', path: '#', i18n: 'Collapse' },
      { title: 'Dropdowns', key: 'dropdowns', path: '#', i18n: 'Dropdowns' },
      { title: 'Footer', key: 'footer', path: '#', i18n: 'Footer' },
      { title: 'List Groups', key: 'list-groups', path: '#', i18n: 'List Groups' },
      { title: 'Modals', key: 'modals', path: '#', i18n: 'Modals' },
      { title: 'Navbar', key: 'navbar', path: '#', i18n: 'Navbar' },
      { title: 'Offcanvas', key: 'offcanvas', path: '#', i18n: 'Offcanvas' },
      { title: 'Pagination', key: 'pagination', path: '#', i18n: 'Pagination' },
      { title: 'Popovers', key: 'popovers', path: '#', i18n: 'Popovers' },
      { title: 'Progress', key: 'progress', path: '#', i18n: 'Progress' },
      { title: 'Spinners', key: 'spinners', path: '#', i18n: 'Spinners' },
      { title: 'Tabs', key: 'tabs', path: '#', i18n: 'Tabs' },
      { title: 'Toasts', key: 'toasts', path: '#', i18n: 'Toasts' },
      { title: 'Tooltips', key: 'tooltips', path: '#', i18n: 'Tooltips' }
    ]
  },
  {
    title: 'Form Elements',
    key: 'form-elements',
    icon: 'bx bx-detail',
    children: [
      { title: 'Inputs', key: 'inputs', path: '#', i18n: 'Inputs' },
      { title: 'Input Groups', key: 'input-groups', path: '#', i18n: 'Input Groups' },
      { title: 'Custom Options', key: 'custom-options', path: '#', i18n: 'Custom Options' },
      { title: 'Switches', key: 'switches', path: '#', i18n: 'Switches' },
      { title: 'Uploads', key: 'uploads', path: '#', i18n: 'Uploads' },
      { title: 'Pickers', key: 'pickers', path: '#', i18n: 'Pickers' }
    ]
  },
  {
    title: 'Form Layouts',
    key: 'form-layouts',
    icon: 'bx bx-checkbox',
    children: [
      { title: 'Vertical Form', key: 'vertical-form', path: '#', i18n: 'Vertical Form' },
      { title: 'Horizontal Form', key: 'horizontal-form', path: '#', i18n: 'Horizontal Form' },
      { title: 'Sticky Actions', key: 'sticky-actions', path: '#', i18n: 'Sticky Actions' }
    ]
  },
  {
    title: 'Form Wizard',
    key: 'form-wizard',
    path: '#',
    icon: 'bx bx-input',
    i18n: 'Form Wizard'
  },
  {
    title: 'Form Validation',
    key: 'form-validation',
    path: '#',
    icon: 'bx bx-text',
    i18n: 'Form Validation'
  },
  {
    title: 'Tables',
    key: 'tables',
    icon: 'bx bx-table',
    children: [
      { title: 'Basic Tables', key: 'basic-tables', path: '#', i18n: 'Basic Tables' },
      {
        title: 'DataTables',
        key: 'datatables',
        children: [
          { title: 'Basic', key: 'datatable-basic', path: '#', i18n: 'Basic' },
          { title: 'Advanced', key: 'datatable-advanced', path: '#', i18n: 'Advanced' },
          { title: 'Extensions', key: 'datatable-extensions', path: '#', i18n: 'Extensions' }
        ]
      }
    ]
  },
  {
    title: 'Charts & Maps',
    key: 'charts-maps',
    icon: 'bx bx-bar-chart-alt',
    children: [
      { title: 'Apex Charts', key: 'apex-charts', path: '#', i18n: 'Apex Charts' },
      { title: 'ChartJS', key: 'chartjs', path: '#', i18n: 'ChartJS' },
      { title: 'Leaflet Maps', key: 'leaflet-maps', path: '#', i18n: 'Leaflet Maps' }
    ]
  },
  {
    title: 'Others',
    key: 'others',
    icon: 'bx bx-dots-horizontal-rounded',
    children: [
      {
        title: 'Menu Levels',
        key: 'menu-levels',
        children: [
          { title: 'Level 2', key: 'level-2a', path: '#', i18n: 'Level 2' },
          {
            title: 'Level 2',
            key: 'level-2b',
            children: [
              { title: 'Level 3', key: 'level-3a', path: '#', i18n: 'Level 3' },
              { title: 'Level 3', key: 'level-3b', path: '#', i18n: 'Level 3' }
            ]
          }
        ]
      },
      { title: 'Disabled Menu', key: 'disabled-menu', path: '#', i18n: 'Disabled Menu' },
      { title: 'Raise Support', key: 'raise-support', path: '#', i18n: 'Raise Support' },
      { title: 'Documentation', key: 'documentation', path: '#', i18n: 'Documentation' }
    ]
  }
];

export default menuConfig;