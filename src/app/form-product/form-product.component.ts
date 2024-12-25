import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../models/Product';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
 product: Product = new Product();
 products: Product[] = [];
 onSave(form: NgForm) {
  if(form.valid) {
    console.log(this.product);
    this.products.push(this.product);
    console.log(this.products);
  }
 }
}
