import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private theme : string = "Dark";
    private isDarkTheme : boolean = true;
    getTheme() {
        return this.theme;
    }
    get getIsDarkTheme() {
        return this.isDarkTheme
    }
}