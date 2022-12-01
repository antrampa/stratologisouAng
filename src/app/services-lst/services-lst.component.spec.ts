import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLstComponent } from './services-lst.component';

describe('ServicesLstComponent', () => {
  let component: ServicesLstComponent;
  let fixture: ComponentFixture<ServicesLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
