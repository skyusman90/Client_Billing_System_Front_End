import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import {EditInformationComponent} from './views/clients/edit-information/edit-information.component';
import {ChangePasswordComponent} from './views/clients/change-password/change-password.component';
import { ViewCustomersComponent } from 'src/app/views/customers/view-customers/view-customers.component'
import { ViewExpendituresComponent } from './views/expenditures/view-expenditures/view-expenditures.component';
import { ViewPaymentsComponent } from './views/payments/view-payments/view-payments.component';
import { ViewPackagesComponent } from './views/packages/view-packages/view-packages.component';
import { UpdateCustomerComponent } from './views/customers/update-customer/update-customer.component';
import { AddCustomerComponent } from './views/customers/add-customer/add-customer.component';
import { AddPackagesComponent } from './views/packages/add-packages/add-packages.component';
import { UpdatePackagesComponent } from './views/packages/update-packages/update-packages.component';
import { AddPaymentsComponent } from './views/payments/add-payments/add-payments.component';
import { UpdatePaymentsComponent } from './views/payments/update-payments/update-payments.component';
import { AddExpendituresComponent } from './views/expenditures/add-expenditures/add-expenditures.component';
import { UpdateExpendituresComponent } from './views/expenditures/update-expenditures/update-expenditures.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'edit-admin-information',
        component: EditInformationComponent,
        data: {
          title: 'Edit Information'
        }
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        data: {
          title: 'Change Password'
        }
      },
      {
        path: 'customers',
        component: ViewCustomersComponent,
        data: {
          title: 'Customers'
        }
      },
      {
        path: 'expenditures',
        component: ViewExpendituresComponent,
        data: {
          title: 'Expenditures'
        }
      },
      {
        path: 'payments',
        component: ViewPaymentsComponent,
        data: {
          title: 'Payments'
        }
      },
      {
        path: 'packages',
        component: ViewPackagesComponent,
        data: {
          title: 'Packages'
        }
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'updateCustomer',
        component: UpdateCustomerComponent,
        data:{
          title: 'Update Customer'
        }
      },
      {
        path: 'addCustomer',
        component: AddCustomerComponent,
        data: {
          title: 'Add Customer'
        }
      },
      {
        path: 'addPackage',
        component: AddPackagesComponent,
        data: {
          title: 'Add Package'
        }
      },
      {
        path: 'updatePackage',
        component: UpdatePackagesComponent,
        data: {
          title: 'Update Package'
        }
      },
      {
        path: 'updatePayment',
        component: UpdatePaymentsComponent,
        data: {
          title: 'Update Payment'
        }
      },
      {
        path: 'addPayment',
        component: AddPaymentsComponent,
        data: {
          title: 'Add Payment'
        }
      },
      {
        path: 'addExpenditure',
        component: AddExpendituresComponent,
        data: {
          title: 'Add Expenditure'
        }
      },
      {
        path: 'updateExpenditure',
        component: UpdateExpendituresComponent,
        data: {
          title: 'Update Expenditure'
        }
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
