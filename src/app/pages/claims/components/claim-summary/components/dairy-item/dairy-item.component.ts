import { Component, inject } from '@angular/core';
import { EmptyDataComponent } from '../../../../../../shared/components/empty-data/empty-data.component';
import {
  Dialog,
  DialogModule,
} from '@angular/cdk/dialog';
import { DairyFormComponent } from '../dairy-form/dairy-form.component';

@Component({
  selector: 'app-dairy-item',
  standalone: true,
  imports: [EmptyDataComponent, DialogModule],
  templateUrl: './dairy-item.component.html',
  styleUrl: './dairy-item.component.scss',
})
export class DairyItemComponent {
  subTitleText = 'Click "Add New Diary Item" to create one';

  readonly dialog = inject(Dialog);

  openDialog() {
    this.dialog.open<string>(DairyFormComponent);
  }
}
