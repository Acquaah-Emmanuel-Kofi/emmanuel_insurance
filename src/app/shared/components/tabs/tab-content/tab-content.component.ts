import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.scss',
})
export class TabContentComponent {
  activeTab = input<number>(0);
}
