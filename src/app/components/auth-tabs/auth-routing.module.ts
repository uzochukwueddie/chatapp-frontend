import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthTabsComponent } from './auth-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: AuthTabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
