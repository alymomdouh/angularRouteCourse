import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEasyUpdateComponent } from './product-easy-update.component';

describe('ProductEasyUpdateComponent', () => {
  let component: ProductEasyUpdateComponent;
  let fixture: ComponentFixture<ProductEasyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEasyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEasyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
