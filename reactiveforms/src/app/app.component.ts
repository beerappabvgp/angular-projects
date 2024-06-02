import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'reactiveforms';
  userForm!: FormGroup;

  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
      this.userForm = this.fb.group({
        name: ['' , [Validators.required]],
        email: ['' , [Validators.required, Validators.email]]
      })
  }

  onSubmit() {
      console.log('Form Submitted!' , this.userForm.value);
  }
}

// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {

// }
