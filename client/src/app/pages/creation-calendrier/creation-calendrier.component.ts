import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormulaireService } from 'src/app/shared/formulaire.service';
import { Calendar } from 'src/app/shared/calendar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-calendrier',
  templateUrl: './creation-calendrier.component.html',
  styleUrls: ['./creation-calendrier.component.scss']
})
export class CreationCalendrierComponent implements OnInit {


  userForm = this.formbuilder.group({
    calendrier: ['', [Validators.required] ],
  });

  constructor(private formbuilder : FormBuilder, private formulaireService : FormulaireService, private router : Router) { }

  ngOnInit() {
  }


  addCalendrier(){
    let newCalendar = {
      name : this.userForm.value.calendrier,
      }
    this.formulaireService.createCalendar(newCalendar).subscribe(
      result=>{
        console.log(result)
      }
    );
    setTimeout(this.test.bind(this),1000);
  }

  test(){
    this.router.navigate(['/participation'])
  }

}
