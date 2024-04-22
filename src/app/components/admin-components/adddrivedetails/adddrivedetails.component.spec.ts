import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddrivedetailsComponent } from './adddrivedetails.component';

describe('AdddrivedetailsComponent', () => {
  let component: AdddrivedetailsComponent;
  let fixture: ComponentFixture<AdddrivedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddrivedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddrivedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
