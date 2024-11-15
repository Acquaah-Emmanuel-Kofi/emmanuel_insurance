import { Routes } from '@angular/router';
import { ClaimsComponent } from '../../../pages/claims/claims.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'claims',
    component: ClaimsComponent,
    loadChildren: () =>
      import('../../../pages/claims/claims.routes').then(
        (routes) => routes.claimsRoutes
      ),
  },
];
