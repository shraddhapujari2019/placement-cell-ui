import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplacedStudentsComponent } from './addplaced-students.component';

describe('AddplacedStudentsComponent', () => {
  let component: AddplacedStudentsComponent;
  let fixture: ComponentFixture<AddplacedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplacedStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddplacedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
