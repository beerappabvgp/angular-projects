import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() incrementCountEvent = new EventEmitter<number>();
  count = 0;
  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}
