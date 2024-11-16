import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
  totalNumberOfData = input.required<number>();
  buttonTitle = input<string>();
  buttonClick = output<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
