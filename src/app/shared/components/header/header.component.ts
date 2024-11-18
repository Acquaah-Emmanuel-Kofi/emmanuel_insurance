import { Component } from '@angular/core';
import { getFirstTwoInitials } from '../../helpers/functions.helper';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  nameInitials(name: string) {
    return getFirstTwoInitials(name);
  }
}
