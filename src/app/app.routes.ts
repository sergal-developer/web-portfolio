import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PortfolioViewComponent } from './views/portfolio/portfolio.component';

export const routes: Routes = [];


const appRoutes: Routes = [
    {
      path: '',
      loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)
    },
    {
      path: 'portfolio/:project',
      component: PortfolioViewComponent
      // loadChildren: () => import('./views/portfolio/portfolio.module').then(m => m.PortfolioModule)
    },
  ];
  
  export const AppRoutes = RouterModule.forRoot(appRoutes, {
    useHash: true,
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules});
