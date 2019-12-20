import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Action } from 'src/app/shared/action';
import { FormulaireService } from 'src/app/shared/formulaire.service';

@Component({
  selector: 'app-add-votes',
  templateUrl: './add-votes.component.html',
  styleUrls: ['./add-votes.component.scss']
})
export class AddVotesComponent implements OnInit {

  isVoted = false;
  actions: Action[] = [];

  SERVER_URL = "http://localhost:3000/actions";
  uploadForm: FormGroup; 

  constructor(
    private formBuilder: FormBuilder, 
    private httpClient: HttpClient, 
    private formulaireService: FormulaireService
    ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      picture: ['', [Validators.required]],
      detail: ['', [Validators.required ]]
    });
    this.formulaireService.getAction().subscribe(
      result => {
        this.actions = result;
        console.log(this.actions);
      }
    )
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('picture').setValue(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('picture', this.uploadForm.get('picture').value);
    formData.append('detail', this.uploadForm.get('detail').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  like() {
    if (this.isVoted) {
      this.isVoted = false;
    } else {
      this.isVoted = true;
    }
  }

}
