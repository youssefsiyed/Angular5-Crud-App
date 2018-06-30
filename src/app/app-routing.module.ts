import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustumersComponent } from './components/custumers/custumers.component';
import { CustumersAddComponent } from './components/custumers-add/custumers-add.component';
import { CustumersDetailsComponent } from './components/custumers-details/custumers-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponceResetComponent } from './components/password/responce-reset/responce-reset.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'custumers', component: CustumersComponent },
  { path: 'custumers-add', component: CustumersAddComponent },
  { path: 'custumers-details', component: CustumersDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'request-password-reset', component: RequestResetComponent },
  { path: 'responce-password-reset', component: ResponceResetComponent },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
