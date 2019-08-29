import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterMovieComponent } from './poster-movie.component';

describe('PosterMovieComponent', () => {
  let component: PosterMovieComponent;
  let fixture: ComponentFixture<PosterMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
