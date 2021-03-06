import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { PublicationComponent } from './modules/publication/publication.component';
import { FeedComponent } from './modules/feed/feed.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ProfileComponent,
    PublicationComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    SignUpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
