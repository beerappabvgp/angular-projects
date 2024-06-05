import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  profileForm = new FormGroup({
    name : new FormControl('' , Validators.required),
    email: new FormControl('', [Validators.required , Validators.email]),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + " | " + this.profileForm.value.email
    );
  }

}
