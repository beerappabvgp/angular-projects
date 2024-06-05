import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  announcement = "Hello Angular Help me!!!";
  transformText(e : any) { 
    this.announcement = this.announcement.toUpperCase();
    console.log(e);
  }
}
