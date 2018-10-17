import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestHomeComponent } from './test-home/test-home.component';
import { componentFactoryName } from '../../node_modules/@angular/compiler';
import { TadashboardComponent } from './tadashboard/tadashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TestHomeComponent,
    TadashboardComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {
         path: 'home',
         component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'tadashboard',
        component: TadashboardComponent
      },
      {
        path:'test',
        component:TestingComponent
      }
    
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
