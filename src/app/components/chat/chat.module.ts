import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiPickerModule } from 'ng2-emoji-picker';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { ChatComponent } from './chat.component';
import { MessageComponent } from './../message/message.component';

@NgModule({
  declarations: [ChatComponent, MessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule,
    EmojiPickerModule.forRoot()
  ]
})
export class ChatModule { }
