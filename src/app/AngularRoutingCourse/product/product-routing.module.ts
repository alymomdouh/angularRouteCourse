import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductEasyUpdateComponent } from './component/product-easy-update/product-easy-update.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductUpdateInfoComponent } from './component/product-update-info/product-update-info.component';
import { ProductUpdateTagsComponent } from './component/product-update-tags/product-update-tags.component';
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
    path: "easy-update/:id",
    component: ProductEasyUpdateComponent,
    resolve: { Product: ProductResolverService }
  },
  {
    path: "update/:id",
    component: ProductUpdateComponent,
    resolve: { Product: ProductResolverService },
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: ProductUpdateInfoComponent },
      { path: 'tags', component: ProductUpdateTagsComponent }
    ]
  },
  { path: "create", component: ProductUpdateComponent },
  { path: "create-easy", component: ProductEasyUpdateComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }