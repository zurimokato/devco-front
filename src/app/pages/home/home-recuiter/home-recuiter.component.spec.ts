import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecuiterComponent } from './home-recuiter.component';

describe('HomeRecuiterComponent', () => {
  let component: HomeRecuiterComponent;
  let fixture: ComponentFixture<HomeRecuiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecuiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecuiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
