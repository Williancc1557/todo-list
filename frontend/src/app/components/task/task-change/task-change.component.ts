import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-change',
  templateUrl: './task-change.component.html',
  styleUrls: ['./task-change.component.css']
})
export class TaskChangeComponent implements OnInit {

  public task: Task = {description: "", name: ""}

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.taskService.readById(id!).subscribe(task => {
      this.task = task
    })
  }

  public updateProduct(): void {
    this.taskService.update(this.task).subscribe(() => {
      this.taskService.showMessage("Tarefa atualizada com sucesso!")
      this.router.navigate([""])
    })
  }

  public cancel(): void {
    this.router.navigate([""])
  }

}
