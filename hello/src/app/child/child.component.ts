import { Component, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    console.log("event emitted");
    this.messageEvent.emit("Hello from child component!");
  }
}
