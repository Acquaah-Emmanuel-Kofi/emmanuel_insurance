import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent {
  searchTermValue = output<string>();
  placeholder = input<string>('Search');
  customClasses = input<string>('');
  smallSize = input<boolean>(false);
  searchTerm: string = '';

  handleSearchFilter(event: string) {
    this.searchTermValue.emit(event);
  }
}
