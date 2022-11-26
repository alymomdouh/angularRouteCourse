import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductUpdateComponent } from './component/product-update/product-update.component';
import { SharedModule } from '../shared/shared.module';
import { ProductUpdateTagsComponent } from './component/product-update-tags/product-update-tags.component';
import { ProductUpdateInfoComponent } from './component/product-update-info/product-update-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    ProductUpdateTagsComponent,
    ProductUpdateInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    /***  
    */
    RouterModule.forChild([
      { path: "list", component: ProductListComponent }
    ]),
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
  ]
})
export class ProductModule { }
