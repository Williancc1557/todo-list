import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-cancel',
  templateUrl: './task-cancel.component.html',
  styleUrls: ['./task-cancel.component.css'],
})
export class TaskCancelComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public deleteProduct() {
    this.taskService.delete(this.id!).subscribe(() => {
      this.taskService.showMessage('Tarefa cancelada com sucesso!');
      this.router.navigate(['']);
    });
  }

  public cancel() {
    this.router.navigate(['']);
  }
}
