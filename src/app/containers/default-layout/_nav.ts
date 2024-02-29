import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Change Password',
    url: '/change-password',
    iconComponent: { name: 'cil-lock-locked' }
  },
  {
    name: 'Edit Information',
    url: '/edit-admin-information',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Pages',
    title: true
  },
  {
    name: 'Customers',
    url: '/customers',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Payments',
    url: '/payments',
    iconComponent: { name: 'cil-credit-card' },
  },
  {
    name: 'Packages',
    url: '/packages',
    iconComponent: { name: 'cil-envelope-closed' },
  },
  {
    name: 'Expenditures',
    url: '/expenditures',
    iconComponent: { name: 'cil-dollar' }
  },
];
