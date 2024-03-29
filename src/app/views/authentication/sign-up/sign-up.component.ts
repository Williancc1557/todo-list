import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { SignUpInputDto, SignUpOutputDto } from 'src/app/models/sign-up.dto';
import { AuthService } from 'src/app/services/auth.service';

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

  public constructor(
    private readonly utilsService: UtilsService,
    private readonly router: Router,
    public readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  thereIsNullInput(): boolean {
    return (
      this.user.name == '' || this.user.email == '' || this.user.password == ''
    );
  }

  submit() {
    if (this.thereIsNullInput()) {
      this.utilsService.showSnackBarError(
        'Por favor, preencha todos os campos'
      );
      return;
    }

    this.authService.signUp(this.user).subscribe({
      next: (value) => this.success(value),
      error: () => this.error(),
    });
  }

  success(value: SignUpOutputDto) {
    localStorage.setItem('accesstoken', value.accessToken);
    localStorage.setItem('refreshtoken', value.refreshToken);
    this.utilsService.showSnackBarSucess('Registrado com sucesso!');
    this.router.navigate(['/home']);
  }

  error() {
    this.utilsService.showSnackBarError(
      'Ocorreu algo de errado, tente novamente mais tarde!'
    );
  }
}
