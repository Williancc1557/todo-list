import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-finished',
  templateUrl: './todo-finished.component.html',
  styleUrls: ['./todo-finished.component.css'],
})
export class TodoFinishedComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
