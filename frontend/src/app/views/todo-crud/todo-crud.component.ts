import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.css']
})
export class TodoCrudComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }


  navigateToTaskCreate() {
    this.router.navigate(["/create"])
  }

  navigateToTasksFinished() {
    this.router.navigate(["/finished"])
  }
}
