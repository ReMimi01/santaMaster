import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormulaireService } from 'src/app/shared/formulaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  connectedUser;
  userConnect = this.formbuilder.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(4)]],
  });
  constructor(private formbuilder : FormBuilder, private formulaireService: FormulaireService, private router: Router) { }

  ngOnInit() {
    
  }

  login() {
    let userLogins = {
      email: this.userConnect.value.email,
      password: this.userConnect.value.password
    };
    this.formulaireService.login(userLogins).subscribe(
      result => {
        this.connectedUser = result;
        this.formulaireService.isConnected(result);
        if (result) {
          this.router.navigate(['/participation'])
        }
      }
      );
  }

}
