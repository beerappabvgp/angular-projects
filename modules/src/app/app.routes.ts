import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path:'',
        title: "App Home page",
        component: HomeComponent,
    },
    {
        path: 'user',
        title: "App user page",
        component: UserComponent,
    },
    {
        path: 'reactive',
        title: "Reactive Forms",
        component: ReactiveComponent,
    },
    {
        path : "product",
        title: "Products",
        component: ProductsComponent,
    }
];
