import { Component } from '@angular/core';
import { FinancialStatCardComponent } from './components/financial-stat-card/financial-stat-card.component';
import { ILabelValue } from '../../../../../../shared/interfaces/constants.interface';

type StatCards = {
  title: string;
  price: number;
  subPrices: ILabelValue[];
}

@Component({
  selector: 'app-financial',
  standalone: true,
  imports: [FinancialStatCardComponent],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.scss',
})
export class FinancialComponent {
  financialStatCards: StatCards[] = [
    {
      title: 'Claimed',
      price: 5000,
      subPrices: [
        {
          label: 'Initial Claimed',
          value: 5999,
        },
      ],
    },
    {
      title: 'Excess',
      price: 250,
      subPrices: [
        {
          label: 'Initial Excess',
          value: 250,
        },
        {
          label: 'Excess Recovered',
          value: 0,
        },
      ],
    },
    {
      title: 'Paid',
      price: 0,
      subPrices: [
        {
          label: 'Recovered',
          value: 0,
        },
        {
          label: 'Salvaged',
          value: 0,
        },
      ],
    },
    {
      title: 'Balance',
      price: 4850,
      subPrices: [
        {
          label: 'Cost of Claim',
          value: 4850,
        },
      ],
    },
  ];
}
