import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductUpdateComponent } from './component/product-update/product-update.component';
import { ProductResolverService } from './service/product-resolver.service';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: "list",
    component: ProductListComponent,
    data: {
      pageTitle: "Product List"
    }
  },
  {
    path: "details/:id",
    component: ProductDetailsComponent,
    resolve: { Product: ProductResolverService }
    // if we need send multi resolver
    //resolve: { Product: ProductResolverService, category: categoryResolverService }
  },
  {
    path: "update/:id",
    component: ProductUpdateComponent,
    resolve: { Product: ProductResolverService }
  },
  { path: "create", component: ProductUpdateComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }