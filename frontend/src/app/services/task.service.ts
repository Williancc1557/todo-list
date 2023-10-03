import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../components/task.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

type snackBarErrorTypes = 'internalError' | 'inputUndefined';

interface SnackBarErrorInput {
  msg?: string;
  type?: snackBarErrorTypes;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseUrl = 'http://localhost:3000';

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  showSnackBarSucess(msg: string) {
    return this.snackBar.open(msg, 'x', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'snack-bar-sucess',
    });
  }

  public showSnackBarError({ type, msg }: SnackBarErrorInput) {
    const snackBarConfig: MatSnackBarConfig<any> = {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snack-bar-error'],
    };

    let messageWithType: string | undefined;

    switch (type) {
      case 'inputUndefined':
        messageWithType = 'Preencha todos os campos!';
        break;
      case 'internalError':
        messageWithType = 'Ocorreu algum erro, tente novamente mais tarde!';
        break;
    }

    return this.snackBar.open(messageWithType || msg!, 'x', snackBarConfig);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl + '/save', task);
  }

  readChecked(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.baseUrl + '/find/only/checkeds');
  }

  readNotChecked(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.baseUrl + '/find/only/notcheckeds');
  }

  update(task: Task): Observable<Task> {
    const { id, ...taskWithoutId } = task;

    return this.http.put<Task>(this.baseUrl + `/update/${id}`, taskWithoutId);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `/delete/${id}`);
  }

  readById(id: string): Observable<Task> {
    return this.http.get<Task>(this.baseUrl + `/find/${id}`);
  }
}
