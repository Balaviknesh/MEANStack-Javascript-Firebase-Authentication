import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ApiService} from './app/api.service';





@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  entryComponents: [LoginFormComponent],
  declarations: [LoginFormComponent],
  bootstrap: [LoginFormComponent],
  providers: [ApiService]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

