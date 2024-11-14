import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

type Tabs = {
  label: string;
  iconSrc: string;
}

@Component({
  selector: 'app-tab-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-navbar.component.html',
  styleUrl: './tab-navbar.component.scss',
})
export class TabNavbarComponent {
  activeTab = input<number>(0);
  tabSelected = output<{ index: number; label: string }>();

  tabs: Tabs[] = [
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

  selectTab(index: number, label: string) {
    this.tabSelected.emit({ index, label });
  }
}
