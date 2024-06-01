import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  providers: []
})
export class ServicesComponent implements OnInit{
  items : string[] = [];
  constructor(private dataService : DataService) {}

  ngOnInit(): void {
      this.items = this.dataService.getData();
  }

  addItem(item : string) {
    this.dataService.addData(item);
    this.items = this.dataService.getData();
  }


}
