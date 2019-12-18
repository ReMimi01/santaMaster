import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  userUrl = 'http://localhost:3000'

  constructor(private http : HttpClient) { }

  createUser(newUser){
    return this.http.post(`${this.userUrl}/users/formulaire`, newUser);
  }
}
