import { Component, signal } from '@angular/core';
import { TabNavbarComponent } from '../tab-navbar/tab-navbar.component';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [TabNavbarComponent, TabContentComponent],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss',
})
export class TabGroupComponent {
  activeTab = signal<number>(0);
  activeTabLabel = signal<string>('Home')

  setActiveTab(tab: { index: number; label: string }) {
    this.activeTab.set(tab.index);
    this.activeTabLabel.set(tab.label);
  }
}
