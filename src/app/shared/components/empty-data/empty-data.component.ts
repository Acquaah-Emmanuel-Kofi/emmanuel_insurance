import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-empty-data',
  standalone: true,
  imports: [],
  templateUrl: './empty-data.component.html',
  styleUrl: './empty-data.component.scss',
})
export class EmptyDataComponent {
  title = input<string>('No Data Available Yet');
  subTitle = input<string>('');
  buttonTitle = input<string>('');

  onClickButton = output<void>();

  triggerButton() {
    this.onClickButton.emit();
  }
}
