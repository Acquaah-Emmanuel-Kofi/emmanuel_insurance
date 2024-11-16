import { Component, input } from '@angular/core';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { SearchbarComponent } from '../../../../shared/components/searchbar/searchbar.component';

@Component({
  selector: 'app-claim-summary',
  standalone: true,
  imports: [BreadcrumbComponent, SearchbarComponent],
  templateUrl: './claim-summary.component.html',
  styleUrl: './claim-summary.component.scss',
})
export class ClaimSummaryComponent {
  claimNumber = input.required<string>();
  policyHolder = input.required<string>();
  policyNumber = input.required<string>();
}
