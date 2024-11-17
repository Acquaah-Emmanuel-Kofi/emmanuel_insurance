import { Routes } from '@angular/router';
import { ClaimSummaryComponent } from './components/claim-summary/claim-summary.component';
import { IncidentComponent } from './components/claim-summary/components/incident/incident.component';
import { DairyItemComponent } from './components/claim-summary/components/dairy-item/dairy-item.component';

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
        path: '',
        redirectTo: 'incident',
        pathMatch: 'full',
      },
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
        component: DairyItemComponent,
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
