import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPackagesComponent } from './add-packages/add-packages.component';
import { UpdatePackagesComponent } from './update-packages/update-packages.component';
import { ViewPackagesComponent } from './view-packages/view-packages.component';

import { PackagesRoutingModule } from './packages-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { BaseModule } from '../base/base.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddPackagesComponent,
    UpdatePackagesComponent,
    ViewPackagesComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    ButtonModule,
    BaseModule,
    IconModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class PackagesModule { }
