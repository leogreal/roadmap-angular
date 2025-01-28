import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'registrationDate', 'active'];
  
  @Input({ required: true }) usersList:IUser[] = [];
  
  @Output('userSelected') userSelectedEmitter = new EventEmitter<IUser>()

  onUserSelected(user: IUser): void {
    this.userSelectedEmitter.emit(user);
  }
}
