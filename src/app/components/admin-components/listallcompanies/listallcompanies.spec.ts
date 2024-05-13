import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompaniesListComponent } from './listallcompanies';

describe('UpcmoingdrivesComponent', () => {
  let component: AllCompaniesListComponent;
  let fixture: ComponentFixture<AllCompaniesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCompaniesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
