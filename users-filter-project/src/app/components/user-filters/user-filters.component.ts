import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-user-filters',
  templateUrl: './user-filters.component.html',
  styleUrl: './user-filters.component.scss'
})
export class UserFiltersComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  } as IFilterOptions

  statusOptions = [
    {value: true, description: 'Ativo'},
    {value: false, description: 'Inativo'},
  ];

  @Output('filterClicked') filterClickedEmmiter = new EventEmitter<IFilterOptions>()

  onFilterClick(): void {
    this.filterClickedEmmiter.emit(this.filterOptions);
  }
}
