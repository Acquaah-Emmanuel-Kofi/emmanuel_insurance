import { Routes } from '@angular/router';
import { ClaimSummaryComponent } from './components/claim-summary/claim-summary.component';
import { IncidentComponent } from './components/claim-summary/components/incident/incident.component';

export const claimsRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'claim-summary',
    component: ClaimSummaryComponent,
    children: [
      {
        path: 'incident',
        component: IncidentComponent,
      },
      {
        path: 'details',
        component: IncidentComponent,
      },
      {
        path: 'risk-at-dol',
        component: IncidentComponent,
      },
      {
        path: 'memos',
        component: IncidentComponent,
      },
      {
        path: 'dairy-items',
        component: IncidentComponent,
      },
      {
        path: 'financial',
        component: IncidentComponent,
      },
      {
        path: 'documents',
        component: IncidentComponent,
      },
    ],
  },
];
