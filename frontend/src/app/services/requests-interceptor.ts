import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        accesstoken: localStorage.getItem('accesstoken')!,
      },
    });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.unauthorizedError(next, req);
            break;
        }

        return throwError(() => error);
      })
    );
  }

  private unauthorizedError(next: HttpHandler, req: HttpRequest<any>) {
    const refreshtoken = localStorage.getItem('refreshtoken');
    if (!refreshtoken) {
      this.router.navigate(['/auth/sign-in']);
      return;
    }

    this.authService.refreshToken(refreshtoken).subscribe({
      next: (value) => {
        localStorage.setItem('accesstoken', value.accessToken);
        next.handle(req);
      },
      error: () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        this.router.navigate(['/auth/sign-in']);
      },
    });
  }
}
