import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestResponse, Task } from './task.model';
import { MatSnackBar } from "@angular/material/snack-bar"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = "http://localhost:3000"

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: 'top'
    })
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl+ "/save", task)
  }

  readChecked(): Observable<RequestResponse> {
   return this.http.get<RequestResponse>(this.baseUrl + "/find/only/checkeds")
  }

  readNotChecked(): Observable<RequestResponse> {
   return this.http.get<RequestResponse>(this.baseUrl + "/find/only/notcheckeds")
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(this.baseUrl + "/change", task)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `/delete/${id}`)
  }

  readById(id: string): Observable<Task> {
    return this.http.get<Task>(this.baseUrl + `/find/${id}`)
  }
}
