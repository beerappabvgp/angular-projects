import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LifecycleComponent, TwowaydatabindingComponent, DirectivesComponent, CommonModule, ServicesComponent],
})
export class AppComponent implements OnInit{

  items : string[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
      this.items = this.dataService.getData();
      console.log(this.items);
  }

  addItem(newItem : string) {
    this.dataService.addData(newItem);
    this.items = this.dataService.getData();
  }


  title = 'directives';
  name = "Bharath";
  imageUrl = "/photo.jpg"
  onClick(e: any) {
    this.title = "Title changed";
    e.target.textContent = "Title Changed";
  }
}
