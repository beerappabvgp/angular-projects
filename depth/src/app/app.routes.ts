import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FunctionOutputComponent } from './function-output/function-output.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home Page"
    },
    {
        path: 'input',
        component: InputComponent,
        title: 'Input Page'
    },
    {
        path: 'output',
        component: OutputComponent,
        title : 'OutPut Component'
    },
    {
        path: 'function',
        component: FunctionOutputComponent,
        title: "Function output component",
    }
];
