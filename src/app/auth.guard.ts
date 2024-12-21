import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AuthService } from './auth.service';
// @Injectable({
//   providedIn : "root"
// })

export const authGuard: CanActivateFn = (route, state) => {

  const login_auth = inject(AuthService);
  const router = inject(Router);
  if(login_auth.isAuthenticated()){
    console.log("auth works");
    return true;
    
  }
  else{
    router.navigate(['/login']);
    return false
  }
  return true;
};
