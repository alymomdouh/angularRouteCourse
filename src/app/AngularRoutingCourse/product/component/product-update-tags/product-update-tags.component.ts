import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResolved } from '../../model/product';

@Component({
  selector: 'app-product-update-tags',
  templateUrl: './product-update-tags.component.html',
  styleUrls: ['./product-update-tags.component.css']
})
export class ProductUpdateTagsComponent implements OnInit {
  errorMessage: string = '';
  newTags = '';
  product: Product | null = null;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route?.parent?.data.subscribe(data => {
      const resolvedData: ProductResolved = data["Product"];
      this.product = resolvedData.product;
      this.errorMessage = resolvedData.error!;
    });
  }
  // Add the defined tags
  addTags(): void {
    if (this.product) {
      if (!this.newTags) {
        this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
      } else {
        const tagArray = this.newTags.split(',');
        this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
        this.newTags = '';
        this.errorMessage = '';
      }
    }
  }
  // Remove the tag from the array of tags.
  removeTag(idx: number): void {
    this.product?.tags?.splice(idx, 1);
  }
}