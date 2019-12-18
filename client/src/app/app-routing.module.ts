import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';


const routes: Routes = [
  { path :'', component : LandingPagesComponent},
  { path :'formulaire', component : FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
