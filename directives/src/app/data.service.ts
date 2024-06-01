import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  private data: string[] = ["Item1" , "Item2" , "Item3"];

  getData() {
    return this.data;
  }

  addData(item : string) {
    this.data.push(item);
  }

}
