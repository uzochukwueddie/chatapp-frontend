import { PeopleComponent } from './people.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
