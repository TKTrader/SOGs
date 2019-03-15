import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AthletesComponent } from './athletes/athletes.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeInterfaceComponent } from './employee-interface/employee-interface.component';
import { PublicInterfaceComponent } from './public-interface/public-interface.component';
import { AthleteInterfaceComponent } from './athlete-interface/athlete-interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AthletesComponent,
    EventsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeInterfaceComponent,
    PublicInterfaceComponent,
    AthleteInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
