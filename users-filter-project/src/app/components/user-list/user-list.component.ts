import { Component } from '@angular/core';
import { usersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  usersList:IUser[] = usersList;
  displayedColumns: string[] = ['name', 'registrationDate', 'active'];

  onUserSelected(user: IUser): void {}
}
