import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { CustomersRoutingModule } from './customers-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { BaseModule } from '../base/base.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ViewCustomersComponent,
    UpdateCustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    IconModule,
    DocsComponentsModule,
    BaseModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CustomersModule { }
