import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResolved } from '../../model/product';

@Component({
  selector: 'app-product-update-info',
  templateUrl: './product-update-info.component.html',
  styleUrls: ['./product-update-info.component.css']
})
export class ProductUpdateInfoComponent implements OnInit {
  @ViewChild(NgForm, { static: false }) productForm!: NgForm;
  errorMessage = '';
  product: Product | null = null;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.parent?.data.subscribe(data => {
      if (this.productForm) {
        this.productForm.reset();
      }
      const resolvedData: ProductResolved = data["Product"];
      this.errorMessage = resolvedData.error!;
      this.product = resolvedData.product;
      debugger
    });
  }
}
