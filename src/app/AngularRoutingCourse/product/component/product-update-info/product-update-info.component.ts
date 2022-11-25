import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update-info',
  templateUrl: './product-update-info.component.html',
  styleUrls: ['./product-update-info.component.css']
})
export class ProductUpdateInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm?: NgForm;
  errorMessage = '';
  product = { id: 1, productName: 'test', productCode: 'test', description: 'test' };
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
}
