import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({ required : true , transform : trimString , alias: "name"}) name! : string;
}

function trimString(value : string | undefined) : string {
  return value?.trim() ?? "";
}
