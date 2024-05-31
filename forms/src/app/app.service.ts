import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AppService {
    root = "Root Application!!";
    getRoot() {
        return this.root;
    }
    name = "Bharath";
    getName() {
        return this.name;
    }
}