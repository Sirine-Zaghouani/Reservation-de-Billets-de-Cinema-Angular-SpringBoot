import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCategoryMenuComponent } from './film-category-menu.component';

describe('FilmCategoryMenuComponent', () => {
  let component: FilmCategoryMenuComponent;
  let fixture: ComponentFixture<FilmCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmCategoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
