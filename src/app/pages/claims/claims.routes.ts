import { Routes } from '@angular/router';
import { ClaimSummaryComponent } from './components/claim-summary/claim-summary.component';
import { IncidentComponent } from './components/claim-summary/components/incident/incident.component';
import { DairyItemComponent } from './components/claim-summary/components/dairy-item/dairy-item.component';
import { FinancialComponent } from './components/claim-summary/components/financial/financial.component';
import { DocumentsComponent } from './components/claim-summary/components/documents/documents.component';
import { DetailsComponent } from './components/claim-summary/components/details/details.component';
import { RiskAtDolComponent } from './components/claim-summary/components/risk-at-dol/risk-at-dol.component';
import { MemosComponent } from './components/claim-summary/components/memos/memos.component';

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
        component: DetailsComponent,
      },
      {
        path: 'risk-at-dol',
        component: RiskAtDolComponent,
      },
      {
        path: 'memos',
        component: MemosComponent,
      },
      {
        path: 'dairy-items',
        component: DairyItemComponent,
      },
      {
        path: 'financial',
        component: FinancialComponent,
      },
      {
        path: 'documents',
        component: DocumentsComponent,
      },
    ],
  },
];
