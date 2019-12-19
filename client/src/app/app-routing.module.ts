import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component'
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ConnectionComponent } from './pages/connection/connection.component';

const routes: Routes = [
  { path :'', component : LandingPagesComponent},
  { path :'formulaire', component : FormulaireComponent},
  { path: 'calendar', component: CalendarComponent },
  { path: 'connexion', component: ConnectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
