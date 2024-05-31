import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AppService } from './app.service';
import { ThemeService } from './theme.service';
import { PipesComponent } from './pipes/pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent , ReactiveFormsModule, SignupComponent , PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  appService = inject(AppService)
  root = this.appService.getRoot();
  name = this.appService.getName();
  constructor(private themeService : ThemeService) {
    this.themeService = themeService;
  }
  theme = this.themeService.getTheme();
}
