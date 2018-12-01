import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MessageModule { }
