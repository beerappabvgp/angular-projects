import { Component } from "@angular/core";
import { ButtonCustom } from "./button/button.component";
import { ProductsComponent } from "./products/products.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { EventsComponent } from "./events/events.component";
import { UsersComponent } from "./users/users.component";
import { ChildComponent } from "./child/child.component";


@Component({
    standalone:true,
    selector:"app-root",
    templateUrl: "./app.component.html",
    imports: [ButtonCustom , ProductsComponent , PropertyBindingComponent , EventsComponent , UsersComponent, ChildComponent],
})
export class AppComponent {
    name = "Bharath";
    isServerRunning = true;
    receivedMessage: string | undefined = "anil";
    receiveMessage(data: string | undefined) {
        this.receivedMessage = data;
        console.log("data" , this.receivedMessage);
    }
}