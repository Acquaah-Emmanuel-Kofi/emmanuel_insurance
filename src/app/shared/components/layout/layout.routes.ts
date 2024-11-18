import { Routes } from '@angular/router';
import { ClaimsComponent } from '../../../pages/claims/claims.component';
import { QuoteHistoryComponent } from '../../../pages/quote-history/quote-history.component';
import { SingleQuoteComponent } from '../../../pages/single-quote/single-quote.component';
import { HomeComponent } from '../../../pages/home/home.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'claims',
    component: ClaimsComponent,
    loadChildren: () =>
      import('../../../pages/claims/claims.routes').then(
        (routes) => routes.claimsRoutes
      ),
  },
  {
    path: 'quote-history',
    component: QuoteHistoryComponent,
  },
  {
    path: 'single-quote',
    component: SingleQuoteComponent,
  },
];
