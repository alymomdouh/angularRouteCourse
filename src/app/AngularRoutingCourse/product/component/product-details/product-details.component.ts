import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.getProduct(id);
  }
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage = '';
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.onProductRetrieved(product),
      error: err => this.errorMessage = err
    });
  }
  onProductRetrieved(product: Product): void {
    this.product = product;
    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}