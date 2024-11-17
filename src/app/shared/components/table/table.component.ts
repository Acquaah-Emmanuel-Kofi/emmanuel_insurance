import { Component, computed, effect, input, model, OnInit, output, signal } from '@angular/core';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EmptyDataComponent } from '../empty-data/empty-data.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableHeaderComponent, PaginationComponent, EmptyDataComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  data = input<any[]>([]);
  columns = input<{ label: string; field: string }[]>([]);
  itemsPerPage = signal<number>(5);
  currentPage = signal<number>(1);
  emptyMessageTitle = input<string>('');
  emptyMessageSubTitle = input<string>('');

  rowClicked = output<void>();

  paginatedData = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
    const endIndex = startIndex + this.itemsPerPage();
    return this.data().slice(startIndex, endIndex);
  });

  onPageChange(newPage: number): void {
    this.currentPage.set(newPage);
  }

  onItemsPerPageChange(newItemsPerPage: number): void {
    this.itemsPerPage.set(newItemsPerPage);
    this.currentPage.set(1);
  }

  onRowClick(row: any): void {
    this.rowClicked.emit(row);
  }
}
