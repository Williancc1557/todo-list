import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-finish',
  templateUrl: './task-finish.component.html',
  styleUrls: ['./task-finish.component.css']
})
export class TaskFinishComponent implements OnInit {

  id = Number(this.route.snapshot.paramMap.get("id"))

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public updateProduct(): void {
    this.taskService.update({id: this.id!, finished: true}).subscribe(() => {
      this.taskService.showMessage("Tarefa finalizada com sucesso!")
      this.router.navigate([""])
    })
  }

  public cancel(): void {
    this.router.navigate([""])
  }
}
