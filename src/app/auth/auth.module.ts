import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TelefonosComponent } from './components/telefonos/telefonos.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecoverComponent,
    SigninComponent,
    LoginFormComponent,
    FooterComponent,
    TelefonosComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
