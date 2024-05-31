import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetComponent } from "./reset/reset.component";

export const routes : Routes = [
    {
        path: 'welcome',
        title: 'Welcome Page',
        component: WelcomeComponent,
    },
    {
        path: 'signup',
        title: "Sign Up Page",
        component: SignupComponent,
    },
    {
        path: 'signup/reset',
        title: "Reset Password",
        component: ResetComponent,
    }
]