import { Component } from '@angular/core';
import { ClaimsHeaderComponent } from './components/claims-header/claims-header.component';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [ClaimsHeaderComponent],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss'
})
export class ClaimsComponent {

}
