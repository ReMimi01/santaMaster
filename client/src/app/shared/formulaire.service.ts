import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  userUrl = 'http://localhost:3000';
  connectedUserValue = null;

  constructor(private http : HttpClient, private router: Router) { }

  createUser(newUser){
    return this.http.post(`${this.userUrl}/users/formulaire`, newUser);
  }
  
  changepage(){
    this.router.navigate(['']);
  }

  login(userLogins): Observable<any> {
    return this.http.post(`${this.userUrl}/auth/login`, userLogins);
  }

  isConnected(result) {
    this.connectedUserValue = result;
  }


}
