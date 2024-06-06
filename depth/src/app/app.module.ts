import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [BrowserModule, HttpClientModule],
    providers: [HttpClient],
    bootstrap: []
})

export class AppModule {

}