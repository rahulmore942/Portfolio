import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPortFolioComponent } from './my-port-folio/my-port-folio.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ReasonToHireMeComponent } from './reason-to-hire-me/reason-to-hire-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPortFolioComponent,
    MyResumeComponent,
    ReasonToHireMeComponent,
    AboutMeComponent,
    HomeComponent,
    HomeNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
