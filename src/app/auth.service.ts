import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean{
    return !! localStorage.getItem('login_auth');
  }
  logout(){
    localStorage.removeItem('login_auth');
  }
}
