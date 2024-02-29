import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpendituresComponent } from './add-expenditures/add-expenditures.component';
import { UpdateExpendituresComponent } from './update-expenditures/update-expenditures.component';
import { ViewExpendituresComponent } from './view-expenditures/view-expenditures.component';

import { ExpendituresRoutingModule } from './expenditures-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { BaseModule } from '../base/base.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AddExpendituresComponent,
    UpdateExpendituresComponent,
    ViewExpendituresComponent
  ],
  imports: [
    CommonModule,
    ExpendituresRoutingModule,
    ButtonModule,
    IconModule,
    DocsComponentsModule,
    BaseModule,
    CardModule,
    FormModule,
    GridModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ExpendituresModule { }
