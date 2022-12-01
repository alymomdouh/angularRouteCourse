import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/AngularRoutingCourse/messages/service/message.service';
import { Product, ProductResolved } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-easy-update',
  templateUrl: './product-easy-update.component.html',
  styleUrls: ['./product-easy-update.component.css']
})
export class ProductEasyUpdateComponent implements OnInit {
  pageTitle = 'Product Edit';
  errorMessage?: string;
  product: Product | null=null;
  constructor(private productService: ProductService,
    private messageService: MessageService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id')!;
    // this.getProduct(id);

    // we not need git id and service for product only need resolver
    // const resolvedData: ProductResolved = this.route.snapshot.data["Product"];
    // this.errorMessage = resolvedData.error;
    // this.onProductRetrieved(resolvedData.product!);

    // read data as subscribe not property
    this.route.data.subscribe(data => {
      const resolvedData: ProductResolved = data["Product"];
      ///if (resolvedData !== undefined) { 
      debugger
      this.onProductRetrieved(resolvedData?.product);
      this.errorMessage = resolvedData.error!;
      //}
    });
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.onProductRetrieved(product),
      error: err => this.errorMessage = err
    });
  }
  onProductRetrieved(product: Product | null): void {
    this.product = product;
    if (!this.product) {
      this.pageTitle = 'No product found';
    } else {
      if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }
    }
  }
  deleteProduct(): void {
    //if (this.product.id===0) {
    if (!this.product || !this.product.id) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product?.productName} was deleted`);
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id).subscribe({
          next: () => this.onSaveComplete(`${this.product?.productName} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }
  saveProduct(): void {
    if (this.product) {
      if (this.product.id === 0) {
        this.productService.createProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The new ${this.product?.productName} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.productService.updateProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.product?.productName} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    // Navigate back to the product list
    this.router.navigate(['/AngularRoutingCourse/Product/list']);
    // this.router.navigate(['/AngularRoutingCourse/Product/list'],
    //   { queryParams: { filterBy: "", showImage: "Show" } }// Hide
    // );

  }
}


