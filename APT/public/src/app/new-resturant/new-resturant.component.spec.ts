import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResturantComponent } from './new-resturant.component';

describe('NewResturantComponent', () => {
  let component: NewResturantComponent;
  let fixture: ComponentFixture<NewResturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
