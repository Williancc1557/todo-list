import { TodoFinishedComponent } from './views/todo-finished/todo-finished.component';
import { TaskFinishComponent } from './components/task/task-finish/task-finish.component';
import { TaskCreateComponent } from './components/task/task-create/task-create.component';
import { TaskCancelComponent } from './components/task/task-cancel/task-cancel.component';
import { TaskChangeComponent } from './components/task/task-change/task-change.component';
import { TodoCrudComponent } from './views/todo-crud/todo-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: TodoCrudComponent
  },
  {
    path: "finished",
    component: TodoFinishedComponent
  },
  {
    path: "change/:id",
    component: TaskChangeComponent
  },
  {
    path: "cancel/:id",
    component: TaskCancelComponent
  },
  {
    path: "finish/:id",
    component: TaskFinishComponent
  },
  {
    path: "create",
    component: TaskCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
