import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  totalItems = input<number>(0);
  itemsPerPage = model<number>(15);
  currentPage = signal<number>(1);
  totalPages = signal<number>(0);

  pageChanged = output<number>();
  itemsPerPageChanged = output<number>();

  ngOnInit(): void {
    this.updateTotalPages();
  }

  updateTotalPages(): void {
    this.totalPages.set(Math.ceil(this.totalItems() / this.itemsPerPage()));
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((prev) => prev + 1);
      this.pageChanged.emit(this.currentPage());
    }
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((prev) => prev - 1);
      this.pageChanged.emit(this.currentPage());
    }
  }

  handleRowsPerPageChange(event: Event): void {
    const newItemsPerPage = parseInt(
      (event.target as HTMLSelectElement).value,
      10
    );
    this.itemsPerPage.set(newItemsPerPage);
    this.itemsPerPageChanged.emit(this.itemsPerPage());
    this.currentPage.set(1); 
    this.updateTotalPages();
    this.pageChanged.emit(this.currentPage());
  }
}
