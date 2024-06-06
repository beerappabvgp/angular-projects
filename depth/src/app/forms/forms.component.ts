import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
  })
  name = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    alert(`${this.profileForm.value.firstName} | ${this.profileForm.value.lastName}`);
  }

}
