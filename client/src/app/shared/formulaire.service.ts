import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  userUrl = 'http://localhost:3000'

  constructor(private http : HttpClient, private router: Router) { }

  createUser(newUser){
    return this.http.post(`${this.userUrl}/formulaire`, newUser);
  }
  
  changepage(){
    this.router.navigate(['']);
  }
}
