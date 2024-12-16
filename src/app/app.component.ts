import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HeaderComponent } from './header/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule , CreateTodoComponent , HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-apk';
}
