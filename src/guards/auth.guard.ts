import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  const allowedRoles: string[] = route.data?.['roles'] ?? [];
  if (allowedRoles.length > 0) {
    const userRole = auth.getRole();
    const allowed = allowedRoles.map(role => role.toUpperCase().replace(/^ROLE_/, ''));

    if (!allowed.includes(userRole)) {
      router.navigate(['/unauthorized']);
      return false;
    }
  }

  return true;
};
