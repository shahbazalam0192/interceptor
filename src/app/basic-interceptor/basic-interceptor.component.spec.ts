import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInterceptorComponent } from './basic-interceptor.component';

describe('BasicInterceptorComponent', () => {
  let component: BasicInterceptorComponent;
  let fixture: ComponentFixture<BasicInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
