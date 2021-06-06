import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthConfigComponent } from './auth-config.component';
import {AuthConfigRoutingModule} from "./auth-config-routing.module";
import { SharedModule } from '../shared/shared.module';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { FirstConfigComponent } from './components/first-config/first-config.component';



@NgModule({
  declarations: [AuthConfigComponent, AccountLoginComponent, FirstConfigComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthConfigRoutingModule
  ]
})
export class AuthConfigModule { }
