import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthTabsComponent } from './auth-tabs.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  imports: [
    CommonModule, 
    AuthRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    AuthTabsComponent, 
    LoginComponent, 
    SignupComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
