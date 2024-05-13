import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudents } from './listallstudents';

describe('UpcmoingdrivesComponent', () => {
  let component: AllStudents;
  let fixture: ComponentFixture<AllStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
