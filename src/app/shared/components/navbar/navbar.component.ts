import { Component } from '@angular/core';

type Navlinks = {
  label: string;
  iconSrc: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navlinks: Navlinks[] = [
    {
      label: 'Home',
      iconSrc: 'assets/icons/home.svg',
    },
    {
      label: 'Claims',
      iconSrc: 'assets/icons/claims.svg',
    },
    {
      label: 'Quote History',
      iconSrc: 'assets/icons/quote_history.svg',
    },
    {
      label: 'Single Quote',
      iconSrc: 'assets/icons/single_quote.svg',
    },
  ];
}
