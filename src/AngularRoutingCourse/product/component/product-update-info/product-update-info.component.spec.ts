import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateInfoComponent } from './product-update-info.component';

describe('ProductUpdateInfoComponent', () => {
  let component: ProductUpdateInfoComponent;
  let fixture: ComponentFixture<ProductUpdateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
