import { Component } from '@angular/core';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image.component.html',
  providers: [
    provideImgixLoader('http://localhost:4200/public'),
  ],
})
export class ImageComponent {
  imageUrl = "bharath.jpg"
}
