import { Component, output } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-function-output',
  standalone: true,
  imports: [],
  templateUrl: './function-output.component.html',
  styleUrl: './function-output.component.css'
})
export class FunctionOutputComponent {
  onNameChange = output<string>({ alias : "onNameChange"});
  // onNameChange = outputFromObservable()
  handleNameChange() {
    this.onNameChange.emit("Gurumurthy");
  }
}
