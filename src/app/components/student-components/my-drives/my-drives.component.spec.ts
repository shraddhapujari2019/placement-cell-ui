import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckResultsComponent } from './my-drives.component';

describe('MyDrivesComponent', () => {
  let component: MyDrivesComponent;
  let fixture: ComponentFixture<MyDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDrivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
