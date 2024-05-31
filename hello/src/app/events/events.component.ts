import { Component } from '@angular/core';

@Component({
  selector: 'event-example',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
    greet() {
      console.log("Hi There 👋");
    }

    message = ""

    onMouseOver() {
      this.message = "Way to go 🚀."
    }
}
