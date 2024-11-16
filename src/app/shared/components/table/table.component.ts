import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
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
