import { Routes } from '@angular/router';
import { ClaimSummaryComponent } from './components/claim-summary/claim-summary.component';

export const claimsRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'claim-summary',
    component: ClaimSummaryComponent
  },
];
