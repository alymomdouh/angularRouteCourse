import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateReactiveFormComponent } from './customer-create-reactive-form.component';

describe('CustomerCreateReactiveFormComponent', () => {
  let component: CustomerCreateReactiveFormComponent;
  let fixture: ComponentFixture<CustomerCreateReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCreateReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreateReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
