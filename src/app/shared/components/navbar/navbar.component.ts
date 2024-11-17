import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IRouterLinks } from '../../interfaces/constants.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navlinks: IRouterLinks[] = [
    {
      label: 'Home',
      iconSrc: 'assets/icons/home.svg',
      routerLink: '/dashboard',
    },
    {
      label: 'Claims',
      iconSrc: 'assets/icons/claims.svg',
      routerLink: '/dashboard/claims',
    },
    {
      label: 'Quote History',
      iconSrc: 'assets/icons/quote_history.svg',
      routerLink: '/dashboard/quote-history',
    },
    {
      label: 'Single Quote',
      iconSrc: 'assets/icons/single_quote.svg',
      routerLink: '/dashboard/single-quote',
    },
  ];
}
