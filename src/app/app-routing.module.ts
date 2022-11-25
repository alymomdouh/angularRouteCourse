import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './AngularRoutingCourse/home/components/page-not-found/page-not-found.component';
import { DefaultPageComponent } from './default-page/default-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'index', component: DefaultPageComponent },
  {
    path: 'AngularRoutingCourse',
    loadChildren: () => import('./AngularRoutingCourse/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
