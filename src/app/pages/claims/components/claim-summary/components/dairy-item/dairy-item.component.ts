import { Component } from '@angular/core';
import { EmptyDataComponent } from '../../../../../../shared/components/empty-data/empty-data.component';

@Component({
  selector: 'app-dairy-item',
  standalone: true,
  imports: [EmptyDataComponent],
  templateUrl: './dairy-item.component.html',
  styleUrl: './dairy-item.component.scss',
})
export class DairyItemComponent {
  subTitleText = 'Click "Add New Diary Item" to create one';
}
