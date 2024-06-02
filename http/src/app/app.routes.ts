import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
export const routes : Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path : 'feature',
        loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
      }
]
