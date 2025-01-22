import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)
    },
    {
      path: 'portfolio/:project',
      // component: PortfolioViewComponent,
      loadChildren: () => import('./views/portfolio/portfolio.module').then(m => m.PortfolioModule)
    },
    {
      path: 'help',
      loadChildren: () => import('./views/help/help.module').then(m => m.HelpModule)
    },
  ];
  
  export const AppRoutes = RouterModule.forRoot(appRoutes, {
    useHash: true,
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules});
