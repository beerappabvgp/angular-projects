import { Component } from "@angular/core";
import { ButtonCustom } from "./button/button.component";
import { ProductsComponent } from "./products/products.component";

@Component({
    standalone:true,
    selector:"app-root",
    templateUrl: "./app.component.html",
    imports: [ButtonCustom , ProductsComponent],
})
export class AppComponent {
    name = "Bharath";
    isServerRunning = true;
}