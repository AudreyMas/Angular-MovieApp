import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePostersComponent } from './liste-posters.component';

describe('ListePostersComponent', () => {
  let component: ListePostersComponent;
  let fixture: ComponentFixture<ListePostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
