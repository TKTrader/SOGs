import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AthletesComponent } from './athletes/athletes.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AthleteInterfaceComponent } from './athlete-interface/athlete-interface.component';
import { EmployeeInterfaceComponent } from './employee-interface/employee-interface.component';
import { PublicInterfaceComponent } from './public-interface/public-interface.component';

// Create routing for angular components ("pages")
const routes: Routes = [
  {path: '', component: HomeComponent}, // Home: do not change
  {path: 'athletes', component: AthletesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'athleteInt', component: AthleteInterfaceComponent},
  {path: 'employeeInt', component: EmployeeInterfaceComponent},
  {path: 'userInt', component: PublicInterfaceComponent},
  { path: '**', component: HomeComponent} // keep this line last in array
  // any other path redirects to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
