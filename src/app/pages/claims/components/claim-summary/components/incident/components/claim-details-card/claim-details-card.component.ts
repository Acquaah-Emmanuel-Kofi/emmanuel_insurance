import { Component, input } from '@angular/core';

@Component({
  selector: 'app-claim-details-card',
  standalone: true,
  imports: [],
  templateUrl: './claim-details-card.component.html',
  styleUrl: './claim-details-card.component.scss',
})
export class ClaimDetailsCardComponent {
  title = input<string>();
  customClasses = input<string>(
    ''
  );
  items = input<{ label: string; value: string | null }[]>([]);
}
