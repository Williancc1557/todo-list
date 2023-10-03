import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { UserParamsDto } from 'src/app/models/user.dto';
import { SignInInputDto } from 'src/app/models/sign-in.dto';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  user: SignInInputDto = {
    email: '',
    password: '',
  };

  loading: boolean = false;

  public constructor(
    private readonly utilsService: UtilsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  isNullInput(): boolean {
    return this.user.email == '' || this.user.password == '';
  }

  submit() {}
}
