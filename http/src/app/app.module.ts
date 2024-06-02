import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./auth.interceptor";
import { PreloadAllModules, RouterLink, RouterModule, Routes } from "@angular/router";
import { routes } from "./app.routes";
import { FeatureModule } from './feature/feature.module';



@NgModule({
    declarations: [],
    bootstrap: [],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), RouterLink, FeatureModule], 
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AppModule {}

bootstrapApplication(AppComponent);