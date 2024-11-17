import { Component, input } from '@angular/core';
import { ILabelValue } from '../../../../../../../../shared/interfaces/constants.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-financial-stat-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './financial-stat-card.component.html',
  styleUrl: './financial-stat-card.component.scss',
})
export class FinancialStatCardComponent {
  title = input.required<string>();
  price = input.required<number>();
  subPrices = input<ILabelValue[]>([]);
} 
