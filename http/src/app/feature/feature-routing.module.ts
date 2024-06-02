import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { features } from 'process';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent,
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'feature',
    loadChildren: () => import('./feature.module').then(m => m.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
