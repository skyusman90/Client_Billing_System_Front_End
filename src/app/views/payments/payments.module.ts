import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { UpdatePaymentsComponent } from './update-payments/update-payments.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { BaseModule } from '../base/base.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddPaymentsComponent,
    UpdatePaymentsComponent,
    ViewPaymentsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    BaseModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    IconModule,
    DocsComponentsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class PaymentsModule { }
