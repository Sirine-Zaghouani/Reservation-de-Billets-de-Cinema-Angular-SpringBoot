import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProjectionComponent } from './gestion-projection.component';

describe('GestionProjectionComponent', () => {
  let component: GestionProjectionComponent;
  let fixture: ComponentFixture<GestionProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
