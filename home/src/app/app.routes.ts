import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path : '',
        title : 'home page',
        component: HomeComponent
    },
    {
        path : 'details/:id',
        title: 'Details page',
        component: DetailsComponent,
    }
];
