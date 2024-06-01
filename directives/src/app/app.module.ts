import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { HighlightDirective } from "./highlight.directive";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        HighlightDirective,
    ],
    imports: [BrowserModule, AppComponent],
    providers: [],
    bootstrap: []

})
export class AppModule {}