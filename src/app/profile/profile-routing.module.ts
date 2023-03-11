import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
