import { StreamsComponent } from './streams.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [StreamsComponent],
  imports: [
    CommonModule,
    SharedModule,
    StreamsRoutingModule
  ]
})
export class StreamsModule { }
