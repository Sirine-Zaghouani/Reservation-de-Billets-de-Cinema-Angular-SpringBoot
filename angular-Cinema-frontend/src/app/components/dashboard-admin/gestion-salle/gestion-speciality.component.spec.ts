import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSpecialityComponent } from './gestion-speciality.component';

describe('GestionSpecialityComponent', () => {
  let component: GestionSpecialityComponent;
  let fixture: ComponentFixture<GestionSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSpecialityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
