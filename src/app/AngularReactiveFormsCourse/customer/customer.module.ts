import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerCreateTemplateDrivenFormComponent } from './components/customer-create-template-driven-form/customer-create-template-driven-form.component';
import { CustomerCreateReactiveFormComponent } from './components/customer-create-reactive-form/customer-create-reactive-form.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateTemplateDrivenFormComponent,
    CustomerCreateReactiveFormComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
