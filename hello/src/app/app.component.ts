import { Component } from "@angular/core";
import { ButtonCustom } from "./button/button.component";

@Component({
    standalone:true,
    selector:"app-root",
    templateUrl: "./app.component.html",
    imports: [ButtonCustom],
})
export class AppComponent {
    name = "Bharath";
    isServerRunning = true;
}