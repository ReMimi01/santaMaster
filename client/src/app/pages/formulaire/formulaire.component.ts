import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormulaireService } from 'src/app/shared/formulaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormulaireComponent implements OnInit {


  userForm = this.formbuilder.group({
    pseudo: ['', [Validators.required, Validators.minLength(4)] ],
    firstname: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(4)]],
    checkbox1: ['',[Validators.required]],
    checkbox2: ['',[Validators.required]],
    checkbox3: ['',[Validators.required]],

  });


  constructor(private formbuilder : FormBuilder, private formulaireService : FormulaireService, private router: Router) { }

  ngOnInit() {
  }

  changepage(){
    console.log('bonjour');
    this.router.navigate(['']);
    
  }
  
  addUser(){
    setTimeout(this.changepage, 1000);
    let newUser = {
    pseudo : this.userForm.value.pseudo,
    prenom : this.userForm.value.prenom,
    nom : this.userForm.value.adress.nom,
    email : this.userForm.value.adress.email,
    password : this.userForm.value.adress.password,
    }
      this.formulaireService.createUser(newUser).subscribe(
        result=>{
          console.log(result)
        }
      );
    
  }

}
