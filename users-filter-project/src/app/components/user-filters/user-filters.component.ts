import { Component } from '@angular/core';

@Component({
  selector: 'app-user-filters',
  templateUrl: './user-filters.component.html',
  styleUrl: './user-filters.component.scss'
})
export class UserFiltersComponent {
  statusOptions = [
    {value: true, viewValue: 'Ativo'},
    {value: false, viewValue: 'Inativo'},
  ];
}
