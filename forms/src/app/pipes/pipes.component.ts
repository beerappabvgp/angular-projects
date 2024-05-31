import { Component } from '@angular/core';
import { DecimalPipe, LowerCasePipe, NumberSymbol, UpperCasePipe } from '@angular/common';
import { StarPipe } from './star.pipe';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DecimalPipe, StarPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  message = "Learning Pipes in Angular 🚀🚀🚀."
  luckyNumber = 1000;
}
