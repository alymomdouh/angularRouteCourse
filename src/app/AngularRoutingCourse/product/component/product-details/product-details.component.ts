import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductResolved } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage?: string;
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id')!;
    // this.getProduct(id);

    // we not need git id and service for product only need resolver
    // const resolvedData: ProductResolved = this.route.snapshot.data["Product"];
    // this.errorMessage = resolvedData.error;
    // this.onProductRetrieved(resolvedData.product!);

    // read data as subscribe not property
    this.route.data.subscribe(data => {
      const resolvedData: ProductResolved = data["Product"];
      //if (resolvedData !== undefined) {
        this.errorMessage = resolvedData.error;
        this.onProductRetrieved(resolvedData.product!);
      //}
    });
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.onProductRetrieved(product),
      error: err => this.errorMessage = err
    });
  }
  onProductRetrieved(product: Product| null): void {
    this.product = product;
    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}