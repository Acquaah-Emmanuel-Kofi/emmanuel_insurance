import { Component, input } from '@angular/core';
import { TableHeaderComponent } from './components/table-header/table-header.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableHeaderComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  data = input<any[]>([]);
  columns = input<{ label: string; field: string }[]>([]);
  itemsPerPage = input<number>(15)
  paginatedData: any[] = [];
  currentPage: number = 1; 
}
