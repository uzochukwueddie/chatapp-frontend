import { SharedModule } from './../../shared/shared.module';
import { NotificationsComponent } from './notifications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
