import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersComponent } from './followers.component';
import { FollowersRoutingModule } from './followers-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [FollowersComponent],
  imports: [
    CommonModule,
    SharedModule,
    FollowersRoutingModule
  ]
})
export class FollowersModule { }
