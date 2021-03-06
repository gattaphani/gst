import { AuthGuard } from './gaurds/auth.guard';
import { AuthService } from './services/auth.service';
import { IndexModule } from './index/index.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { HttpClientModule }    from '@angular/common/http'
import {routes} from './app.router'
import { DataService } from './services/data.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {  TokenInterceptorService} from './services/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NoPageComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes,{ useHash: true }),

  ],
  providers: [AuthService,AuthGuard,DataService,
    { useClass: TokenInterceptorService,provide:HTTP_INTERCEPTORS,multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
