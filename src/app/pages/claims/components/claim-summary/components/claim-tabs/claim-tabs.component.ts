import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IRouterLinks } from '../../../../../../shared/interfaces/constants.interface';

@Component({
  selector: 'app-claim-tabs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './claim-tabs.component.html',
  styleUrl: './claim-tabs.component.scss',
})
export class ClaimTabsComponent {
  claimsTabOptions: IRouterLinks[] = [
    {
      label: 'Incident',
      iconSrc: 'assets/icons/claims.svg',
      routerLink: 'incident',
    },
    {
      label: 'Details',
      iconSrc: 'assets/icons/details.svg',
      routerLink: 'details',
    },
    {
      label: 'Risk at DOL',
      iconSrc: 'assets/icons/risk.svg',
      routerLink: 'risk-at-dol',
    },
    {
      label: 'Memos',
      iconSrc: 'assets/icons/memos.svg',
      routerLink: 'memos',
    },
    {
      label: 'Dairy Items',
      iconSrc: 'assets/icons/dairy.svg',
      routerLink: 'dairy-items',
    },
    {
      label: 'Financial',
      iconSrc: 'assets/icons/financial.svg',
      routerLink: 'financial',
    },
    {
      label: 'Documents',
      iconSrc: 'assets/icons/documents.svg',
      routerLink: 'documents',
    },
  ];

  private _router = inject(Router);

  isActive(link: string): boolean {
    return this._router.url.includes(link);
  }
}
