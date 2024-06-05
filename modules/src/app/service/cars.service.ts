import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class CarService {

    cars = ["volvo","mercedes"];

    getCars() {
        return this.cars;
    }

    getCar(id : number) {
        return this.cars[id];
    }

}

