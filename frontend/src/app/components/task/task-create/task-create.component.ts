import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task: Task = {name: ""}

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public createTask(): void {
    this.taskService.create(this.task).subscribe(() => {
      this.taskService.showMessage("Tarefa criada!")
      this.router.navigate([""])
    })
  }

  public cancel(): void {
    this.router.navigate([""])
  }
}
