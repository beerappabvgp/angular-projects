import { Component } from "@angular/core";
import { ButtonCustom } from "./button/button.component";
import { ProductsComponent } from "./products/products.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { EventsComponent } from "./events/events.component";

@Component({
    standalone:true,
    selector:"app-root",
    templateUrl: "./app.component.html",
    imports: [ButtonCustom , ProductsComponent , PropertyBindingComponent , EventsComponent],
})
export class AppComponent {
    name = "Bharath";
    isServerRunning = true;
}