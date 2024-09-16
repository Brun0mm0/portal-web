import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'recover',component:RecoverComponent},
  {path:'signin',component:SigninComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
