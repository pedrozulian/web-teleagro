import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './modules/sign-up/sign-up.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
