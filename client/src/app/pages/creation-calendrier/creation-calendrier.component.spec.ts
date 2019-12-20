import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCalendrierComponent } from './creation-calendrier.component';

describe('CreationCalendrierComponent', () => {
  let component: CreationCalendrierComponent;
  let fixture: ComponentFixture<CreationCalendrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationCalendrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
