import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageComponent } from './component/message/message.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MessagesRoutingModule
  ],
  exports: [
    MessageComponent
  ]
})
export class MessagesModule { }