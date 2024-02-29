import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {EditInformationComponent} from './edit-information/edit-information.component';

const routes: Routes = [
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    data: {
      title:"Change Password"
    }
  },
  {
    path: 'edit-admin-information',
    component: EditInformationComponent,
    data: {
      title: "Edit Information"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
