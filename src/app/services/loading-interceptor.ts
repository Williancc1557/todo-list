import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { TaskService } from './task.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    public readonly taskService: TaskService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.taskService.isLoading = true;
    this.authService.isLoading = true;

    return next.handle(req).pipe(
      finalize(() => {
        this.taskService.isLoading = false;
        this.authService.isLoading = false;
      })
    );
  }
}
