import { Component, inject, signal } from '@angular/core';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { SearchbarComponent } from '../../../../shared/components/searchbar/searchbar.component';
import { ClaimTabsComponent } from './components/claim-tabs/claim-tabs.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-claim-summary',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    SearchbarComponent,
    ClaimTabsComponent,
    RouterOutlet,
  ],
  templateUrl: './claim-summary.component.html',
  styleUrl: './claim-summary.component.scss',
})
export class ClaimSummaryComponent {
  claimNumber = signal<string>('');
  policyHolder = signal<string>('');
  policyNumber = signal<string>('');

  private _router = inject(Router);

  constructor() {
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      policyHolder: string;
      policyNumber: string;
      claimNumber: string;
    };
    this.policyHolder.set(state?.policyHolder || '');
    this.policyNumber.set(state?.policyNumber || '');
    this.claimNumber.set(state?.claimNumber || '');
  }
}
