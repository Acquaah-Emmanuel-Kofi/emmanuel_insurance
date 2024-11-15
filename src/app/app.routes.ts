import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('../app/shared/components/layout/layout.routes').then(
        (routes) => routes.layoutRoutes
      ),
  },
];
