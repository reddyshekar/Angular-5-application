import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { GreetingComponent } from './greeting/greeting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GreetingService } from './greeting/greeting.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,RouterModule, routing, ReactiveFormsModule , HttpModule
  ],
  providers: [GreetingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
