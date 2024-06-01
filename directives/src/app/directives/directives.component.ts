import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  show = true;
  items = ["Item1" , "Item2" , "Item3" , "Item4"];
  choice = "A";
  toggle() {
    this.show = !this.show;
  }
  isActive = true;
  toggleActive() {
    this.isActive = !this.isActive;
  }
}
