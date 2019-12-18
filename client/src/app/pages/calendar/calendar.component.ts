import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/shared/day';
import { DAYS } from 'src/app/shared/day-mock';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  days:  Day[] = DAYS;
  constructor() { }

  ngOnInit() {
  }
/* 
  onDayClicked(day: Day) {
    this.dayEvent.emit(day);
  } */

}
