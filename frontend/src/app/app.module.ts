import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { TodoCrudComponent } from './views/todo-crud/todo-crud.component';
import { TaskReadComponent } from './components/task/task-read/task-read.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskChangeComponent } from './components/task/task-change/task-change.component';
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { TaskCancelComponent } from './components/task/task-cancel/task-cancel.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { TaskFinishComponent } from './components/task/task-finish/task-finish.component';
import { TodoFinishedComponent } from './views/todo-finished/todo-finished.component';
import { TaskReadFinishedComponent } from './components/task/task-read-finished/task-read-finished.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoCrudComponent,
    TodoCrudComponent,
    TaskReadComponent,
    TaskChangeComponent,
    TaskCancelComponent,
    TaskCreateComponent,
    TaskFinishComponent,
    TodoFinishedComponent,
    TaskReadFinishedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
