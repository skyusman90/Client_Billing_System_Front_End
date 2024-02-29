import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ClientsRoutingModule } from './clients-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditInformationComponent } from './edit-information/edit-information.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    EditInformationComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    ToastrModule, 
    ButtonModule, 
    CardModule, 
    FormModule, 
    GridModule, 
    IconModule
  ]
})
export class ClientsModule { }
