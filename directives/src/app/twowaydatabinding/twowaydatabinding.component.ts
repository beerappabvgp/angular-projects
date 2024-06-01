import { Component, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaydatabinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaydatabinding.component.html',
  styleUrl: './twowaydatabinding.component.css'
})
export class TwowaydatabindingComponent implements OnChanges , OnInit {
  public title!: string;
  constructor() {}
  ngOnInit(): void {
      this.title = "Hello Two Way!!";
      console.log("Initialized two way binding");
  }
  ngOnChanges(): void {
      console.log("title changed : " , this.title);
  }
}
