import { Component, input } from '@angular/core';

@Component({
  selector: 'app-claim-summary',
  standalone: true,
  imports: [],
  templateUrl: './claim-summary.component.html',
  styleUrl: './claim-summary.component.scss',
})
export class ClaimSummaryComponent {
  claimNumber = input.required<string>();
}
