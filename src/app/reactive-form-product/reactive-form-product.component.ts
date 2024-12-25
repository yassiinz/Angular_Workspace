import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Product } from '../models/Product';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-product',
  templateUrl: './reactive-form-product.component.html',
  styleUrls: ['./reactive-form-product.component.css']
})
export class ReactiveFormProductComponent {
productForm!: FormGroup;
constructor(private fb: FormBuilder) {
  this.productForm = new  FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern('^[a-zA-Z]+$')]),
    image: new FormControl('',[ Validators.required]),
    categoryId: new FormControl('',[ Validators.required]),
    description: new FormControl('',[ Validators.required]),
    price: new FormControl('',[Validators.required , Validators.pattern('^\d+(\.\d+)?$')]),
    brand: new FormControl('',[Validators.required]),
    promotion: new FormControl('', [Validators.required, Validators.pattern('^(0|[1-9][0-9]?)$')]),
  });
}
onSubmit() {
  if (this.productForm.valid) {
    console.log('Form Submitted!');
    console.log(this.productForm.value);
  } else {
    console.log('Form Not Submitted!');
  }}
}
