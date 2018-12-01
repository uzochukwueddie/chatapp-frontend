import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { FileUploadModule } from 'ng2-file-upload';
import { EmojiPickerModule } from 'ng2-emoji-picker';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { SideComponent } from '../components/side/side.component';
import { PostFormComponent } from '../components/post-form/post-form.component';
import { PostsComponent } from '../components/posts/posts.component';
import { TopStreamsComponent } from '../components/top-streams/top-streams.component';
import { TokenInterceptor } from '../services/token-interceptor';

@NgModule({
  declarations: [
    ToolbarComponent,
    SideComponent,
    PostFormComponent,
    PostsComponent,
    TopStreamsComponent,
  ],
  exports: [
    ToolbarComponent,
    SideComponent,
    PostFormComponent,
    PostsComponent,
    TopStreamsComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxAutoScrollModule,
    FileUploadModule,
    InfiniteScrollModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxAutoScrollModule,
    FileUploadModule,
    InfiniteScrollModule,
    EmojiPickerModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
