import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HeaderComponent } from './header/header/header.component';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule , CommonModule , HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'todo-apk';
  isAuthenticated : Boolean = false;

  constructor(private authService : AuthService,private router : Router, private cdr : ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(()=>{
    this.isAuthenticated = this.authService.isAuthenticated();
    this.cdr.detectChanges();
    if(this.isAuthenticated == false){
      this.authService.logout();
      this.router.navigateByUrl('/login')
    }
    })
     this.isAuthenticated =this.authService.isAuthenticated()
  }

}

