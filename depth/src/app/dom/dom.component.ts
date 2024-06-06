import { Component, ElementRef, Renderer2, afterRender } from '@angular/core';

@Component({
  selector: 'app-dom',
  standalone: true,
  imports: [],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.css'
})
export class DomComponent {
  // injecting entire component host element 
  constructor(private elementRef : ElementRef, private renderer : Renderer2) {
    // console.log(elementRef.nativeElement);
    // afterRender(() => {
    //   elementRef.nativeElement.querySelector('input')?.focus();
    // });
  }

}
