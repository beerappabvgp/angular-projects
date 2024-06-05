import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CalculatorService {
    sum = 0;
    add(x : number , y : number) {
        this.sum = x + y;
    }

    getSum() {
        return this.sum;
    }
}