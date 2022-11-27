import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductUpdateComponent } from './component/product-update/product-update.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' }, 
  { path: "list", component: ProductListComponent },
  { path: "details/:id", component: ProductDetailsComponent },
  { path: "update/:id", component: ProductUpdateComponent },
  { path: "create", component: ProductUpdateComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }