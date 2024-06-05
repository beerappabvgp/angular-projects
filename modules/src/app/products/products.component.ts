import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productForm = new FormGroup({
    id : new FormControl(0),
    name: new FormControl(""),
    category : new FormControl(""),
    quantity : new FormControl(0),
  });

  handleSubmit() {
    alert(`${this.productForm.value.id} | ${this.productForm.value.name} | ${this.productForm.value.category} | ${this.productForm.value.quantity}`);
  }

}
