import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { IUser } from './interfaces/user/user.interface';
import { usersList } from './data/users-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedUser: IUser = usersList[0];
}
