import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowingRoutingModule } from './following-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { FollowingComponent } from './following.component';

@NgModule({
  declarations: [FollowingComponent],
  imports: [
    CommonModule,
    SharedModule,
    FollowingRoutingModule
  ]
})
export class FollowingModule { }
