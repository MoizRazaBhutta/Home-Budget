import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  if (!userService.isLoggedIn()) {
    router.navigate(['/create-account']);
    return false;
  }
  // If the user is logged in, allow access to the route
  return true;
};
