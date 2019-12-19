import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/shared/day';
import { DAYS } from 'src/app/shared/day-mock';

@Component({
  selector: 'app-calendar2',
  templateUrl: './calendar2.component.html',
  styleUrls: ['./calendar2.component.scss']
})
export class Calendar2Component implements OnInit {
  days:  Day[] = DAYS;
  constructor() { }

  ngOnInit() {
  }
/* 
  onDayClicked(day: Day) {
    this.dayEvent.emit(day);
  } */

}