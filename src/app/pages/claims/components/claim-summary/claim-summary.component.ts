import { Component, input } from '@angular/core';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { SearchbarComponent } from '../../../../shared/components/searchbar/searchbar.component';
import { ClaimTabsComponent } from './components/claim-tabs/claim-tabs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-claim-summary',
  standalone: true,
  imports: [BreadcrumbComponent, SearchbarComponent, ClaimTabsComponent, RouterOutlet],
  templateUrl: './claim-summary.component.html',
  styleUrl: './claim-summary.component.scss',
})
export class ClaimSummaryComponent {
  claimNumber = input.required<string>();
  policyHolder = input.required<string>();
  policyNumber = input.required<string>();
}
