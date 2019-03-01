import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AthletesComponent } from './athletes/athletes.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'athletes', component: AthletesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'tickets', component: TicketsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
