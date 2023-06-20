/*
 * Main and demo navigation arrays
 */

export default {
  'main': [
    {
      name: 'Dashboard',
      to: '/dashboard',
      icon: 'fa fa-list'
    },

    {
      name: 'Finance',
      icon: 'fa fa-cash-register',
      subActivePaths: '/finance',
      sub: [
        {
          name: 'Transactions',
          to: '/finance/transactions'
        },
        {
          name: 'M-Pesa',
          to: '/finance/mpesa',
        },
       
      ]
    },

    {
      name: 'IAM',
      icon: 'fa fa-sitemap',
      subActivePaths: '/iam',
      sub: [
        {
          name: 'Customers',
          to: '/iam/customers'
        },
        {
          name: 'Customer Accounts',
          to: '/iam/accounts',
        },
        {
          name: 'Staff',
          to: '/iam/staff'
        },
        {
          name: 'Staff Accounts',
          to: '/iam/staff_accounts'
        },
       
      ]
    },

    {
      name: 'Batteries',
      icon: 'fa fa-charging-station',
      subActivePaths: '/services',
      sub: [
        {
          name: 'Batteries',
          to: '/services/battery'
        },
        {
          name: 'Battery Stations',
          to: '/services/stations',
        },
        {
          name: 'Swap Battery',
          to: '/services/battery_swap',
        },
        {
          name: 'Issued Battery',
          to: '/services/battery/charged'
        },
        {
          name: 'Charged Battery',
          to: '/services/battery/discharged'
        },
       
      ]
    },

    {
      name: 'MotorBikes',
      to: '/motorbike',
      icon: 'fa fa-motorcycle'
    },


    {
      name: 'Reports',
      icon: 'far fa-folder-open',
      subActivePaths: '/reports',
      sub:[
        {
          name: 'E-Bike',
          to: '/reports/e-bike'
        },
        {
          name: 'Mpesa',
          to: '/reports/mpesa'
        },
        {
          name: 'Mpesa Vs Swaps',
          to: '/reports/swap_mpesa'
        },
        {
          name: 'Batteries',
          to: '/reports/battery'
        },
      ]
    },


    {
      name: 'Section Two',
      heading: true
    },
    {
      name: 'Vendors',
      icon: 'far fa-folder-open',
      subActivePaths: '/vendors',
      sub:[
        {
          name: 'Untapped mpesa',
          to: '/vendors/mpesa'
        },
        {
          name: 'Untapped batteries',
          to: '/vendors/swaps'
        },
      ]
    },

    {
      name: 'Bills & Expenses',
      to: '/bills',
      icon: 'fa fa-th-list'
    },
    
    {
      name: 'Purchase Orders',
      to: '/purchase',
      icon: 'fa fa-th-list'
    },

    {
      name: 'Section Three',
      heading: true
    },

    {
      name: 'System Setup',
      icon: 'fa fa-charging-station',
      subActivePaths: '/setup',
      sub: [
        {
          name: 'Company Branches',
          to: '/setup/branches'
        },
       
      ]
    },

    
    {
      name: 'Notifications',
      icon: 'fa fa-cash-register',
      subActivePaths: '/notification',
      sub: [
        {
          name: 'Agents',
          to: '/notification/agents'
        },
       
      ]
    },


   ],

   'demo': [
    
    {
      name: 'Manage',
      heading: true
    },
    {
      name: 'Services',
      icon: 'fa fa-sitemap',
      sub: [
        {
          name: 'HR Console',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Payroll Processer',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Employee Manager',
          icon: 'si si-arrow-right',
          to: '#'
        },
        {
          name: 'Logistics Console',
          icon: 'si si-arrow-right',
          to: '#'
        },
      ]
    },
    {
      to: '#',
      icon: 'fa fa-bell',
      badge: 5
    },

    {
      to: '#',
      icon: 'fa fa-comment-alt',
      badge: 2
    },

    {
      heading: true
    },

    {
      name: 'Profile',
      icon: 'far fa-user',
      sub: [
        {
          name: 'Edit',
          to: '#'
        },
        {
          name: 'Settings',
          to: '#'
        },
        {
          name: 'Log out',
          to: '#'
        }
      ]
    }
  ]
}
