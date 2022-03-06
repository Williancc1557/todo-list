import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-read-finished',
  templateUrl: './task-read-finished.component.html',
  styleUrls: ['./task-read-finished.component.css']
})
export class TaskReadFinishedComponent implements OnInit {
  public tasks: Array<Task> = []

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.taskService.readNotChecked().subscribe(tasks => {
      this.tasks = tasks.body
    })
  }

  public reloadTask(id: number) {
    this.taskService.update({ id, finished: false }).subscribe(() => {
      this.taskService.showMessage("A tarefa foi reinserida na sua lista de tarefas!")
    })
  }
}
