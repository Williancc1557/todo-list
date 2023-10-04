import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { TodoCrudComponent } from './views/todo-crud/todo-crud.component';
import { TaskReadComponent } from './components/task/task-read/task-read.component';
import { MatTableModule } from '@angular/material/table';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskChangeComponent } from './components/task/task-change/task-change.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TaskCancelComponent } from './components/task/task-cancel/task-cancel.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { TaskFinishComponent } from './components/task/task-finish/task-finish.component';
import { TodoFinishedComponent } from './views/todo-finished/todo-finished.component';
import { TaskReadFinishedComponent } from './components/task/task-read-finished/task-read-finished.component';
import { TitleAnimatedComponent } from './components/authentication/title/title-animated.component';
import { SignInComponent } from './views/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './views/authentication/sign-up/sign-up.component';
import { LoadComponent } from './components/load/load.component';
import { AuthComponent } from './views/authentication/auth.component';
import { TodoListComponent } from './views/todo.component';
import { RequestsInterceptor } from './services/requests-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    TodoCrudComponent,
    TaskReadComponent,
    TaskChangeComponent,
    TaskCancelComponent,
    TaskCreateComponent,
    TaskFinishComponent,
    TodoFinishedComponent,
    TaskReadFinishedComponent,
    TitleAnimatedComponent,
    SignInComponent,
    SignUpComponent,
    LoadComponent,
    TodoListComponent,
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
    MatInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
