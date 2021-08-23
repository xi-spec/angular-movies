import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHeroComponent } from './movie-hero.component';

describe('MovieHeroComponent', () => {
  let component: MovieHeroComponent;
  let fixture: ComponentFixture<MovieHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
