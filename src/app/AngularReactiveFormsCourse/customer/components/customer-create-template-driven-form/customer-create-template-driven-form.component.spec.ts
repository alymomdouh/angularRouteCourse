import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateTemplateDrivenFormComponent } from './customer-create-template-driven-form.component';

describe('CustomerCreateTemplateDrivenFormComponent', () => {
  let component: CustomerCreateTemplateDrivenFormComponent;
  let fixture: ComponentFixture<CustomerCreateTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCreateTemplateDrivenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreateTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
