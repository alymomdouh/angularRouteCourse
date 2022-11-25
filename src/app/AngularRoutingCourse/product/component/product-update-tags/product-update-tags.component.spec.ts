import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateTagsComponent } from './product-update-tags.component';

describe('ProductUpdateTagsComponent', () => {
  let component: ProductUpdateTagsComponent;
  let fixture: ComponentFixture<ProductUpdateTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
