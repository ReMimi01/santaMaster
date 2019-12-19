import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component'
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { AddVotesComponent } from './pages/add-votes/add-votes.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { ParticipationComponent } from './pages/participation/participation.component';
import { Calendar2Component } from './pages/calendar2/calendar2.component';
import { WinnerPageComponent } from './pages/winner-page/winner-page.component';


const routes: Routes = [
  { path :'', component : LandingPagesComponent},
  { path :'formulaire', component : FormulaireComponent},
  { path: 'calendrier', component: CalendarComponent },
  { path: 'connexion', component: ConnectionComponent},
  { path: 'ba', component: AddVotesComponent },
  { path: 'classement', component: RankingPageComponent },
  { path: 'participation', component: ParticipationComponent },
  { path: 'calendrier2', component: Calendar2Component },
  { path: 'gagnant', component: WinnerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

