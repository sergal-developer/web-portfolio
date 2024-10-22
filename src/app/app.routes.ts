import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [];


const appRoutes: Routes = [
    {
      path: '',
      // component: LandingComponent,
      // children: []
      loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)
    },
  ];
  
  export const AppRoutes = RouterModule.forRoot(appRoutes, {
    useHash: true,
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules});
