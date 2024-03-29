import { TodoFinishedComponent } from './views/todo-finished/todo-finished.component';
import { TaskFinishComponent } from './components/task/task-finish/task-finish.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { TaskCancelComponent } from './components/task/task-cancel/task-cancel.component';
import { TaskChangeComponent } from './components/task/task-change/task-change.component';
import { TodoCrudComponent } from './views/todo-crud/todo-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './views/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './views/authentication/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './views/authentication/auth.component';
import { TodoListComponent } from './views/todo.component';
import { HomeGuard } from './services/home.guard';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: TodoListComponent,
    children: [
      {
        path: '',
        component: TodoCrudComponent,
      },
      {
        path: 'finished',
        component: TodoFinishedComponent,
      },
      {
        path: 'change/:id',
        component: TaskChangeComponent,
      },
      {
        path: 'cancel/:id',
        component: TaskCancelComponent,
      },
      {
        path: 'finish/:id',
        component: TaskFinishComponent,
      },
      {
        path: 'create',
        component: TaskCreateComponent,
      },
    ],
    canActivate: [HomeGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
