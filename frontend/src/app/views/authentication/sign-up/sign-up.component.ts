import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { SignUpInputDto } from 'src/app/models/sign-up.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: SignUpInputDto = {
    email: '',
    password: '',
    name: '',
  };
  loading: boolean = false;

  public constructor(
    private readonly utilsService: UtilsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  isNullInput(): boolean {
    return (
      this.user.name == '' || this.user.email == '' || this.user.password == ''
    );
  }

  submit() {}
}
