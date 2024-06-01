import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LifecycleComponent],
})
export class AppComponent {
  title = 'directives';
}
