import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , WelcomeComponent , ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
