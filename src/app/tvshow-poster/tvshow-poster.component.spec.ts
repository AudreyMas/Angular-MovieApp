import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowPosterComponent } from './tvshow-poster.component';

describe('TvshowPosterComponent', () => {
  let component: TvshowPosterComponent;
  let fixture: ComponentFixture<TvshowPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
