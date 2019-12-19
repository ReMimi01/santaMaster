import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormulaireService } from 'src/app/shared/formulaire.service';
import { User } from 'src/app/shared/user';
import { Calendar } from 'src/app/shared/calendar'

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.scss']
})
export class ParticipationComponent implements OnInit {

  uploadForm: FormGroup;
  SERVEUR_URL = "http://localhost:3000/users/upload-avatar"

  constructor(private httpClient : HttpClient, private fromBuilder : FormBuilder, private formulaireService : FormulaireService) { }

  selectedFile: File;
  user : User;
  calendars : Calendar;

  ngOnInit() {
    this.uploadForm = this.fromBuilder.group({
      avatar: ['']
    });

    this.formulaireService.getAvatarUser().subscribe(
        response => { 
          this.user = response;
        }
      );

    this.formulaireService.getCalendarUser().subscribe(
      response => {
        this.calendars = response;
      }
    )
    }



  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('avatar').setValue(file);
    }
  }


  onSubmit() {
    const formData = new FormData();
    console.log(formData);
    formData.append('avatar', this.uploadForm.get('avatar').value);

    this.httpClient.post<any>(this.SERVEUR_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    console.log()
  }




}
