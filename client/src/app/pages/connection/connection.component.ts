import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  userConnect = this.formbuilder.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(4)]],
  });
  constructor(private formbuilder : FormBuilder) { }

  ngOnInit() {
  }

}
