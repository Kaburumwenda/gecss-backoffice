/*
 * Main and demo navigation arrays
 */

export default {
  'main': [
    {
      name: 'Dashboard',
      to: '/dashboard',
      icon: 'si si-speedometer'
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
        {
          name: 'Reports',
          to: '/finance/reports'
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
          name: 'Roles',
          to: '/iam/roles'
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
      name: 'Section Two',
      heading: true
    },
    {
      name: 'Bills',
      to: '/bills',
      icon: 'fa fa-th-list'
    },
    {
      name: 'Vendors',
      to: '/vendors',
      icon: 'fa fa-th-list'
    },
    {
      name: 'Purchase Orders',
      to: '/purchase',
      icon: 'fa fa-th-list'
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
