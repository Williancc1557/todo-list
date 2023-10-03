import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { UserParamsDto } from 'src/app/models/user.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: UserParamsDto = {
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
    if (this.user.email == '' || this.user.password == '') {
      return true;
    }
    return false;
  }

  submit() {}
}
