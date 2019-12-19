import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule } from '@angular/material'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { AddVotesComponent } from './pages/add-votes/add-votes.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { ParticipationComponent } from './pages/participation/participation.component';
import { RouterModule } from '@angular/router';
import { Calendar2Component } from './pages/calendar2/calendar2.component';
import { WinnerPageComponent } from './pages/winner-page/winner-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalendarComponent,
    LandingPagesComponent,
    FormulaireComponent,
    ConnectionComponent,
    AddVotesComponent,
    ParticipationComponent,
    RankingPageComponent,
    Calendar2Component,
    WinnerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
