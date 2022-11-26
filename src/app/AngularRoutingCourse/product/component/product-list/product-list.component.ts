import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  product: Product | null = null;
  errorMessage = '';
  imageMargin: number = 10;
  showImage = false;
  imageWidth = 200;
  filteredProducts = null;
  listFilter = null;
  products: Product[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit() { }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product: Product) => this.onProductRetrieved(product),
      error: (err: string) => this.errorMessage = err
    });
  }
  toggleImage() {

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