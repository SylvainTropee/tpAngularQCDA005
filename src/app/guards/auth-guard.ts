import {CanActivateFn, RedirectCommand, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Auth} from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(Auth)
  const router = inject(Router)

  if(authService.isLogged()){
    return  true;
  }
  return new RedirectCommand(
    router.createUrlTree([''])
  );
};
