import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { usersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  selectedUser: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = usersList;
      this.usersListFiltered = usersList;
    }, 3000);
  }

  onUserSelected(selectedUser: IUser): void {
    this.selectedUser = selectedUser;
    this.showUserDetails = true;
  }

  onFilterClicked(filterOptions: IFilterOptions): void {
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    const filterByName = (userName: string, filterName: string = '') =>
        filterName ? userName.toLowerCase().includes(filterName.toLowerCase()) : true;

    const filterByStatus = (userStatus: boolean, filterStatus: boolean | undefined) =>
        filterStatus === undefined ? true : userStatus === filterStatus;
    
    return usersList
      .filter((user) => filterByName(user.name, filterOptions.name))
      .filter((user) => filterByStatus(user.active, filterOptions.status));
  }
}
