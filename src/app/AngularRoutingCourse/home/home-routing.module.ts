import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  {
    path: 'Home',
    //component: Component,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'index' },
      { path: 'index', component: WellcomeComponent }
    ]
  }, 
  {
    path: 'Product',
    loadChildren: () => import('../product/product.module').then(m => m.ProductModule) 
  },
  {
    path: 'User',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }