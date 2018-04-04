//core stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { AppComponent } from './app.component';

//import comps
import { NavbarComp } from './_comp/navbar/navbar.comp'

import { DashComp } from './_comp/dash/dash.comp'
import { DoomCounterComp } from './_comp/dash/doomCounter/doomCounter.comp'

import { MoreInfoComp } from './_comp/moreInfo/moreInfo.comp'
import { PiczComp } from './_comp/picz/picz.comp'
import { ContactComp } from './_comp/contact/contact.comp'
import { _404Comp } from './_comp/_404/_404.comp'
import { LoginComp } from './_comp/login/login.comp'

//import services
import { WebShooter } from './_service/SpiderMan'

//import logics
import { authGuard } from './_logic/auth/authGuard'
import { anonGuard } from './_logic/auth/anonGuard'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComp,
    DashComp,
    DoomCounterComp,
    MoreInfoComp,
    ContactComp,
    PiczComp,
    _404Comp,
    LoginComp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComp,
        canActivate: [anonGuard]
      },
      {
        path: '',
        redirectTo: '/dash',
        pathMatch: 'full'
      },
      {
        path: 'dash',
        component: DashComp,
        canActivate: [authGuard]
      },
      {
        path: 'moreInfo',
        component: MoreInfoComp,
        canActivate: [authGuard]
      },
      {
        path: 'picz',
        component: PiczComp,
        canActivate: [authGuard]
      },
      {
        path: 'contact',
        component: ContactComp,
        canActivate: [authGuard]
      },
      { 
        path: '**', 
        component: _404Comp,
      }
    ])
  ],
  providers: [
    WebShooter,
    authGuard,
    anonGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }