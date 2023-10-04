import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { UserParamsDto } from 'src/app/models/user.dto';
import { SignInInputDto } from 'src/app/models/sign-in.dto';
import { AuthService } from 'src/app/services/auth.service';

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
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  isNullInput(): boolean {
    return this.user.email == '' || this.user.password == '';
  }

  submit() {
    this.authService.signIn(this.user).subscribe({
      next: (value) => {
        localStorage.setItem('refreshtoken', value.refreshToken);
        this.generateAccesstoken();
      },
      error: () => this.error(),
    });
  }

  generateAccesstoken() {
    this.authService
      .refreshToken(localStorage.getItem('refreshtoken')!)
      .subscribe({
        next: (value) => {
          localStorage.setItem('accesstoken', value.accessToken);
          this.utilsService.showSnackBarSucess('Realizou o login com sucesso!');
          this.router.navigate(['/home']);
        },
        error: () => this.error(),
      });
  }

  error() {
    this.utilsService.showSnackBarError(
      'Ocorreu algum erro, tente novamente mais tarde!'
    );
  }
}
