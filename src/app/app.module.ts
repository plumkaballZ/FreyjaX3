import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import comps
import {NavbarComp} from './navbar/navbar.comp'
import {DashComp} from './dash/dash.comp'
import {DoomCounterComp} from './dash/doomCounter/doomCounter.comp'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComp,
    DashComp,
    DoomCounterComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
