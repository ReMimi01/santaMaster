import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVotesComponent } from './add-votes.component';

describe('AddVotesComponent', () => {
  let component: AddVotesComponent;
  let fixture: ComponentFixture<AddVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
