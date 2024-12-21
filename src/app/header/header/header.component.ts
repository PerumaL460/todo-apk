import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { SearchBoxComponent } from "../../search-box/search-box.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,  SearchBoxComponent,CommonModule, SearchBoxComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isAuthenticated : Boolean = false;

  constructor(private authService : AuthService , private router : Router) {
     this.loadHeader();
  }
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
  Logout(){
    this.isAuthenticated = false;
    this.authService.logout()
    this.router.navigateByUrl('/login')  
  }

  loadHeader(){
       this.isAuthenticated = this.authService.isAuthenticated();
 
  }

}
