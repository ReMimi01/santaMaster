import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component'
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
<<<<<<< HEAD
import { AddVotesComponent } from './pages/add-votes/add-votes.component';
=======
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
>>>>>>> main

const routes: Routes = [
  { path :'', component : LandingPagesComponent},
  { path :'formulaire', component : FormulaireComponent},
  { path: 'calendar', component: CalendarComponent },
<<<<<<< HEAD
  { path: 'ba', component: AddVotesComponent }
=======
  { path: 'classement', component: RankingPageComponent }
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
