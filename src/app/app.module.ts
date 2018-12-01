import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthModule } from './modules/auth.module';
// import { AuthRoutingModule } from './modules/auth-routing.module';
// import { TokenInterceptor } from './services/token-interceptor';
// import { StreamsModule } from './modules/streams.module';
// import { StreamsRoutingModule } from './modules/streams-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule,
  ],
  providers: [
    CookieService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
