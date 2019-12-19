import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormulaireService } from 'src/app/shared/formulaire.service';

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


  constructor(private formbuilder : FormBuilder, private formulaireService : FormulaireService) { }

  ngOnInit() {
  }

  addUser(){
    console.log
    let newUser = {
    pseudo : this.userForm.value.pseudo,
    firstname : this.userForm.value.firstname,
    lastname : this.userForm.value.lastname,
    email : this.userForm.value.email,
    password : this.userForm.value.password,
    }
      this.formulaireService.createUser(newUser).subscribe(
        result=>{
          console.log(result)
        }
      );
  }

}
