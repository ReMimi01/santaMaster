import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { Calendar } from './calendar';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  userUrl = 'http://localhost:3000'
  user : User[] = []

  constructor(private http : HttpClient, private router: Router) { }

  createUser(newUser){
    return this.http.post(`${this.userUrl}/users/formulaire`, newUser);
  }
  
  changepage(){
    this.router.navigate(['']);
  }

  getAvatarUser(){
    return this.http.get<User>(`${this.userUrl}/users/1`);
  }

  getCalendarUser(){
    return this.http.get<Calendar>(`${this.userUrl}/calendars`)
  }
}
