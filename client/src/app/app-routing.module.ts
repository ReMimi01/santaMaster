import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component'
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { AddVotesComponent } from './pages/add-votes/add-votes.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { ParticipationComponent } from './pages/participation/participation.component';


const routes: Routes = [
  { path :'', component : LandingPagesComponent},
  { path :'formulaire', component : FormulaireComponent},
  { path: 'calendar', component: CalendarComponent },
  { path: 'ba', component: AddVotesComponent },
  { path: 'classement', component: RankingPageComponent },
  { path: 'participation', component: ParticipationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

