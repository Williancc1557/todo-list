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
    const modifiedRequest = req.clone({
      setHeaders: {
        accesstoken: localStorage.getItem('accesstoken') || '', // Use "Authorization" como nome do cabeçalho
      },
    });

    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.unauthorizedError(error);
        }

        return throwError(error);
      })
    );
  }

  private unauthorizedError(error: HttpErrorResponse): Observable<never> {
    const refreshtoken = localStorage.getItem('refreshtoken');
    if (!refreshtoken) {
      this.router.navigate(['/auth/sign-in']);
      return throwError(error);
    }

    this.authService.refreshToken(refreshtoken).subscribe({
      next: (value) => {
        localStorage.setItem('accesstoken', value.accessToken);
      },
      error: () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
      },
    });

    return throwError(error);
  }
}
