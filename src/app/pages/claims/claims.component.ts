import { Component } from '@angular/core';
import { ClaimsHeaderComponent } from './components/claims-header/claims-header.component';
import { SearchbarComponent } from '../../shared/components/searchbar/searchbar.component';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [ClaimsHeaderComponent, SearchbarComponent],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss'
})
export class ClaimsComponent {

}
