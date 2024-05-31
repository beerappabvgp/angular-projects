import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import e from 'express';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  favoriteFramework!: string;
  onKeyDown(e: any) {
    console.log(this.favoriteFramework);
  }
  showFramework() {
    alert(this.favoriteFramework);
  }
}
