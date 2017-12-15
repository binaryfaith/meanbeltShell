import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
