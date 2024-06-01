import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { HighlightDirective } from "./highlight.directive";
import { BrowserModule } from "@angular/platform-browser";
import { DirectivesComponent } from "./directives/directives.component";
import { DataService } from "./data.service";
@NgModule({
    declarations: [
        HighlightDirective,
    ],
    imports: [BrowserModule, AppComponent, DirectivesComponent],
    providers: [DataService],
    bootstrap: []

})
export class AppModule {}