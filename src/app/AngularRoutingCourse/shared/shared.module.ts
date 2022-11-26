import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { StarComponent } from './components/star/star.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    StarComponent
  ]
})
export class SharedModule { }
