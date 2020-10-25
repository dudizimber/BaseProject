import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [IndexComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
