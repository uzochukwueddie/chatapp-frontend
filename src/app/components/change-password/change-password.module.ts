import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChangePasswordRoutingModule
  ]
})
export class ChangePasswordModule { }
