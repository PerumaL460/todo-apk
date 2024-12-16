import { CanActivateFn, Router } from '@angular/router';
import { routes } from './app.routes';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = false;
  if(isLoggedIn){
    return true;
  }
  else{
    alert("contact administator");
    return router.navigateByUrl('/home')
  }
};
