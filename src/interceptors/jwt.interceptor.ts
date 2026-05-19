import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (!token || isPublicAuthRequest(req.url)) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};

function isPublicAuthRequest(url: string): boolean {
  return url.includes('/api/auth/login')
    || url.includes('/api/auth/reset-password')
    || url.endsWith('/login')
    || url.endsWith('/reset-password');
}
