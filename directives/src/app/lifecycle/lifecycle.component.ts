import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit,OnChanges,OnDestroy {
  @Input() message : string = "hello";
  constructor() {
    console.log("from constructor");
    console.log("data from parent : ", this.message);
  }

  ngOnInit(): void {
      console.log("from InIt");
      console.log("data from parent : ", this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("from ngOnChanges");
      console.log("data from parent : ", this.message);
  }

  ngOnDestroy(): void {
      console.log("from ngOnDestroy");
  }

}
