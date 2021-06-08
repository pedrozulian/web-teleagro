import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
