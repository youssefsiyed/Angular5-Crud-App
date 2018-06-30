import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { CustumersComponent } from './components/custumers/custumers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CustumersService } from './services/custumers.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustumersAddComponent } from './components/custumers-add/custumers-add.component';
import { CustumersDetailsComponent } from './components/custumers-details/custumers-details.component';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgPipesModule } from 'ngx-pipes';
import { NgSpinKitModule } from 'ng-spin-kit';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponceResetComponent } from './components/password/responce-reset/responce-reset.component';
import { AuthentificationService } from './services/authentification.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErreurComponent,
    CustumersComponent,
    NavbarComponent,
    AboutComponent,
    CustumersAddComponent,
    CustumersDetailsComponent,
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponceResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgPipesModule,
    NgSpinKitModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [CustumersService, AuthentificationService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
