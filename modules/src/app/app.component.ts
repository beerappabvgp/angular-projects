import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ServiceComponent } from './service/service.component';
import { CalculatorService } from './service/service.service';
import { InputComponent } from './input/input.component';
import { CarService } from './service/cars.service';
import { ChildComponent } from './child/child.component';
import { ApplayoutComponent } from './applayout/applayout.component';
import { StarPipe } from './reverse.pipe';
// import { InputComponent } from './input/input.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule , EventsComponent, ServiceComponent, InputComponent, ChildComponent, RouterLink , ApplayoutComponent,UpperCasePipe,DatePipe,StarPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  date = new Date();
  constructor(private carService : CarService) {

  }
  cars = this.carService.getCars();
  occupation = "Angular developer"
  title = 'modules';
  taskTitle = "Learning";
  isCompleted = false;
  formIsValid = true;
  custom = "Hello Attr";
  calculatorService = inject(CalculatorService);
  sum = 0
  addSum() {
    console.log("adding...");
    this.calculatorService.add(2,3);
    console.log(this.calculatorService.getSum());
    this.sum = this.calculatorService.getSum();
  }
  count = 0
  handleCount(count: number) {
    this.count = count;
  }

  isAdmin = false;

  isEditable = true;
  greet = ""
  greetPerson() {
    this.greet = "Hello man !!! ";
  }

  message = "before hover!!";
  handleMouseOver() {
    this.message = "Hello mouse over";
  }














  users = [
    {
        "id": 1,
        "username": "user1",
        "email": "user1@example.com",
        "age": 25,
        "gender": "male",
        "city": "New York"
    },
    {
        "id": 2,
        "username": "user2",
        "email": "user2@example.com",
        "age": 30,
        "gender": "female",
        "city": "Los Angeles"
    },
    {
        "id": 3,
        "username": "user3",
        "email": "user3@example.com",
        "age": 22,
        "gender": "male",
        "city": "Chicago"
    },
    {
        "id": 4,
        "username": "user4",
        "email": "user4@example.com",
        "age": 28,
        "gender": "female",
        "city": "Houston"
    },
    {
        "id": 5,
        "username": "user5",
        "email": "user5@example.com",
        "age": 35,
        "gender": "male",
        "city": "Miami"
    }
]

  updateTitle(newTitle : string) {
    this.taskTitle = newTitle;
  }

  completeTask() {
    this.isCompleted = true;
  }

}
