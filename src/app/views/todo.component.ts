import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  styleUrls: ['./todo.component.css'],
  selector: 'todo-app',
  templateUrl: './todo.component.html',
})
export class TodoListComponent {
  constructor(public readonly taskService: TaskService) {}
}
