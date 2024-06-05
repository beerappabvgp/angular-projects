import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  favoriteFramework = "";
  username = "";
  showFramework() {
    alert(`favoriteFramework : ${this.favoriteFramework}`);
  }
}
