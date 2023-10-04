import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, empty } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { RefreshTokenOutputDto } from '../models/refreshtoken.dto';

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
            return this.handleUnauthorizedError(req, next);
          default:
            return throwError(() => error);
        }
      })
    );
  }

  private handleUnauthorizedError(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const refreshtoken = localStorage.getItem('refreshtoken');
    if (!refreshtoken) {
      this.router.navigate(['/auth/sign-in']);
      return empty();
    }

    return this.authService.refreshToken(refreshtoken).pipe(
      switchMap((newToken: RefreshTokenOutputDto) => {
        localStorage.setItem('accesstoken', newToken.accessToken);
        return next.handle(
          req.clone({
            setHeaders: {
              accesstoken: newToken.accessToken,
            },
          })
        );
      }),
      catchError(() => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        this.router.navigate(['/auth/sign-in']);
        return empty();
      })
    );
  }
}
